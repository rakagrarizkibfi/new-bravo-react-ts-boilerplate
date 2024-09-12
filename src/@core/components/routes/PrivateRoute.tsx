// ** React Imports
import { useContext, Suspense, ReactNode } from "react";
// ** Context Imports
import { AbilityContext } from "@src/utils/context/Can";

type PrivateRouteType = {
	children: ReactNode;
	route: any;
};
const PrivateRoute = ({ children, route }: PrivateRouteType) => {
	// ** Hooks & Vars
	const ability = useContext(AbilityContext);
	const user = JSON.parse(localStorage.getItem("userData") as string);

	if (route) {
		let action = null;
		let resource = null;
		let restrictedRoute = false;

		if (route.meta) {
			action = route.meta.action;
			resource = route.meta.resource;
			restrictedRoute = route.meta.restricted;
		}
	}

	return <Suspense fallback={null}>{children}</Suspense>;
};

export default PrivateRoute;
