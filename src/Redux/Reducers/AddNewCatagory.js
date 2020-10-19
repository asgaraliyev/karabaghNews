const initialState = {
  catagory: null,
};
const add_New_Catagory_Reducer = (state = initialState, action) => {
  if (action.type === "ADD_NEW_CATAGORY") {
    const newState = {
      catagory: action.data,
    };
    return newState;
  } else {
    return state;
  }
};
export default add_New_Catagory_Reducer;
