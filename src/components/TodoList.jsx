import Task from './Task';

const TodoList = ({ Todo, setTodos }) => {
  return (
    <section>
      {Todo.map((task) => {
        return <Task task={task} key={task.todo} setTodos={setTodos} />;
      })}
    </section>
  );
};

export default TodoList;
