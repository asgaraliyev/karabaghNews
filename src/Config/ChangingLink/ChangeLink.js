import ls from "local-storage";
import SuperMarket from "../../Redux/SuperMarket/SuperMarket";
export const change_The_Link = (theLink) => {
  const theSuperMarket = SuperMarket.getState();
  const theMenu = theSuperMarket.theMenu.menuIsOpen;
  ls.set("theDrawer", theMenu);
  window.location.href = theLink;
};
