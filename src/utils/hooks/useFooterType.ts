// ** Store Imports
import { useDispatch, useSelector } from "react-redux";

import { handleFooterType } from "@src/store/layout";

type StateFooterType = {
	layout: {
		footerType: any;
	};
};

export const useFooterType = () => {
	// ** Hooks
	const dispatch = useDispatch();
	const store = useSelector((state: StateFooterType) => state.layout);

	const setFooterType = (type: any) => {
		dispatch(handleFooterType(type));
	};

	return { setFooterType, footerType: store.footerType };
};
