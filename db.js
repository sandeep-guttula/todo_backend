import pg from "pg";
const { Pool } = pg;
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  connectionString:
    "postgres://todo_task_xb0w_user:9bLv4thVoHIcQbLysKfwdm2rIQhdgWBX@dpg-cm84cr8cmk4c7390aba0-a.singapore-postgres.render.com/todo_task_xb0w",
  ssl: {
    rejectUnauthorized: false,
  },
});

// const pool = new Pool({
//   user: "todo_task_xb0w_user",
//   password: "9bLv4thVoHIcQbLysKfwdm2rIQhdgWBX",
//   host: "dpg-cm84cr8cmk4c7390aba0-a",
//   port: "5432",
//   database: "todo_task_xb0w",
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

// const pool = new Pool({
//   user: "postgres",
//   password: "1234",
//   host: "localhost",
//   port: "5432",
//   database: "tododb",
// });

export default pool;
