import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar.component';


const Todo = props => (
  <tr className="d-flex">
    <td className="col-10">{props.todo.todo}</td>
    <td className="col-2" style={{textAlign:"right"}}>
      <button onClick={() => { props.deleteTodo(props.todo._id) }} >delete</button>
    </td>  
  </tr>
)

export default class TodosList extends Component {
  constructor(props) {
    super(props);

    this.deleteTodo = this.deleteTodo.bind(this)

    this.state = {todos: []};
  }

  componentDidMount() {
    axios.get('https://tracker-backend-k0zm.onrender.com/todos/')
      .then(response => {
        this.setState({ todos: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteTodo(id) {
    axios.delete('https://tracker-backend-k0zm.onrender.com/todos/delete/'+id)
      .then(response => { console.log(response.data) });

    this.setState({
      todos: this.state.todos.filter(el => el._id !== id)  
    })  
  }
  
  todoList() {
    return this.state.todos.map(currenttodo => {
      return <Todo todo={currenttodo}    
      deleteTodo={this.deleteTodo} key={currenttodo._id} />;
    });
  } 

  render () {
    return (
      <div>
        <Navbar />

        <h3>Logged Todos</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Activity</th>
            </tr>
          </thead>    
          <tbody>
            { this.todoList() }    
          </tbody>
        </table>
      </div>    
    )
  }
}
