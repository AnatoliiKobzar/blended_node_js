require('dotenv').config();
const { app } = require('./app');
const { connectDB } = require('./db/connectDB');

const { PORT, DB_URL } = process.env;

(async () => {
  await connectDB(DB_URL);
  console.log(`Database connection established successfully!`);

  app.listen(PORT, () => {
    console.log(`The server is up and running on http://localhost:${PORT}!`);
  });
})();
