const initialState = {
  admin: false,
  userId: "",
};

export const firebaseReducer = (state = initialState, action) => {
  if (action.type === "CHANGE_ADMIN_SITUATION") {
    var newState = {
      admin: action.data,
      userId: action.data.uid,
    };
    return newState;
  } else {
    return state;
  }
};
const addPostInitialState = {
  author: null,
  body: null,
  catagory: null,
  image: null,
  time: null,
  title: null,
  link: null,
};
export const add_Post_Reducer = (state = addPostInitialState, action) => {
  if (action.data && action.data !== null) {
    return {
      author: action.data.author,
      body: action.data.body,
      catagory: action.data.catagory,
      image: action.data.image,
      title: action.data.title,
      link: action.data.link,
    };
  } else {
    return state;
  }
};
