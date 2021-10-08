import './App.css';
import Header from './components/Header';
import TaskAdder from './components/TaskAdder';
import DisplayList from './components/DisplayList';
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([
    {
      name: 'Breakfast',
      completed: false,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <TaskAdder setTaskList={setTaskList} />
      <DisplayList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
