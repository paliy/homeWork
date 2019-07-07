import React, { Component } from 'react';
import NavigationComponent from '../Navigation'
import { connect } from 'react-redux';
import 'react-day-picker/lib/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class UserInfo extends Component {

  render() {
    const email = this.props.data.userInfo.Email

    return (
      <div className='container'>
      <NavigationComponent />
        <div className='data-box'>
          <div className='user-img-block'>
            <div className='user-img' />
          </div>
          <div className='user-info-block'>
            <div className='user-name'>
              <h5>User: <span>{this.props.data.userInfo.User}</span></h5>
            </div>
            <div className='user-info'>
              <h6><span className='item-name'>Email:</span> <span>{email ? email : 'no email'}</span></h6>
              <h6><span className='item-name'>Login Type:</span> <span>{this.props.data.userInfo.LoginType}</span></h6>
              <h6><span className='item-name'>Name:</span> <span>{this.props.data.userInfo.Name}</span></h6>
              <h6><span className='item-name'>Market:</span> <span>{this.props.data.userInfo.MarketInfo.Market.Code}</span></h6>
              <h6><span className='item-name'>Operator:</span> <span>{this.props.data.userInfo.MarketInfo.Operator.Name}</span></h6>
              <h6><span className='item-name'>Operator Location:</span> <span>{this.props.data.userInfo.MarketInfo.OperatorLocation.Name}</span></h6>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // renderNavList() {
  //   return (
  //     <nav className="navbar navbar-expand-lg navbar-light bg-my">
  //       <ul className="navbar-nav mr-auto">
  //         <Link className='nav-link' to='/transfers-list/flight-pax-count'>Flight Pax Count</Link>
  //         <Link className='nav-link' to='/transfers-list/pax-count-details'>Pax Count</Link>
  //         <Link className='nav-link' to='/transfers-list/results'>Results</Link>
  //       </ul>
  //     </nav>
  //   )
  // }
}

const mapStateToProps = state => {
  return{
    data: state
  }
}

export default connect(mapStateToProps) (UserInfo);
