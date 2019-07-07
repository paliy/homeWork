import React, { Component } from 'react';
import moment from 'moment'
import { connect } from 'react-redux';
import 'react-day-picker/lib/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class FlightPaxCountDetails extends Component {

  render() {
    const {FlightPaxCountDetails} = this.props.data.roomingList
    const CountDetails = FlightPaxCountDetails ? FlightPaxCountDetails : []

    return (
      <ul className='count-details'>
        {CountDetails.sort().map(this.getItemList)}
      </ul>
    );
  }

  getItemList = (item, key) => {
    const flightItem =
      <li key={key}>
        <div className='left-box'>
          <div className='name-item'><p>Adult Count:</p><span>{item.AdultCount}</span></div>
          <div className='name-item'><p>Child Count:</p><span>{item.ChildCount}</span></div>
          <div className='name-item'><p>Flight No:</p><span>{item.FlightNo}</span></div>
          <div className='name-item date'><p>Fly Date:</p><span>{moment(item.FlyDate).format("MMMM Do YYYY, h:mm")}</span></div>
        </div>
        <div className='right-box'>
          <div className='name-item'><p>Infant Count:</p><span>{item.InfantCount}</span></div>
          <div className='name-item'><p>Total Pax Count:</p><span>{item.TotalPaxCount}</span></div>
          <div className='name-item'><p>Total Room Count:</p><span>{item.TotalRoomCount}</span></div>
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

export default connect(mapStateToProps) (FlightPaxCountDetails);
