const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageText;

            state.newMessageText = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
};

export default dialogsReducer;

export const sendMessageCreater = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreater = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text
});