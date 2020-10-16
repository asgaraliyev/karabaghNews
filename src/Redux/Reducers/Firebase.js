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
