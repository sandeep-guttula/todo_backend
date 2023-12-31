INSERT INTO projects (project_name) VALUES ('Project A');

CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,
    project_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,
    project_id INT REFERENCES projects(project_id) ON DELETE CASCADE,
    task_name VARCHAR(100) NOT NULL,
    start_date DATE,
    end_date DATE,
    status VARCHAR(20) CHECK (status IN ('todo', 'inprogress', 'inreview', 'complete')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tasks (project_id, task_name, start_date, end_date, status) VALUES
(1, 'Do the task', '2023-01-01', '2023-01-10', 'todo'),
(2, 'Learn SQL', '2023-02-01', '2023-02-15', 'inprogress'),
(3, 'Fix bugs', '2023-02-01', '2023-03-15', 'inreview'),
(3, 'Clean house', '2023-03-01', '2023-04-10', 'complete');
