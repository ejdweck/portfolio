import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import { Education, Work, Projects } from './components/Content'


class App extends Component {
  render() {
    return (
	    <div className="App">
	    	<Header />
	    	<Projects />
	    	<Work />
	    	<Education />
      </div>
    )
  }
}

export default App;
