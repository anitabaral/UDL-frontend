import React, { Component } from 'react';
import './App.css';
import { Provider, } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import Loginpage from './login/loginpage';

class App extends Component {


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))


    return (

      <Provider store={store}>
        <Loginpage/>
         

<<<<<<< HEAD
=======

>>>>>>> 604a02102e1b5b9243cf86a9055e3490a7ae4aba
      </Provider>




    );
  }
}
export default App;
