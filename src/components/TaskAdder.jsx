import { useState } from 'react';

let idCount = 0;
const TaskAdder = ({ setTaskList }) => {
  const [newTask, setNewTask] = useState('');


  const addTask = (e) => {
    e.preventDefault();
    setTaskList((currTasks) => {
      idCount++
      const taskToAdd = {id: idCount, name: newTask, completed: false };
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
