


const TaskListDeleter = ({setTaskList}) => {

    const deleteAllTasks = () => {
        setTaskList([]) 
    }

    return <button type="button" onClick={deleteAllTasks}>Delete All Tasks</button>
}

export default TaskListDeleter;
