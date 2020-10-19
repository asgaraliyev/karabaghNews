export const change_Menu_Stuation_Action = (whichOne) => {
  return {
    type: "CHANGE_MENU_STUATION",
    data: whichOne,
  };
};
export const change_Firebase_Action = (admin_Situation) => {
  return {
    type: "CHANGE_ADMIN_SITUATION",
    data: admin_Situation,
  };
};
export const change_Dashboard_Contente_action = (content) => {
  return {
    type: "CHANGE_DASHBOARD_CONTENT",
    data: content,
  };
};

export const change_Dialog_Content_Action = (content) => {
  return {
    type: "CHANGE_DIALOG_CONTENT",
    data: content.data,
  };
};

export const add_Post_Action = (content) => {
  return {
    type: "ADD_POST",
    data: content,
  };
};
export const change_Catagories = (content) => {
  return {
    type: "CHANGE_CATAGORIES",
    data: content,
  };
};
export const add_New_Catagory_Action = (content) => {
  return {
    type: "ADD_NEW_CATAGORY",
    data: content,
  };
};
