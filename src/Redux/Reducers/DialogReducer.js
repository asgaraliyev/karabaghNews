const initialState = {
  isDialogOpen: false,
  dialogComponentName: null,
};
export const change_Dialog_Content_Reducer = (state = initialState, action) => {
  console.log("change_Dialog_Content_Reducer -> action", action);
  if (action.type == "CHANGE_DIALOG_CONTENT") {
    var newState = {
      isDialogOpen: action.data.isDialogOpen,
      dialogComponentName: action.data.dialogComponentName,
    };
    return newState;
  } else {
    return state;
  }
};
