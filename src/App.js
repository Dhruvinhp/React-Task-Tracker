import Header from './components/Header'
import Footer from './components/Footer'
import React from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'
import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// function App() {
//   const name='dhruvin'
//   const x= true
//   return (
//     <div className="Container">
//       <h1>Hello {x ? 'yes':'no'}</h1>
//     </div>
//   );
// }

// class App extends React.Component{
// render(){
//   return <h1>Hello from class</h1>
// }
// }

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'SOMETHING',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'ANYTHING',
      day: 'Feb 7th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'SOMETHING',
      day: 'Feb 8th at 1:30pm',
      reminder: true,
    },
    {
      id: 4,
      text: 'ANYTHING',
      day: 'Feb 9th at 1:30pm',
      reminder: true,
    }])
  // Add tasks
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }


  //Delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // Toggle Reminder
  const reminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {
          ...task, reminder:
            !task.reminder
        } : task))
  }

  return (
    <Router>
      <div className='container'>
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? <Tasks tasks={tasks}
              onDelete={deleteTask} onToggle={reminder} /> : <h3>No Tasks</h3>}
          </>
        )} />
        <Route path='/about' component={About}></Route>
        <Footer />
      </div>
    </Router>
  )
}

export default App
