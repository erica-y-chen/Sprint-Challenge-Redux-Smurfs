/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios';
export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE"; 
export const ADD = "ADD";
export const DELETE = "DELETE";

export const getSmurf = () => dispatch => {
  dispatch({ type: FETCHING });

  axios 
    .get('https://localhost:3333/smurfs')
    .then( res => {
      dispatch({
        type: SUCCESS,
        payload: res.data
      });
    })

    .catch(err => {
      dispatch({ 
        type: FAILURE, 
        payload: err
      });
    });
};

export const addSmurf = smurf => {
  console.log(smurf)
  return{
    type: ADD, 
    payload: smurf,
  }
}

export const deleteSmurf = id => {
  console.log(id)
  return{
    type: DELETE,
    payload: id
  }
}
