/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
import {FETCHING, SUCCESS, FAILURE, ADD, DELETE} from '../actions';
import { totalmem } from 'os';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
};


export default (state = initialState, action ) => {
  console.log('reducer', action)
  switch (action.type){

    //getting data 
    case FETCHING: 
      return{
        ...state, 
        fetchingSmurfs: true,
        error: '', 
      }

    case SUCCESS: 
      return{
        ...state, 
        fetchingSmurfs: false, 
        smurfs: action.payload,
        error: '', 
      }
    
      case FAILURE:
        return{
          ...state,
          fetchingSmurfs: false,
          error: '', 
        }

      
      //adding smurf
      case ADD:
      console.log("Added");
      console.log(action.payload)
        return {
          ...state,
          smurfs: [
            ...state.smurfs, action.payload
          ]
        }
        // let newSmurf = {};
        // newSmurf = {...state, name: action.payload[0], id: state.smurfs.length + 1};
        // let newArray = [];
        // newArray = [...state.smurfs, newSmurf]
        // console.log(newArray)
        //   return{
        //     ...state,
        //     addingSmurf: true,
        //     input: action.payload,
        //     smurfs: newArray,
        //   };

        case DELETE:
          console.log("deleted");
          return{
            ...state,
            smurfs: state.smurfs.map(smurf => {
              if (smurf.id === action.payload) {
                return{
                  deletingSmurf: true
                }
              }
            })
          }
      

        
    default:
        return state; 
  }
};
 