import React, { useState, useEffect } from 'react';
import './App.scss';
import TaskRow from './Components/TaskRow';
import TaskBanner from './Components/TaskBanner';
import TaskCreator from './Components/TaskCreator';
import VisibilityControl from './Components/VisibilityControl';



function App() {

  const [ userName, setUserName] = useState('Daniel');

  const [taskItems, setTaskItems] = useState([

    { name: 'Task One', done: false },
    { name: 'Task Two', done: false },
    { name: 'Task Three', done: true },
    { name: 'Task Four', done: false },

  ])

  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(()=>{
    let data = localStorage.getItem('tasks');

    if (data != null) {

      setTaskItems(JSON.parse(data));

    } else {

      setUserName('Daniel Ejemplo')

      setTaskItems([
        
        { name: 'Task One Example', done: false },
        { name: 'Task Two Example', done: false },
        { name: 'Task Three Example', done: true },
        { name: 'Task Four Example', done: false },

      ])

      setShowCompleted(true);
    }
  },[])


  useEffect(()=>{

    localStorage.setItem('tasks', JSON.stringify(taskItems));


  },[taskItems])

  const createNewTask = taskName => {

    if (!taskItems.find( t => t.name === taskName )) {
      setTaskItems([...taskItems, {name: taskName, done: false}])
    }
  }

  const toggleTask = task =>  {
    
    setTaskItems(taskItems.map( t => ( t.name === task.name ? {...t, done: !t.done} : t)))

  }

  const taskTableRow = (doneValue) => {



   return (

     taskItems.filter( task => task.done === doneValue).map (task =><TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
         
      ))
    
   }
  



  return (

    <div className="container p-5">

      <TaskBanner userName={userName} taskItems={taskItems} />

      <TaskCreator callback={createNewTask}/>

      <table className="table table-striped table-bordered">

        <thead>

          <th>Description</th>
          <th>Done</th>

        </thead>

        <tbody>

        {taskTableRow(false)}
       

        </tbody>
        
      </table>

      <div className="bg-secondary text-white text-center p-2">

        <VisibilityControl 
        
          description="Completed Task"
          isChecked={showCompleted}
          callback={checked => setShowCompleted(checked)}

        />

        {
          showCompleted && (

            <table className="table table-striped table-bordered">

              <thead>
                <tr>
                  <th>Description</th>
                  <th>Done</th>
                </tr>
              </thead>
              <tbody>
                {taskTableRow(true)}
              </tbody>

            </table>
          )
        }

      </div>


    </div>
  )
}

export default App;
