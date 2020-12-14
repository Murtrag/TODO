import React from "react";

export default class Task extends React.Component{
	state = {
		time: 0,
		currentTime: null
	}
	handleAddOperation = (e)=>{
		e.preventDefault();
		if (this.startOperation){
			return null
		}
		this.startOperation = setInterval(()=>{
			this.setState({time: this.state.time + 100})
		},100)

	}
	handleFinish= (e)=>{
		e.preventDefault();
		if(this.startOperation){ 
			clearInterval(this.startOperation);
			this.startOperation=false;
		}


	}
	
	time(ms) {
	    return new Date(ms).toISOString().slice(11, -1);
	}

    render() {
        return(
            <li className="list-group-item active task-description" style={{margin: '3% 0 2% 0'}}>
		<span className="float-right">{this.time(this.state.time)}</span>
                <h2>{this.props.task.title}</h2>
                <p>{this.props.task.description}</p>
                <a href="" onClick={this.handleFinish} className="btn btn-secondary float-right">Finish</a>
                <a href="" onClick={this.handleAddOperation} className="btn btn-secondary float-right">Add operation</a>
            </li>
        )
    }
}
