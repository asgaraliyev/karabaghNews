const initialState = {
  menuIsOpen: false,
  whichOne: "MENU",
};
export const change_Menu_Stuation = (state = initialState, action) => {

  if (action.type === "CHANGE_MENU_STUATION") {
    var newState = {
      menuIsOpen: !state.menuIsOpen,
      whichOne: action.data,
    };
    return newState;
  } else {
    return state;
  }
};
