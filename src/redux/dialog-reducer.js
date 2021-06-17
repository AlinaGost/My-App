const UPDATE_NEW_MASSAGE_BODY = 'UPDATE-NEW-MASSAGE-BODY';
const SEND_MASSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs : [
    {id: 1, name: 'Natalia', userId: 4},
    {id: 2, name: 'Roman', userId: 2},
    {id: 3, name: 'Sveta', userId: 5},
    {id: 4, name: 'Dmitriy', userId: 1},
    {id: 5, name: 'Anastasia', userId: 6},
    {id: 6, name: 'Elena', userId: 3}
  ],

  messages : [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'Hello!'},
    {id: 3, message: 'How is your?'},
    {id: 4, message: 'How are you?'}
  ],
  newMessageBody: '',
}

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MASSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MASSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({id: 6, message: body});
      return state;
    default: return state;
  }
}

export const sendMessageCreator = () => ({ type: SEND_MASSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MASSAGE_BODY, body: body });

export default dialogReducer;
