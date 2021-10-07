const TodoList = ({Todo}) => {
    return (
        <ul>
            {Todo.map((todo) => {
                return <li key='todo.todo'>{todo.todo}</li>
            })}
        </ul>
    )
}

export default TodoList; 