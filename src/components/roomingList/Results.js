import React, { Component } from 'react';
import moment from 'moment'
import { connect } from 'react-redux';
import 'react-day-picker/lib/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Results extends Component {

  state = {
    currentPage: 1,
    postPerPage: 10,
    activePage:1
  }

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
  }

  render() {
    const {Result} = this.props.data.roomingList
    const currentPage = this.state.currentPage
    const postPerPage = this.state.postPerPage

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = Result.slice(indexOfFirstPost, indexOfLastPost)


    return (
      <div>
        <ul className='count-details'>
          {currentPost.sort().map(this.getItemList)}
        </ul>
      </div>
    );
  }

  getItemList = (item, key) => {
    const flightItem =
      <li className='results' key={key}>
        <div className='left-box'>
          <div className='name-item'><p>Traveller Info:</p><span>{item.TravellerInfo.Name} {item.TravellerInfo.Surname}</span></div>
          <div className='name-item'><p>Date Of Birth:</p><span>{item.TravellerInfo.DateOfBirth}</span></div>
          <div className='name-item'><p>IsLeader:</p><span>{item.TravellerInfo.IsLeader ? 'YES' : 'NO'}</span></div>
          <div className='name-item'><p>Night:</p><span>{item.Night}</span></div>
          <div className='name-item'><p>Hotel:</p><span>{item.Hotel.Name}</span></div>
          <div className='name-item'><p>Departure Flight:</p><span>{item.DepartureFlight}</span></div>
          <div className='name-item'><p>Departure Time:</p><span>{moment(item.DepartureTime).format("MMMM Do YYYY, h:mm a")}</span></div>
        </div>
        <div className='right-box'>
          <div className='name-item'><p>CheckIn:</p><span>{moment(item.CheckIn).format("MMMM Do YYYY, h:mm a")}</span></div>
          <div className='name-item'><p>Country and city:</p><span>{item.City.Name} - {item.Country.Name}</span></div>
          <div className='name-item'><p>Departure and Arrival airports:</p><span>{item.DepartureAirport.Name} - {item.ArrivalAirport.Name}</span></div>
          <div className='name-item'><p>Accom:</p><span>{item.Accom.Name}</span></div>
          <div className='name-item'><p>Departure Arrival Time:</p><span>{moment(item.DepartureArrivalTime).format("MMMM Do YYYY, h:mm a")}</span></div>
          <div className='name-item'><p>Departure Date:</p><span>{moment(item.DepartureDate).format("MMMM Do YYYY, h:mm a")}</span></div>
          <div className='name-item'><p>Board:</p><span>{item.Board.Code} - {item.Board.Name}</span></div>
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

export default connect(mapStateToProps) (Results);
