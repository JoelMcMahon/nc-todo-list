const Task = ({ task, setTodos }) => {
  const checkTask = (e) => {
    setTodos((currTodo) => {
      const copyTodo = currTodo.map((task) => {
        const copyTask = { ...task };
        if (task.todo === copyTask.todo) {
          copyTask.completed = e.target.checked;
        }
        return copyTask;
      });
      return copyTodo;
    });
  };

  return (
    <ul>
      <li>{task.todo}</li>
      <input class="checkbox" type="checkbox" onChange={checkTask} />
    </ul>
  );
};

export default Task;
