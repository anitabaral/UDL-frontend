import React,{Component} from 'react';
import './login.css';
import {emailChanged,passwordChanged,loginUser} from '../actions';
import {connect} from 'react-redux';

class Loginpage extends Component {

   
    
    onEmailChange = (e) => {
      let value =e.target.value;
      this.props.emailChanged(value);        
  }
  onPasswordChange= (e) => {
    let value =e.target.value;

    this.props.passwordChanged(value);
  }
  onButtonPress() {
      const { email, password } = this.props;

      this.props.loginUser({ email, password });
  }
   
  renderButton() {
    
    return (
       <button
                type="button"
                className="btn btn-primary"
                
                onClick={this
                .onButtonPress
                .bind(this)}>
                  <i className="fas fa-sign-in-alt">
                  </i>
                 Login
                  </button> 
    );
}
  
    render() {
      return (
        <div className="modal-dialog text-center">
          <div className="header">
            University Data Logistics 
          </div>
          <div className="col-sm-12 main-section">
          
            <div className="modal-content">
              <div className="topic">
                Login
              </div>
              <form className="col-12">
                <div className="form-group">
                  <label htmlFor="username">Username</label>

                  <input
                type="text"
                name="username"
                className=" form-control"
                id="focusedInput"
                placeholder="Username"
                onChange={this.onEmailChange.bind(this)}
                            value={this.props.email}
                />

                </div>
                
                <div className="form-group">
            
                  <label htmlFor="password">Password</label>

                  <input
  
              type="password"
              name="password"
              className=" form-control"
              placeholder="Password"
              onChange={this.onPasswordChange.bind(this)}
                            value={this.props.password}
              />
              {/* <i  id ="lock" class="fas fa-lock"></i> */}
             
                </div>
              </form>
              
                <div className="button">
                {this.renderButton()}
                  

            </div>
        
            </div>
  
          </div>

          </div>
      
      );
    }
  
  }
  const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        user:state.auth.user,
        error:state.auth.error,
        loading:state.auth.loading

    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        emailChanged: (text)=>dispatch(emailChanged(text)), 
        passwordChanged:(text)=>dispatch(passwordChanged(text)), 
        loginUser:({email, password})=>dispatch(loginUser({email, password}))
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Loginpage);