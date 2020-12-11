import React from 'react';

const TaskBanner = (props) =>{


    return (

        <h4 className="d-flex bg-primary text-white p-4 justify-content-center">

            Lista de tareas de {props.userName}
            ({props.taskItems.filter( t => !t.done).length} tareas por terminar)


        </h4>

    )
}

export default TaskBanner;

