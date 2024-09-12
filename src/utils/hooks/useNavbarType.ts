// ** Store Imports
import { useDispatch, useSelector } from "react-redux";

import { handleNavbarType } from "@src/store/layout";

type StateNavbarType = {
	layout: {
		navbarType: any;
	};
};

export const useNavbarType = () => {
	// ** Hooks
	const dispatch = useDispatch();
	const store = useSelector((state: StateNavbarType) => state.layout);

	const setNavbarType = (type: any) => {
		dispatch(handleNavbarType(type));
	};

	return { navbarType: store.navbarType, setNavbarType };
};
