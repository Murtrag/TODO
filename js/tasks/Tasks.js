import React from "react";

import Task from "./Task";

export default
class Tasks extends React.Component{

    render() {
	const tasks = this.props.tasks
        return(
            <ul>
                { tasks && tasks.map((task,i) => (
                     <Task key={i} task={task}/>
                )) }
            </ul>
        )
    }
}



