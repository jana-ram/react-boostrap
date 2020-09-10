import {
    CommonConstant
} from '../constant';
import { endPointConnect , authHeader } from '../api';
 export const getPassengerList = (obj) => async dispatch => { 
    try{
        const requestData = {
            method : 'POST',
            headers: authHeader(),
            body:JSON.stringify({}) 
        };
        endPointConnect(
            'public/login/admin/' , 
            requestData , 
            CommonConstant.GETPASSENGERDETAILSUCCESS , 
            CommonConstant.GETPASSENGERDETAILFAIL, 
            dispatch
        );

    } catch(err) {
        dispatch({
            type : CommonConstant.GETPASSENGERDETAILFAIL,
            payload : "",
            error : CommonConstant.DEFAULTERR
        })
    }

}