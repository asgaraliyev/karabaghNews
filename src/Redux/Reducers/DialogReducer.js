const initialState = {
  isDialogOpen: false,
  dialogComponentName: null,
};
export const change_Dialog_Content_Reducer = (state = initialState, action) => {
  if (action.type === "CHANGE_DIALOG_CONTENT") {
    // var newState = {
    //   isDialogOpen: action.data.isDialogOpen,
    //   dialogComponentName: action.data.dialogComponentName,
    //   dialo: action.data.dialogComponentName,
    // };
    return action.data;
  } else {
    return state;
  }
};
