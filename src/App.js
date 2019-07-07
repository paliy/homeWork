import React, { Component } from 'react';
import AuthForm from './components/AuthForm';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
      return (
        <div className="container">
          <AuthForm />
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return{
      authUser: state
    }
  }

export default connect(mapStateToProps) (App);
