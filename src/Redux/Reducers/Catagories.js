const initialState = [
  "World",
  "Economy",
  "Science",
  "Politics",
  "Technology",
  "Sport",
  "Business",
];

export const Catagories = (state = initialState, action) => {
  if (action.type == "CHANGE_CATAGORIES") {
    return action.data;
  } else {
    return state;
  }
};
