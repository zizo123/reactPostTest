import React , {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
// import uuid from 'uuid';
import About from './components/pages/About';
import axios from 'axios';
 
class App extends Component{

  URL = 'https://jsonplaceholder.typicode.com/todos'; 
  state = {
    todos :[ ] 
  }
  componentDidMount() {
    axios.get(this.URL+'?_limit=10')
    .then(res => this.setState({todos: res.data }));
  }
  delTodo= (id) => {
    axios.delete(this.URL+`/${id}`)
    .then(res => this.setState({todos: this.state.todos.filter(todo => todo.id !== id )}));
  }
  addTodo = (title) => {
    axios.post(this.URL,{
      title,
      completed: false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data] }) )
  }
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = ! todo.completed
      }
      return todo;
    })
  });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render= {props => (
            <React.Fragment>
              <AddTodo addTodo= {this.addTodo}/>
              <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/>
            </React.Fragment>
          )} />
          
          <Route path="/about" component= {About}/>
        </div>
      </Router>
    );
  }
  
}

export default App;
