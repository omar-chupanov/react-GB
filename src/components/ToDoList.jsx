import { Button, TextField, Card, ListItem, IconButton, Typography, List } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


import { useState } from "react";

export default function ToDoList() {
    const [task, setTask] = useState([])
    const [newTask, setNewTask] = useState('')

    const handleInputChange = (e) => {
        setNewTask(e.target.value)
    }

    const addTask = () => {
        if (newTask !== '') {
            setTask(task => [...task, newTask])
            setNewTask('');
        }
    }

    const deleteTask = (id) => {
        setTask(task.filter((_, index) => index !== id))
    }

    return (
        <div style={{ margin: '20px' }}>
            <Typography variant="h5" gutterBottom>Список задач</Typography>
            <TextField
                style={{ marginBottom: '20px' }}
                variant="outlined"
                type="text"
                value={newTask}
                onChange={handleInputChange}
                fullWidth />

            <Button
                variant='contained'
                onClick={addTask}>Добавить</Button>

            <List style={{
                margin: '20px',
                padding: '20px',
                border: '1px solid black',
                borderRadius : '8px'
                }}>{task.map((value, id) => (

                    <ListItem key={id}>{value}<IconButton color="error" onClick={() => deleteTask(id)}>  <DeleteIcon />  </IconButton></ListItem>

                ))}
        </List>
        </div >
    );

}