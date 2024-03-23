import { useState } from "react";
import DateComponent from "../components/DateComponent";


export default function Item({ title, id, date, status }) {

    const classes = ['todo'];
    const [checked, setChecked] = useState(status)

    if (checked) {
        classes.push('status');
    }

    const updateStatus = () => {
        setChecked(!checked);
        const storeTodos = JSON.parse(localStorage.getItem('tasks'));
        storeTodos.map((el) => {
            if (el.id === id) {
                el.status = !checked;

            }
            return true
        })
        localStorage.setItem('tasks', JSON.stringify(storeTodos))

    }

    const [visible, setVisible] = useState(true);

    const removeElement = () => {
        setVisible(prev => !prev);
        const storedTodos = JSON.parse(localStorage.getItem('tasks'));
        let removeTodos = storedTodos.filter(item =>{
            if (item.id !== id){
                return true
            }
            return false
        });
        localStorage.setItem('tasks', JSON.stringify(removeTodos))
    }

    return (
        <>
        {visible && ( <li className={classes.join(' ')}>
            <label>
                <input
                    checked={checked}
                    onChange={updateStatus}
                    type="checkbox" />
                <span>{title}</span>
                <DateComponent date={date} />
                <i  className="material-icon red-text"
                    onClick={removeElement}>
                    X
                </i>
            </label>
        </li>
        )}
        </>
    )
}



