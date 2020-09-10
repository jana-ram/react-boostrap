import React from 'react';
import { connect } from 'react-redux';
import {
    getPassengerList
} from '../../action';
import { CommonConstant } from '../../constant';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            passengerList : [],
            searchKey : [],
            error : ""
        }
    }
    componentDidMount(){
        this.props.getPassengerList();
    }
    componentWillReceiveProps(nextProps){
        const {
            payload,
            type,
            error
        } = nextProps['home'];
        if(type === CommonConstant.GETPASSENGERDETAILSUCCESS){
            if(payload){
                this.setState({
                    passengerList : payload.length > 0 ? payload : []
                })
            }
        }
        if(type === CommonConstant.GETPASSENGERDETAILFAIL){
           this.setState({
               passengerList : [],
               error : "Unable to get passenger list"
           })
        }

    }
    render(){
        const {
            passengerList,
            error
        } = this.state;
        return(
            <div class="container">
                {
                    passengerList.length <= 0 ? <><h2>Basic Table</h2>
                    <p>The .table class adds basic styling (light padding and horizontal dividers) to a table:</p>            
                    <table class="table">
                        <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                        </tr>
                        <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                        </tr>
                        </tbody>
                    </table></> : <p>{error}</p>
                }
                
            </div>
        )

    }        
}
const mapStateToProps = (state) => {
    const { home } = state;
    return {
        home
    }
}

export default connect(
    mapStateToProps,{
        getPassengerList
    }
)(Home);