import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css';
import router from './router'

class App extends Component {

  render() {
    console.log('App Component', this.props)
    return (
      <div>
        {router}
      </div>
    );
  }
}

// export default App;

// does store have to be connected? seems to work without it.
function mapStateToProps(state){
  return state
};
export default connect(mapStateToProps)(App);