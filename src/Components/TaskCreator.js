import React, {useState} from 'react'

const TaskCreator = (props) => {

    const [ newTaskName, setNewTaskName ] = useState('');

    const updateNewTasValue = e => {

        setNewTaskName(e.target.value);
    
    }

    const createNewTask  = () => {

        props.callback(newTaskName);
        setNewTaskName('');
        
    }



    return (

        <div className="my-1">

            <input type="text"
            className="form-control"
            value={newTaskName}
            onChange={updateNewTasValue}
            />

            <button className="btn btn-primary mt-1" onClick={createNewTask}>
                Add
            </button>
            
        </div>
    )
}

export default TaskCreator;
