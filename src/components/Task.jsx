const Task = ({ task, setTaskList }) => {
  const checkTask = (e) => {
    setTaskList((currTaskList) => {
      const copyTaskList = currTaskList.map((activity) => {
        const copyTask = { ...activity };
        if (task.name === copyTask.name) {
          copyTask.completed = e.target.checked;
        }
        console.log(copyTask.completed);
        return copyTask;
      });
      return copyTaskList;
    });
  };

  return (
    <ul className="container">
      <li className={task.completed ? 'striked' : 'none'}>{task.name}</li>
      <input className="checkbox" type="checkbox" onChange={checkTask} />
    </ul>
  );
};

export default Task;
