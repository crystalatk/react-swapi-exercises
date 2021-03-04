import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import CharacterProfile from "./components/CharacterProfile";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    }
  }

  async componentDidMount () {
    const url = `https://swapi.dev/api/people/`;
    const characterData = await fetch(url)
      .then(response => response.json());
    this.setState({
      characters: characterData.results,
    });
  }

  render() {
    const { characters } = this.state;
    console.log("THIS IS THE CHARACTER DATA: ", characters);
    return (
      <div className="App">
        <Router >
          
          <header className="App-header">
            <Link to='/'>
              <h1>Star Wars Characters!</h1>
            </Link>
          </header>
          <Route exact path="/">
            {characters.length !== 0 ?
            <CharacterList characters={characters}/> :
            <h3>Loading Characters...</h3>
          }
          </Route>
          <Route path={`/character/:id`}>
          {characters.length !== 0 ?
            <CharacterProfile characters={characters}/> :
            <h3>Loading Characters...</h3>
          }
          </Route>

        </Router>
        
      </div>
    );
  }
};

export default App;
