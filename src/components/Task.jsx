const Task = ({ task, setTaskList }) => {
  console.log(task)
  const checkTask = (e) => {
    setTaskList((currTaskList) => {
      const copyTaskList = currTaskList.map((activity) => {
        const copyTask = { ...activity };
        if (task.id === copyTask.id) {
          copyTask.completed = e.target.checked;
        }
        console.log(copyTask.completed);
        return copyTask;
      });
      return copyTaskList;
    });
  };

  const deleteTask = (e) => {
    setTaskList((currTaskList) => {
      const updatedTaskList = currTaskList.filter(activity => 
        { return activity.id !== task.id}
      )
      return updatedTaskList;
    }
    )
  }

  return (
    <ul className="container">
      <li className={task.completed ? 'striked' : 'none'}>{task.name}</li>
      <input className="checkbox" type="checkbox" onChange={checkTask} />
      <button type='button' onClick={deleteTask}>❌</button>
    </ul>
  );
};

export default Task;
