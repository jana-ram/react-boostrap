import {
    CommonConstant
} from '../constant';
const initialState = {
    payload : "",
    type:'',
    error : ""
}

export default function homeReducers(state = initialState, action) {
    switch (action.type) {
        case CommonConstant.GETPASSENGERDETAILSUCCESS:
          return {
            payload: action.payload,
            type: action.type,
            error : action.error
          }; 
        case CommonConstant.GETPASSENGERDETAILFAIL:
          return {
            payload: "",
            type: action.type,
            error : action.error
          };    
        default:
          return initialState
      }
}