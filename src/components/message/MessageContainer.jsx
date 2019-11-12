import React from 'react';
import {addMassage} from "../../redux/messages-reducer";
import Message from "./Message";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {return{messagesPage: state.messagesPage}};

export default compose(connect(mapStateToProps, {addMassage}), withAuthRedirect)(Message);