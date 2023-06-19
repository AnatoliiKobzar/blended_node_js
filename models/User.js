const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    refresh_token: String,
    tasks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
      },
    ],
  },
  { timestamps: true, collection: 'Users' }
);

schema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

schema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }

  user.password = await bcrypt.hash(user.password, 12);
  next();
});

const User = mongoose.model('User', schema);

module.exports = { User };
