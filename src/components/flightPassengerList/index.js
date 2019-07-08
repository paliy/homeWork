import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import NavigationComponent from '../Navigation'
import { connect } from 'react-redux';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import {flightPassengerList} from '../../actions'
import 'bootstrap/dist/css/bootstrap.min.css';

class FlightPassengerList extends Component {

  state = {
    presseSubmit: false,
    selectedFromDay: new Date(),
    selectedToDay: new Date()
  }

  render() {
    const data = this.props.data.upcamingFlights
    const seen = new Set();

    const filteredArr = data.filter(el => {
      const duplicate = seen.has(el.DepartureAirport.Code);
      seen.add(el.DepartureAirport.Code);
      return !duplicate;
    });

    return (
      <div className='container'>
      <NavigationComponent />
        <div className='data-box'>
          <form className='data-form' onSubmit={this.handleSubmit}>
          <DayPickerInput
             dayPickerProps={{
               month: new Date(),
               showWeekNumbers: true,
               todayButton: 'Today',
             }}
             onDayChange={day => this.setState({selectedFromDay: day})}
           />
           <select ref={input => this.DepartureAirport = input} name = "dropdown">
              {filteredArr.sort().map(this.getDepartureAirportItems)}
           </select>
           <select ref={input => this.ArrivalAirport = input} name = "dropdown">
              {filteredArr.sort().map(this.getArrivalAirportItems)}
           </select>
           <select ref={input => this.PnlName = input} name = "dropdown">
              {filteredArr.sort().map(this.getPnlNameItems)}
           </select>
            <DayPickerInput
               dayPickerProps={{
                 month: new Date(),
                 showWeekNumbers: true,
                 todayButton: 'Today',
               }}
               onDayChange={day => this.setState({selectedToDay: day})}
             />
            <button className="btn btn-success btn-auth">SUBMIT</button>
          </form>
          <div className='response-box'>
            {this.renderNavList()}
            <h4>No results</h4>
          </div>
        </div>
      </div>
    );
  }

  renderNavList() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-my">
        <ul className="navbar-nav mr-auto">
          <Link className='nav-link' to='/flight-passenger-list/flight-pax-count'>Flight Pax Count</Link>
          <Link className='nav-link' to='/flight-passenger-list/pax-count-details'>Pax Count</Link>
          <Link className='nav-link' to='/flight-passenger-list/results'>Results</Link>
        </ul>
      </nav>
    )
  }

  handleSubmit = event => {
    event.preventDefault();
    const DepartureAirport = this.DepartureAirport.value;
    const ArrivalAirport =   this.ArrivalAirport.value;
    const PnlName =          this.PnlName.value;
    const FromDate =         this.state.selectedFromDay;
    const ToDate =           this.state.selectedToDay;
    const data = {
      DepartureAirport,
      ArrivalAirport,
      PnlName,
      FromDate,
      ToDate
    };

    this.props.dispatch(flightPassengerList(data))
  };

  getDepartureAirportItems = (item, key) => {
    const flightItem =
      <option key={key} value = {item.DepartureAirport.Code}>{item.DepartureAirport.Name}</option>
      return flightItem;
  }

  getArrivalAirportItems = (item, key) => {
    const flightItem =
      <option key={key} value = {item.ArrivalAirport.Code}>{item.ArrivalAirport.Name}</option>
      return flightItem;
  }

  getPnlNameItems = (item, key) => {
    const flightItem =
      <option key={key} value = {item.PnlName}>{item.PnlName}</option>
      return flightItem;
  }
}

const mapStateToProps = state => {
  return{
    data: state
  }
}

export default connect(mapStateToProps) (FlightPassengerList);
