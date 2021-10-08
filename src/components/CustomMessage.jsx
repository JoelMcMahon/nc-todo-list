const CustomMessage = ({taskList}) => {
    const taskCount = taskList.length;
    let message = `You've only got ${taskCount} tasks left!`

    if (taskCount > 4) {
        message = `Forgot about your social life, you've got ${taskCount} tasks to complete!`;
    } else if (taskCount === 1){
        message = `Hang in there, You've only got 1 task left!`
    } else if (taskCount === 0) {
        message = `Add Your Tasks Here...`
    }

    return <p>{message}</p>
}

export default CustomMessage;