import React from "react";

import Tasks from "./Tasks";
import Form from "./Form";

export default
class Main extends React.Component{
    state = {
            tasks: []
    }
	
	handleSubmit = (e, title, desc)=>{
		e.preventDefault();
		const newTask = {
			title: title,
			description: desc
		}

		this.setState({
			tasks: [...this.state.tasks, newTask]
		});
	}

    render() {
        return(
            <div className="jumbotron container todo-app">
                <Form handleSubmit={this.handleSubmit}/>
                <Tasks tasks={this.state.tasks} />
            </div>
        )
    }
}



