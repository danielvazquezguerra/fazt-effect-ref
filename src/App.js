import React, { useState } from 'react';
import './App.scss';
import TaskRow from './Components/TaskRow';



function App() {

  const [ userName, setUserName] = useState('Daniel');

  const [taskItems, setTaskItems] = useState([

    { name: 'Task One', done: false },
    { name: 'Task Two', done: false },
    { name: 'Task Three', done: true },
    { name: 'Task Four', done: false },

  ])

  const toggleTask = task =>  {

    setTaskItems(taskItems.map(t=))

  }

  const taskTableRow = () => {

   return (

     taskItems.map( task => <TaskRow task={task} key={task.name}/>
         
      ))
    
   }
  



  return (

    <div>

      <h1>Hola Mundo</h1>

      <table>

        <thead>

          <th>Description</th>
          <th>Done</th>

        </thead>

        <tbody>

        {taskTableRow()};
       

        </tbody>
        
      </table>


    </div>
  );
}

export default App;
