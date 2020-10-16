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
