import React from 'react';
import { Switch , withRouter , Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <Switch>
                    <Route path="/" component={Home} />
            </Switch>
        )
    }
}
const mapStateToProps = (state) => {
    const {
        home
    } = state;
    return {
        home
    }
}
export default withRouter(connect(mapStateToProps)(App));