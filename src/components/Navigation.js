import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import history from './../history'
import {logOut} from './../actions'
import 'bootstrap/dist/css/bootstrap.min.css';

class NavigationComponent extends Component {

  render() {

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-my">
          <ul className="navbar-nav mr-auto">
            <li key='1'><Link to='/get-upcoming-flights' className={`nav-link ${this.activeLink() === 'active-1' ? 'active' : ''}`}>Upcoming Flights</Link></li>
            <li key='2'><Link to='/rooming-list' className={`nav-link ${this.activeLink() === 'active-2' ? 'active' : ''}`}>Rooming List</Link></li>
            <li key='3'><Link to='/transfers-list' className={`nav-link ${this.activeLink() === 'active-3' ? 'active' : ''}`}>Transfer List</Link></li>
            <li key='4'><Link to='/flight-passenger-list' className={`nav-link ${this.activeLink() === 'active-4' ? 'active' : ''}`}>Flight Passenger List</Link></li>
            <li key='5'><Link to='/user-info' className={`nav-link ${this.activeLink() === 'active-5' ? 'active' : ''}`}>User Info</Link></li>
          </ul>
          <div onClick={logOut}><Link to='/' className='nav-link logout'>Log out</Link></div>
        </nav>
      </div>
    );
  }

  activeLink = () => {
    if (history.location.pathname === '/get-upcoming-flights')
      return 'active-1'

    if (history.location.pathname === '/rooming-list')
      return 'active-2'

    if (history.location.pathname === '/transfers-list')
      return 'active-3'

    if (history.location.pathname === '/flight-passenger-list')
      return 'active-4'

    if (history.location.pathname === '/user-info')
      return 'active-5'
  }
}


const mapStateToProps = state => {
  return{
    data: state
  }
}

export default connect(mapStateToProps) (NavigationComponent);
