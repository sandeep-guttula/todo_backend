import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();

const PORT = 8080;
app.use(cors());
app.use(express.json());

// pool.connect((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Connected to DB");
//   }
// });

app.get("/test", (req, res) => {
  res.send("Our express server is running");
});

app.get("/projects", async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM projects");
    res.json(response.rows);
  } catch (error) {
    console.log(error);
  }
});

app.get("/todos/:project_id", async (req, res) => {
  try {
    const { project_id } = req.params;
    const allTodos = await pool.query(
      `SELECT * FROM tasks WHERE project_id = ${project_id}`
    );
    res.json(allTodos.rows);
  } catch (error) {
    console.log(error);
  }
});

app.post("/create-project", async (req, res) => {
  try {
    const { project_name } = req.body;
    const newProject = await pool.query(
      "INSERT INTO projects (project_name) VALUES($1) RETURNING *",
      [project_name]
    );
    res.json(newProject.rows);
  } catch (error) {
    console.log(error);
  }
});

app.post("/create-todo", async (req, res) => {
  try {
    const { project_id, task_name, start_date, end_date, status } = req.body;
    console.log(req.body);
    const newTodo = await pool.query(
      "INSERT INTO tasks (project_id, task_name, start_date, end_date, status) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [project_id, task_name, start_date, end_date, status]
    );
    res.json(newTodo.rows);
  } catch (error) {
    console.log(error);
  }
});

app.get("/:project_id/:task_id", async (req, res) => {
  try {
    const { project_id, task_id } = req.params;
    const allTodos = await pool.query(
      `SELECT * FROM tasks WHERE project_id = ${project_id} AND task_id = ${task_id}`
    );
    res.json(allTodos.rows);
    // res.send(project_id + " " + task_id);
  } catch (error) {
    console.log(error);
  }
});

app.put("/update-todo/:project_id/:task_id", async (req, res) => {
  try {
    const { project_id, task_id } = req.params;
    const { status } = req.body;
    const updateTodo = await pool.query(
      `UPDATE tasks SET status = '${status}' WHERE project_id = ${project_id} AND task_id = ${task_id} RETURNING *`
    );
    res.json(updateTodo.rows);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
