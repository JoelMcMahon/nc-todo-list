import Task from './Task';

const DisplayList = ({ taskList, setTaskList }) => {
  return (
    <section>
      {taskList.map((task) => {
        return <Task task={task} key={task.id} setTaskList={setTaskList} />;
      })}
    </section>
  );
};

export default DisplayList;
