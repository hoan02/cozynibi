import React, { useState } from "react";
import {
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { Add, Delete, Edit, Save, Cancel } from "@mui/icons-material";

const DoubleTodoList = ({ nameKey, nameValue, tasks, setTasks }) => {
  const [newTask, setNewTask] = useState({ [nameKey]: "", [nameValue]: "" });
  const [editIndex, setEditIndex] = useState(-1);
  const [editTask, setEditTask] = useState({ [nameKey]: "", [nameValue]: "" });

  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask({ [nameKey]: "", [nameValue]: "" });
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditTask(tasks[index]);
  };

  const handleSaveTask = () => {
    if (editIndex >= 0) {
      const newTasks = [...tasks];
      newTasks[editIndex] = editTask;
      setTasks(newTasks);
      setEditIndex(-1);
      setEditTask({ [nameKey]: "", [nameValue]: "" });
    }
  };

  const handleCancelEdit = () => {
    setEditIndex(-1);
    setEditTask({ [nameKey]: "", [nameValue]: "" });
  };

  const handleDeleteTask = (index) => {
    setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
  };

  return (
    <>
      <TextField
        value={newTask[nameKey]}
        onChange={(e) => setNewTask({ ...newTask, [nameKey]: e.target.value })}
        label={`New ${nameKey}`}
        variant="outlined"
        size="small"
        sx={{ width: 200, mr: 1 }}
      />
      <TextField
        value={newTask[nameValue]}
        onChange={(e) =>
          setNewTask({ ...newTask, [nameValue]: e.target.value })
        }
        label={`New ${nameValue}`}
        variant="outlined"
        size="small"
        sx={{ width: 500, mr: 1 }}
      />

      <IconButton onClick={handleAddTask}>
        <Add />
      </IconButton>

      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            {editIndex === index ? (
              <div>
                <TextField
                  value={editTask[nameKey]}
                  onChange={(e) =>
                    setEditTask({ ...editTask, [nameKey]: e.target.value })
                  }
                  label={`Edit ${nameKey}`}
                  variant="outlined"
                  size="small"
                  sx={{ width: 200, mr: 1 }}
                />

                <TextField
                  value={editTask[nameValue]}
                  onChange={(e) =>
                    setEditTask({ ...editTask, [nameValue]: e.target.value })
                  }
                  label={`Edit ${nameValue}`}
                  variant="outlined"
                  size="small"
                  sx={{ width: 400, mr: 1 }}
                />
              </div>
            ) : (
              <ListItemText
                primary={task[nameKey]}
                secondary={task[nameValue]}
                sx={{ width: 200 }}
              />
            )}

            <ListItemSecondaryAction sx={{ display: "flex" }}>
              {editIndex === index ? (
                <div>
                  <IconButton onClick={handleSaveTask}>
                    <Save />
                  </IconButton>
                  <IconButton onClick={handleCancelEdit}>
                    <Cancel />
                  </IconButton>
                </div>
              ) : (
                <>
                  <IconButton onClick={() => handleEditTask(index)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteTask(index)}>
                    <Delete />
                  </IconButton>
                </>
              )}
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default DoubleTodoList;
