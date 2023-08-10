import React, { Component } from 'react';
import axios from "axios";
import Navbar from './navbar.component';


export default class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.onChangeActivity = this.onChangeActivity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      todo: "",    
    };
  }    

  onChangeActivity(e) {
    this.setState({
      todo: e.target.value,    
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const todovar = { todo: this.state.todo, };

    console.log(todovar);

    axios.post("https://tracker-backend-k0zm.onrender.com/todos/add", todovar).then((rec) => {
      window.location = "/";
    });
  }

  render() {
    return(
      <div>
        <Navbar />

        <h3>Create New Taskkkkkk</h3>
        <form onSubmit={this.onSubmit}>
          <div className = "form-group">
            <label>New Task:</label>
            <input 
              type="text"
              required
              className="form-control"
              value={this.state.todo}
              onChange={this.onChangeActivity}
            />
          </div>    

          <div className="form-group">
            <input
              type="submit"
              value="Create Activity Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>  
    );
  }
}