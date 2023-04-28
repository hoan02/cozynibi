import { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

const MonoTodoList = ({ label, tasks, setTasks }) => {
  const [newTasks, setNewTasks] = useState("");

  const handleAddTask = () => {
    if (newTasks.trim()) {
      setTasks([...tasks, newTasks]);
      setNewTasks("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <Box>
        <TextField
          value={newTasks}
          onChange={(e) => setNewTasks(e.target.value)}
          label={`New ${label}`}
          variant="outlined"
          size="small"
          sx={{ width: 500, marginBottom: "16px" }}
        />
        <IconButton onClick={handleAddTask}>
          <Add />
        </IconButton>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <IconButton onClick={() => handleDeleteTask(index)}>
                <Delete />
              </IconButton>
            </li>
          ))}
        </ul>
      </Box>
    </div>
  );
};

export default MonoTodoList;
