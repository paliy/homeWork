// import fetch from 'isomorphic-fetch'
import store from '../store.js';
// import CookieDough from 'cookie-dough'
import history from '../history'
const axios = require('axios');
const cookie = require('cookie-dough')();

// ===============================Auth req======================================

export const fetch_token = () => {
  return {
    type: "FETCH_TOKEN"
  };
};

export const receive_token = data => {
  return {
    type: "FETCHED_TOKEN",
    data: data
  };
};

export const save_to_cookie = data => {
  const token = data.data.Token
  const options = getCookieOptions()

  function getCookieOptions(expiresIn = (30 * 60 * 1000)) {
    const expires = new Date()
    expires.setDate(expires.getDate() + expiresIn)

    return {expires, path: '/'}
  }

  cookie.set('Token', token, options)
};

export const receive_error = (err) => {
  return {
    type: "RECEIVE_ERROR",
    data: err
  };
};

export const loginUser = authData => {
  store.dispatch(fetch_token());
  return function(dispatch, getState) {
    return axios.post('https://dev-api.blue-style.cz/account/v1/token', authData)
      .then(data => data)
      .then(data => {
        save_to_cookie(data)
        return dispatch(receive_token(data))
      })
      .then(data => {
        getUpcomingFlights()
        if (data.data.statusText === 'OK')
          history.push('/get-upcoming-flights')
      })
      .catch(err => dispatch(receive_error(err)));
  };
};
//================================get User info=================================

export const fetch_userInfo = () => {
  return {
    type: "FETCH_USERINFO"
  }
}

export const fetched_userInfo = data => {
  return {
    type: "FETCHED_USERINFO",
    data: data
  };
};

export const getUserInfo = () => {
  store.dispatch(fetch_userInfo());
  return function(dispatch, getState) {
    const token = cookie.get('Token');
    return axios.get('https://dev-api.blue-style.cz/account/v1/getUserInfo',
      {headers: {Authorization: `Bearer ${token}`}}
    )
      .then(data => data)
      .then(data => {
        return dispatch(fetched_userInfo(data))
      })
      .catch(err => dispatch(receive_error(err)));
  };
};

// ===============================Reports req===================================

export const fetch_upcomingFlights = () => {
  return {
    type: "FETCH_UPCOMINGFLIGHTS"
  };
};

export const receive_upcomingFlights = data => {
  return {
    type: "FETCHED_UPCOMINGFLIGHTS",
    data: data
  };
};

export const getUpcomingFlights = () => {
  store.dispatch(fetch_upcomingFlights());
  return function(dispatch, getState) {
    const token = cookie.get('Token');
    return axios.get('https://dev-api.blue-style.cz/homework/v1/Definitions/getUpcomingFlights',
      {headers: {Authorization: `Bearer ${token}`}}
    )
      .then(data => data)
      .then(data => {
        return dispatch(receive_upcomingFlights(data))
      })
      .catch(err => dispatch(receive_error(err)));
  };
};

// ====================================Roomong req==============================

export const fetch_roomingList = () => {
  return {
    type: "FETCH_ROOMINGLIST"
  };
};

export const receive_roominglist = data => {
  return {
    type: "FETCHED_ROOMINGLIST",
    data: data
  };
};

export const roomingList = (roomingData) => {
  store.dispatch(fetch_roomingList());
  return function(dispatch, getState) {
    const token = cookie.get('Token');
    return axios.post('https://dev-api.blue-style.cz/homework/v1/Reports/roomingList', roomingData,
      {headers: {Authorization: `Bearer ${token}`}}
    )
      .then(data => data)
      .then(data => {
        return dispatch(receive_roominglist(data))
      })
      .catch(err => dispatch(receive_error(err)));
  };
};

// ====================================Transfer req=============================

export const fetch_transferList = () => {
  return {
    type: "FETCH_TRANSFERLIST"
  };
};

export const receive_transferlist = data => {
  return {
    type: "FETCHED_TRANSFERGLIST",
    data: data
  };
};

export const transferList = (transferData) => {
  store.dispatch(fetch_transferList());
  return function(dispatch, getState) {
    const token = cookie.get('Token');
    return axios.post('https://dev-api.blue-style.cz/homework/v1/Reports/transferList', transferData,
      {headers: {Authorization: `Bearer ${token}`}}
    )
      .then(data => data)
      .then(data => {
        return dispatch(receive_transferlist(data))
      })
      .catch(err => dispatch(receive_error(err)));
  };
};

//===============================logOut=========================================

export const fetch_logout = () => {
  return {
    type: "FETCH_LOGOUT"
  };
};

export const fetched_logout = () => {
  cookie.remove('Token');
  return {
    type: "FETCHED_TRANSFERGLIST"
  };
};

export const logOut = data => {
  store.dispatch(fetch_logout());
  return function(dispatch, getState) {
    return dispatch(fetched_logout())
  };
};

// ====================================Flight passenger list=============================

export const fetch_flightPassengerList = () => {
  return {
    type: "FETCH_FLIGHTPASSENGERLIST"
  };
};

export const receive_flightPassengerlist = data => {
  return {
    type: "FETCHED_FLIGHTPASSENGERLIST",
    data: data
  };
};

export const flightPassengerList = (flightPassengerListData) => {
  store.dispatch(fetch_flightPassengerList());
  return function(dispatch, getState) {
    const token = cookie.get('Token');
    return axios.post('https://dev-api.blue-style.cz/homework/v1/Reports/flightPassengerList', flightPassengerListData,
      {headers: {Authorization: `Bearer ${token}`}}
    )
      .then(data => data)
      .then(data => {
        return dispatch(receive_flightPassengerlist(data))
      })
      .catch(err => dispatch(receive_error(err)));
  };
};
