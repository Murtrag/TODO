import React from "react";


export default
class Form extends React.Component{
	state = {
		title: "",
		description: ""
	}

	handleChange = (e)=>{
		this.setState({
			[e.target.name]: e.target.value
		})
	}

    render() {
	    const {title, description} = this.state;
        return(
            <form onSubmit={(e)=>(this.props.handleSubmit(e,title,description))} className="form-group" className="new-task">
                <h2>Add new task</h2>
                <input type="text" className="form-control" value={this.state.title} onChange={this.handleChange} name="title" placeholder="Title" />
                    <input type="text" className="form-control" value={this.state.description} onChange={this.handleChange} name="description" placeholder="Description"/>
                    <input type="submit" value="Add" className="btn btn-primary"/>
            </form>
        )
    }
}



