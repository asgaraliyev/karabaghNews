const initialState = "posts";
const change_Dashboard_Content_Reducer = (state = initialState, action) => {
  if (action.type === "CHANGE_DASHBOARD_CONTENT") {
    return action.data;
  } else {
    return state;
  }
};
export default change_Dashboard_Content_Reducer;
