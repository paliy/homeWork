import React, { Component } from 'react';
import history from '../history'
import { connect } from 'react-redux';
import {loginUser, getUpcomingFlights, getUserInfo} from '../actions'
import 'bootstrap/dist/css/bootstrap.min.css';

class AuthForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const User =     this.getUser.value;
    const Code =     this.getCode.value;
    const Password = this.getPassword.value;
    const data = {
      User,
      Code,
      Password
    };

    this.props.dispatch(loginUser(data)).then(
      history.push('/get-upcoming-flights'),
      this.props.dispatch(getUpcomingFlights()),
      this.props.dispatch(getUserInfo())
    )

    this.getUser.value = '';
    this.getCode.value = '';
    this.getPassword.value = '';
  };

  state = {
    presseSubmit: false
  }

  handleFillForm = () => {
    const value = {
      user: 'dev',
      code: 'BRIGHT',
      pass: 'sf*&4okgrf&^regrfskl'
    }

    this.getUser.value = value.user;
    this.getCode.value = value.code;
    this.getPassword.value = value.pass;
    this.setState({presseSubmit: true})
  }

  render() {

    return (
      <div className="card row">
        <div className="card-body col-sm-5">
          <h2 className="card-title mb-5 text-center">Auth User</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                ref={input => this.getUser = input}
                required
                className="form-control"
                type="text"
                placeholder="User"
              />
            </div>
            <div className="form-group">
              <input
                ref={input => this.getCode = input}
                required
                className="form-control"
                type="text"
                placeholder="Code"
              />
            </div><div className="form-group">
              <input
                ref={input => this.getPassword = input}
                required
                className="form-control"
                type="password"
                placeholder="Password"
              />
            </div>
            <button disabled={!this.state.presseSubmit} className="btn btn-success btn-auth">
              SUBMIT
            </button>
          </form>
          <button onClick={this.handleFillForm} className="btn btn-secondary btn-auth">Fill form</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    authUser: state
  }
}

export default connect(mapStateToProps) (AuthForm);
