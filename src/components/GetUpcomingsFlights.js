import React, { Component } from 'react';
import NavigationComponent from './Navigation'
import moment from 'moment'
import { connect } from 'react-redux';
import {getUpcomingFlights} from '../actions'
import 'bootstrap/dist/css/bootstrap.min.css';

class GetUpcomingsFlights extends Component {
  handleGetUpcomingFlights = event => {
    this.props.dispatch(getUpcomingFlights());
  };

  render() {
    const data = this.props.data.upcamingFlights

    return (
      <div className='container'>
        <NavigationComponent />
        <ul className='flight-list'>
          {data.sort().map(this.getItemList)}
        </ul>
      </div>
    );
  }

  getItemList = (item, key) => {
    const flightItem =
      <li key={key}>
        <div className='fly-block'>
          <div className='img-block'></div>
          <div className='info-block'>
            <div className='airport-info'>
              <div className='departure'>
                <span>{item.DepartureAirport.Name}</span>
                <span>({item.DepartureAirport.Code})</span>
              </div>
              <div className='arrival'>
                <span>{item.ArrivalAirport.Name}</span>
                <span>({item.ArrivalAirport.Code})</span>
              </div>
            </div>
            <div className='Pnl-info'>
              <div className='pnl-name'><h3>PnlName: {item.PnlName}</h3></div>
              <div className='time'><h3>Time: {moment(item.FlyDate).format("MMM Do YY")}</h3></div>
            </div>
          </div>
        </div>
      </li>
      return flightItem;
  }
}

const mapStateToProps = state => {
  return{
    data: state
  }
}

export default connect(mapStateToProps) (GetUpcomingsFlights);
