import './App.css';
import Header from './components/Header';
import TodoAdder from './components/TodoAdder';
import TodoList from './components/TodoList';
import {useState} from 'react';

function App() {

  const [Todo, setTodos] = useState([
    {
      todo: "Breakfast",
      completed: false
    }
  ])

  return (
    <div className="App">
      <Header />
      <TodoAdder />
      <TodoList Todo={Todo} />
    </div>
  );
}

export default App;
