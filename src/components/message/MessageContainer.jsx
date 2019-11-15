//import React from 'react';
import {addMassage} from "../../redux/messages-reducer";
import Message from "./Message";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getDialogsData, getMessagesData} from "../../redux/selectors/message-selectors";

let mapStateToProps = (state) => {
    return{
        dialogsData: getDialogsData(state),
        messagesData: getMessagesData(state)
    }
};

export default compose(connect(mapStateToProps, {addMassage}), withAuthRedirect)(Message);