import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/FlightPaxCountDetails.css'
import './css/GetUpComingFlights.css'
import './css/RoomingList.css'
import './css/UserInfo.css'
import App from './App';
import {Route, Router } from 'react-router-dom'
// import NavigationComponent from './components/Navigation';
import RoomingList from './components/roomingList'
import FlightPassengerList from './components/flightPassengerList'
import TransferList from './components/transferList'
import UserInfo from './components/userInfo'
import GetUpcomingsFlights from './components/GetUpcomingsFlights'
import store from "./store";
import history from './history';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route exact path='/' component={App} />
      <Route path='/get-upcoming-flights' component={GetUpcomingsFlights} />
      <Route path='/rooming-list' component={RoomingList} />
      <Route path='/transfers-list' component={TransferList} />
      <Route path='/flight-passenger-list' component={FlightPassengerList} />
      <Route path='/user-info' component={UserInfo} />
    </Router>
  </Provider>, document.getElementById('root')
);
