import { useState } from "react"
import React from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";


function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 6th at 1:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        },
    ]
)

  return (
   <div className='container'>
    <Header/>
    <Tasks tasks={tasks}/>
   </div>
  );
}


export default App;