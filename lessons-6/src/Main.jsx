import { useState } from "react";
import List from "./components/List";
import { v4 as uuidv4 } from 'uuid'
import { useEffect } from "react";
import DateComponent from "./components/DateComponent";

function Main() {

    const [tasks, setTasks] = useState(()=>{
        const storedTodos = localStorage.getItem('tasks');

        if (!storedTodos) {
            return []
        } else {
            return JSON.parse(storedTodos)
        }
    })
    const [tasksTitle, setTasksTitle] = useState('');
 
    useEffect (() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    },[tasks])

    const addTask = (e) => {

        const storedTodos = JSON.parse(localStorage.getItem('tasks'))

        if (e.key === 'Enter' && e.target.value !== '') {
            const currentDate = new Date().toString() 
        setTasks([
            ...storedTodos, {
                id: uuidv4(),
                title: tasksTitle,
                date:currentDate,
                status: false,
            }
        ]);
        setTasksTitle('');
    }
}
        return (
    <div className="container">
        <h1>Note your tasks</h1>
        <DateComponent date={new Date().toString()} />
        <div className="input-filed">
            <input
                value={tasksTitle}
                onChange={event => setTasksTitle(event.target.value)}
                onKeyDown={addTask}
                type="text" />
            <label>Task name</label>
        </div>
        <List tasks={tasks} />
    </div>
)
}

export default Main;