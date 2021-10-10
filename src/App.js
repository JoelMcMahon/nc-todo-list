import './App.css';
import Header from './components/Header';
import TaskAdder from './components/TaskAdder';
import DisplayList from './components/DisplayList';
import CustomMessage from './components/CustomMessage';
import TaskListDeleter from './components/TaskListDeleter';
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([
    // {
    //   // name: '',
    //   // completed: false,
    // },
  ]);

  return (
    <div className="App">
      <section class='listCard'>
      <Header />
      <CustomMessage taskList={taskList}/>
      <TaskAdder setTaskList={setTaskList} />
      <TaskListDeleter setTaskList={setTaskList}/>
      <DisplayList taskList={taskList} setTaskList={setTaskList} />
      </section>
    </div>
  );
}

export default App;
