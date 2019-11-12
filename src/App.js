import React from 'react';
import s from './App.module.css';
import './default.css';
import HeaderContainer from "./components/header/HeaderContainer";
import Nav from "./components/nev/nav";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/login/login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialaizeApp} from "./redux/app-reduser";
import Preloader from "./components/common/Preloader";

const MessageContainer = React.lazy(() => import ("./components/message/MessageContainer"));

class App extends React.Component {
    componentDidMount() {
        this.props.initialaizeApp()
    }

    render() {
        if(!this.props.initialaized){return <Preloader/>}
        return (
            <div className={s.App}>
                <HeaderContainer/>
                <div className={`${s.flexBoxMain} wrap`}>
                    <Nav/>
                    <section>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/message' render={() => {
                            return <React.Suspense fallback={<div>Loading...</div>}>
                                <MessageContainer/>
                            </React.Suspense>
                        }}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </section>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return{
        initialaized: state.appPage.initialaized
    }
};

export default compose(withRouter, connect(mapStateToProps, {initialaizeApp}))(App)
