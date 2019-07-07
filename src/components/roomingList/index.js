import React, { Component } from 'react';
import history from './../../history'
import {Link} from 'react-router-dom'
import NavigationComponent from '../Navigation'
import { connect } from 'react-redux';
import FlightPaxCountDetails from './FlightPaxCountDetails'
import PaxCountDetails from './PaxCountDetails'
import ReservationPaxCountDetails from './ReservationPaxCountDetails'
import Results from './Results'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import {roomingList} from '../../actions'
import 'bootstrap/dist/css/bootstrap.min.css';

class RoomingList extends Component {

  state = {
    presseSubmit: false,
    selectedDay: new Date()
  }

  render() {
    const data = this.props.data.upcamingFlights

    return (
      <div className='container'>
        <NavigationComponent />
        <div className='data-box'>
          <form className='data-form' onSubmit={this.handleSubmit}>
           <select ref={input => this.DepartureAirport = input} name = "dropdown">
              {data.sort().map(this.getDepartureAirportItems)}
           </select>
           <select ref={input => this.ArrivalAirport = input} name = "dropdown">
              {data.sort().map(this.getArrivalAirportItems)}
           </select>
           <select ref={input => this.PnlName = input} name = "dropdown">
              {data.sort().map(this.getPnlNameItems)}
           </select>
           <DayPickerInput
              dayPickerProps={{
                month: new Date(),
                showWeekNumbers: true,
                todayButton: 'Today',
              }}
              onDayChange={day => this.setState({selectedDay: day})}
            />
            <button className="btn btn-success btn-auth">SUBMIT</button>
          </form>
          <div className='response-box'>
            {this.renderNavList()}
            {this.renderRespComponents()}
          </div>
        </div>
      </div>
    );
  }

  renderNavList() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-my">
        <ul className="navbar-nav mr-auto">
          <Link className={`nav-link ${this.activeLink() === 'active-1' ? 'active' : ''}`} to='/rooming-list/flight-pax-count-details'>Flight Pax Count</Link>
          <Link className={`nav-link ${this.activeLink() === 'active-2' ? 'active' : ''}`} to='/rooming-list/pax-count-details'>Pax Count</Link>
          <Link className={`nav-link ${this.activeLink() === 'active-3' ? 'active' : ''}`} to='/rooming-list/reservation-pax-count-details'>Reservation Pax Count</Link>
          <Link className={`nav-link ${this.activeLink() === 'active-4' ? 'active' : ''}`} to='/rooming-list/results'>Results</Link>
        </ul>
      </nav>
    )
  }

  activeLink = () => {
    if (history.location.pathname === '/rooming-list/flight-pax-count-details' || '/rooming-list')
      return 'active-1'

    if (history.location.pathname === '/rooming-list/pax-count-details')
      return 'active-2'

    if (history.location.pathname === '/rooming-list/reservation-pax-count-details')
      return 'active-3'

    if (history.location.pathname === '/rooming-list/results')
      return 'active-4'
  }

  renderRespComponents() {
    const pathname = this.props.location.pathname

    if (pathname === '/rooming-list/pax-count-details')
      return (
        <PaxCountDetails />
      )
    if (pathname === '/rooming-list/reservation-pax-count-details')
      return (
        <ReservationPaxCountDetails />
      )

    if (pathname === '/rooming-list/results')
      return (
        <Results />
      )

    if (this.props.data.roomingList)
      return (
        <FlightPaxCountDetails />
      )

    return <div />
  }

  handleSubmit = event => {
    event.preventDefault();
    const DepartureAirport = this.DepartureAirport.value;
    const ArrivalAirport =   this.ArrivalAirport.value;
    const PnlName =          this.PnlName.value;
    const Data =             this.state.selectedDay;
    const data = {
      DepartureAirport,
      ArrivalAirport,
      PnlName,
      Data
    };

    this.props.dispatch(roomingList(data))
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

export default connect(mapStateToProps) (RoomingList);
