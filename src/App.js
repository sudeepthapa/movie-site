import React, { Component } from 'react';
import Searchbar from './components/Searchbar'
import Card from './components/Card'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchbar>
            
        </Searchbar>
        <div>
        <Card/>
        
        </div>

      </div>
    );
  }
}

export default App;
