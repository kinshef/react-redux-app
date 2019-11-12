const ADD_MASSAGE = 'MESSAGES/ADD-MASSAGE';

let initialState = {
    dialogsData: [
        {name: '123', id: 1},
        {name: '234', id: 2},
        {name: '345', id: 3},
        {name: '456', id: 4}
    ],
    messagesData: [
        {messages: 'hi', id: 1},
        {messages: 'qw', id: 2},
        {messages: 'yo', id: 3},
        {messages: 'dsffsf sdfs', id: 4},
        {messages: 'sdfs sdf.', id: 5}
    ]
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MASSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 3, messages: action.newMessagesText}]
            }
        default:
            return state;
    }
};

export const addMassage = (newMessagesText) => ({type: ADD_MASSAGE, newMessagesText});

export default messagesReducer;