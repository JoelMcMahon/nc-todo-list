import { useState } from 'react';

const TodoAdder = (props) => {
  const { setTodos } = props;
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    setTodos((currTodos) => {
      const todoToAdd = { todo: newTodo, completed: false };
      const newTodos = [todoToAdd, ...currTodos];
      return newTodos;
    });
    setNewTodo('');
  };

  return (
    <form onSubmit={addTodo}>
      <label htmlFor="todoInput">Todo:</label>
      <input
        required
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
        type="text"
        id="todoInput"
      ></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoAdder;
