import './App.css';
import React, {Component} from 'react';
import {CardList, } from './componets/card-list/card-list.component';
import { SearchBox } from "./componets/searchbox/search-box.component";
class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
    .catch(err => console.log(err))
  }

  handleChange =(e) =>{
    this.setState({searchField: e.target.value})
  }
  render() {

    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange}/>
      <CardList monsters={filteredMonsters}/>
    </div>
    )
  }
}

export default App;
