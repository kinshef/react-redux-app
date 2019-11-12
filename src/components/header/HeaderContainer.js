import React from 'react';
import {connect} from "react-redux";
import Header from "./header";
import {AuthLogout} from "../../redux/auth-reduser";


class HeaderContainer extends React.Component {
    render() {
        return (
            <Header auth={this.props.auth}
                    AuthLogout={this.props.AuthLogout}/>
        );
    }
}



let mapStateToProps = (state) => {
    return{
        auth: state.auth
    }
};

export default connect(mapStateToProps, {AuthLogout})(HeaderContainer)