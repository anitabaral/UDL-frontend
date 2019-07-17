import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link, BrowserRouter as Router, browserHistory } from 'react-router-dom'
// import './index.css';
import App from './App';
import Sidebar from './superadmin/sidebar';
import Homepage from './student/homepage';
import Academic from './superadmin/Academic'
import Loginpage from './login/loginpage';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider, } from 'react-redux';
import AcademicReducer from './reducers/AcademicReducer';


const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
 ReactDOM.render(

        <Provider store={store}>
            <Router >
              <Switch>
                <Route exact path="/" component={Loginpage} />
    
    
                <  Route  path="/info" component={Academic} />
             {/* </Route> */}
             </Switch>
            </Router>
        </Provider>,
        document.getElementById('root')
    
    
    )