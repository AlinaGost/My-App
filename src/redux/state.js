import  avatar_1 from './../img/avatar_1.jpg';
import  avatar_2 from './../img/avatar_2.jpg';
import  avatar_3 from './../img/avatar_3.jpg';
import  avatar_4 from './../img/avatar_4.jpg';
let state = {
  profilesPage: {
    posts : [
      {id: 1, message: 'Важная новость!!!Наиважейшая новость!!!', userId: 1} ,
      {id: 2, message: 'Новость!!!Пост!!!Репост!', userId: 2},
      {id: 3, message: 'Новость!!!Пост!!!Репост! Важная новость!!!Наиважейшая новость!!!', userId: 3},
      {id: 4, message: 'Новость!!!Пост!!!Репост! Новость!!!Пост!!!Репост!', userId: 4}
    ],
    users : [
      {id: 1, name: 'Dmitriy', src: avatar_1, friends: [2, 3]},
      {id: 2, name: 'Roman', src: avatar_2, friends: [1, 3, 4]},
      {id: 3, name: 'Elena', src: avatar_3, friends: [1, 4]},
      {id: 4, name: 'Natalia', src: avatar_4, friends: [1, 2, 3] }
    ]
  },

  dialogsPage: {
    dialogs : [
      {id: 1, name: 'Natalia'},
      {id: 2, name: 'Roman'},
      {id: 3, name: 'Sveta'},
      {id: 4, name: 'Dmitriy'},
      {id: 5, name: 'Anastasia'},
      {id: 6, name: 'Elena'}
    ],

    messages : [
      {id: 1, message: 'Hi!'},
      {id: 2, message: 'Hello!'},
      {id: 3, message: 'How is your?'},
      {id: 4, message: 'How are you?'}
    ],
  }
}

export default state;
