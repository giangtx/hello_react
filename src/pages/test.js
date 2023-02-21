// App.js
import React, { Component } from 'react';
import Paging from './Paging';

class App extends Component {
  paging() {
    console.log('paging:', 'start long ajax request');
  }

  componentDidMount() {
    console.log('App mounted');
    this.paging();
  }

  render() {
    return (
      <div>
          <Paging handleClick={this.paging} 
                  currentPage={2}
                  pagesTotal={100} />
      </div>
    );
  }
}

export default App;