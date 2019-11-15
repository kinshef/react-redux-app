import React from 'react';
import {connect} from "react-redux";
import Header from "./header";
import {AuthLogout} from "../../redux/auth-reduser";
import {getAuthIsFetching, getIsAuth, getLogin} from "../../redux/selectors/auth-selectors";


class HeaderContainer extends React.Component {
    render() {
        return (
            <Header isFetching={this.props.isFetching}
                    isAuth={this.props.isAuth}
                    login={this.props.login}
                    AuthLogout={this.props.AuthLogout}/>
        );
    }
}

let mapStateToProps = (state) => {
    return{
        isFetching: getAuthIsFetching(state),
        isAuth: getIsAuth(state),
        login: getLogin(state)
    }
};

export default connect(mapStateToProps, {AuthLogout})(HeaderContainer)