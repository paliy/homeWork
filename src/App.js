import React, { Component } from 'react';
import AuthForm from './components/AuthForm';
import Particles from 'react-particles-js';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
      return (
        <div>
          <Particles
            params={{
        	    "particles": {
        	        "number": {
        	            "value": 100
        	        },
        	        "size": {
        	            "value": 2
        	        },
                  "color": {
                    "value": "#0000ff"
                  },
                  "line_linked": {
                    "color": '#7281ea',
                    "opacity": 1
                  }
        	    },
        	    "interactivity": {
        	        "events": {
        	            "onhover": {
        	                "enable": true,
        	                "mode": "repulse"
        	            }
        	        }
        	    }
        	}} />
          <div className='particles-content'>
            <AuthForm />
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

export default connect(mapStateToProps) (App);
