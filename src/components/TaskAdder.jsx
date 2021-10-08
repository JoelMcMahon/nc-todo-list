import { useState } from 'react';

const TaskAdder = ({ setTaskList }) => {
  const [newTask, setNewTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    setTaskList((currTasks) => {
      const taskToAdd = { name: newTask, completed: false };
      const newTaskList = [taskToAdd, ...currTasks];
      return newTaskList;
    });
    setNewTask('');
  };

  return (
    <form onSubmit={addTask}>
      <label htmlFor="todoInput">Todo:</label>
      <input
        required
        value={newTask}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
        type="text"
        id="todoInput"
      ></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskAdder;
