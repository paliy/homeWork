// import {loginUser} from '../actions'
const cookie = require('cookie-dough')();

const initialState = {
  upcamingFlights: []
}

const apiReducer = (state = initialState, action) => {

  switch(action.type) {
    case 'FETCH_TOKEN':
      return Object.assign({}, state, {
        loginData: {}
      });
    case 'FETCHED_TOKEN':
      return Object.assign({}, state, {
        loginData: action.data
      });
    case "RECEIVE_ERROR":
      return Object.assign({}, state, {
        isError: true
      });
    // ===========================UCF===========================================
    case "FETCH_UPCOMINGFLIGHTS":
      return { ...state };

    case "FETCHED_UPCOMINGFLIGHTS":
      return { ...state, upcamingFlights: action.data.data }
    // /==========================rooming list==================================
    case "FETCH_ROOMINGLIST":
      return { ...state };

    case "FETCHED_ROOMINGLIST":
      return { ...state, roomingList: action.data.data }
    // /==========================transfer list=================================
    case "FETCH_TRANSFERLIST":
      return { ...state };

    case "FETCHED_TRANSFERLIST":
      return { ...state, transferList: action.data.data }
    //============================user info=====================================
    case "FETCH_USERINFO":
      return { ...state };

    case "FETCHED_USERINFO":
      return { ...state, userInfo: action.data.data };
    //============================log out=======================================
    case "FETCH_LOGOUT":
      return { ...state };

    case "FETCHED_TRANSFERGLIST":
      cookie.get('Token');
      return { ...state };
    // /==========================transfer list=================================
    case "FETCH_FLIGHTPASSENGERLIST":
      return { ...state };

    case "FETCHED_FLIGHTPASSENGERLIST":
      return { ...state, flightPassengerList: action.data.data }
    default:
    return state;
  }
}
export default apiReducer;
