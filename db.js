import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  connectionString:
    "postgres://default:RUOWSLi4c2pb@ep-calm-bird-61132800.us-east-1.postgres.vercel-storage.com:5432/verceldb",
  ssl: {
    rejectUnauthorized: false,
  },
});

// const pool = new Pool({
//   user: "postgres",
//   password: "1234",
//   host: "localhost",
//   port: "5432",
//   database: "tododb",
// });

export default pool;
