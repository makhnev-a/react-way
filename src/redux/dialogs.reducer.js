const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ],
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ]
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;

            stateCopy = {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };

            return stateCopy;
        default:
            return state;
    }
};

export default dialogsReducer;

export const sendMessageCreater = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    };
};