import React, { Component } from 'react';
<<<<<<< HEAD
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
class Index extends Component {
    state = {
        appState:'null'
    };
    componentDidMount() {
        const updatedAppState = (
            <Provider store={store}>
                <Router>
                    <div className="Index">
                        <Switch>
                            <Route exact path="/" component={Loginpage} />
                            <Route exact path="/info" component={Academic} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
        setTimeout(() => {
            this.setState ({appState : updatedAppState});
        },0);
       
    }
    render(){
        return this.state.appState;
    }
}

export default Index;


// ReactDOM.render(

//     <Provider store={store}>
//         <Router >
//           <Switch>
//             <Route exact path="/" component={Loginpage} />


//             <Route exact path="/info" component={Academic} />
//          {/* </Route> */}
//          </Switch>
//         </Router>
//     </Provider>,
//     document.getElementById('root')


// )


// // ReactDOM.render(Routing, document.getElementById('root'));

// // // If you want your app to work offline and load faster, you can change
// // // unregister() to register() below. Note this comes with some pitfalls.
// // // Learn more about service workers: https://bit.ly/CRA-PWA
// // serviceWorker.unregister();
=======
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
>>>>>>> 3415f86ea8595782298bfd67cd6abb496a1445bb
