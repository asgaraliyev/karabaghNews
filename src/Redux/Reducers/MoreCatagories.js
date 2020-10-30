const initialState = [
  "Latest",
  "Video",
  "Photos",
  "Podcasts",
  "In Depth",
  "Local",
  "Log In",
  "Newsletters",
  "Mobile",
  "Rss",
  "Karabagh News Store",
];
export const more_Catagories_Reducer = (state = initialState, action) => {
  if (action.type === "NothingForNow") {
    return state;
  } else {
    return state;
  }
};
