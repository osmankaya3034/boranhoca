import "./App.css";
import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from "./Components/Form";
import {useState} from 'react'
import Main from "./Components/Main";

function App() {

  const [task, setTask] = useState('merhaba')
  const [date, setDate] = useState('06.02.2023')
  const [works, setWorks] = useState([{task:'homework', date:'06.02.2023'}])

  const addTask = () => {

    setWorks([...works,{task:task,date:date}])

  }

  return (
    <div className="App">
      <Header />
      <Form setTask={setTask} setDate={setDate} addTask={addTask}/>
      <Main works={works}/>
    </div>
  );
}

export default App
