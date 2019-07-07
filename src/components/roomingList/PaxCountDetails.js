import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-day-picker/lib/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class PaxCountDetails extends Component {

  render() {
    const {PaxCountDetails} = this.props.data.roomingList

    return (
      <ul className='count-details'>
        {PaxCountDetails.sort().map(this.getItemList)}
      </ul>
    );
  }

  getItemList = (item, key) => {
    const flightItem =
      <li key={key}>
        <div className='left-box'>
          <div className='name-item'><p>Adult Count:</p><span>{item.AdultCount}</span></div>
          <div className='name-item'><p>Child Count:</p><span>{item.ChildCount}</span></div>
          <div className='name-item hotel'><p>Hotel:</p><span>{item.Hotel}</span></div>
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

export default connect(mapStateToProps) (PaxCountDetails);
