import avatar_1 from "../img/avatar_1.jpg";
import avatar_2 from "../img/avatar_2.jpg";
import avatar_3 from "../img/avatar_3.jpg";
import avatar_4 from "../img/avatar_4.jpg";
import avatar_5 from "../img/avatar_5.jpg";
import avatar_6 from "../img/avatar_6.jpg";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newTextPost,
        userId: 5
      };
      state.posts.push(newPost);
      state.newTextPost = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newTextPost = action.newText;
      return state;
    default: return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;
