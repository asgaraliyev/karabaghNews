const initialState={
    menuIsOpen:true,
}
export const change_Menu_Stuation=(state=initialState,action)=>{
    if (action.type=="CHANGE_MENU_STUATION"){
        var newState={
            menuIsOpen:!state.menuIsOpen
        }
        return newState;
    }else{
        return state;
    }

}