import  avatar_1 from './../img/avatar_1.jpg';
import  avatar_2 from './../img/avatar_2.jpg';
import  avatar_3 from './../img/avatar_3.jpg';
import  avatar_4 from './../img/avatar_4.jpg';
import  avatar_5 from './../img/avatar_5.jpg';
import  avatar_6 from './../img/avatar_6.jpg';

let store = {
  _state: {
    profilesPage: {
      posts : [
        {id: 1, message: 'Важная новость!!!Наиважейшая новость!!!', userId: 1} ,
        {id: 2, message: 'Новость!!!Пост!!!Репост!', userId: 2},
        {id: 3, message: 'Новость!!!Пост!!!Репост! Важная новость!!!Наиважейшая новость!!!', userId: 3},
        {id: 4, message: 'Новость!!!Пост!!!Репост! Новость!!!Пост!!!Репост!', userId: 4}
      ],
      newTextPost : ' ',
      users : [
        {id: 1, name: 'Dmitriy', src: avatar_1, friends: [2, 3]},
        {id: 2, name: 'Roman', src: avatar_2, friends: [1, 3, 4]},
        {id: 3, name: 'Elena', src: avatar_3, friends: [1, 4]},
        {id: 4, name: 'Natalia', src: avatar_4, friends: [1, 2, 3]},
        {id: 5, name: 'Sveta', src: avatar_5, friends: [1, 2, 3, 4]},
        {id: 6, name: 'Anastasia', src: avatar_6, friends: [1, 2, 3, 5]}
      ]
    },

    dialogsPage: {
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
    }
  },
  getState () {
    return this._state;
  },
  _callSubscriber () {},
  addPost () {
    let newPost = {
      id: 5,
      message: this._state.profilesPage.newTextPost,
      userId: 5
    };
    this._state.profilesPage.posts.push(newPost);
    this._callSubscriber(this._state);
  },
  updateNewPostText (newText) {
    this._state.profilesPage.newTextPost = newText;
    this._callSubscriber(this._state);
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  }
}

window.store = store;


export default store;
