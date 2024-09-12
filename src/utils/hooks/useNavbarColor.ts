// ** Store Imports
import { useDispatch, useSelector } from "react-redux";

import { handleNavbarColor } from "@src/store/layout";

type StateNavbarType = {
	layout: {
		navbarColor: any;
	};
};

export const useNavbarColor = () => {
	// ** Hooks
	const dispatch = useDispatch();
	const store = useSelector((state: StateNavbarType) => state.layout);

	// ** Return a wrapped version of useState's setter function
	const setNavbarColor = (value: any) => {
		dispatch(handleNavbarColor(value));
	};

	return { navbarColor: store.navbarColor, setNavbarColor };
};
