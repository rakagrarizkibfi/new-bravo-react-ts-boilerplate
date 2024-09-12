// ** Reducers Imports
import auth from "./authentication";
import header from "./header";
import layout from "./layout";
import layoutMUI from "./layoutMUI";
import navbar from "./navbar";

const rootReducer = {
	auth,
	navbar,
	layout,
	layoutMUI,
	header,
};

export default rootReducer;
