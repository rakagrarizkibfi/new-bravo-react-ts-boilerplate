// ** React Imports
import { ReactNode, Suspense } from "react";
import { Navigate } from "react-router-dom";

// ** Utils
import { getUserData, getHomeRouteForLoggedInUser } from "@src/utils/Utils";
import { useSelector } from "react-redux";

type PublicRouteType = {
	children: ReactNode;
	route: any;
};

const PublicRoute = ({ children, route }: PublicRouteType) => {
	const ctx = useSelector((state: any) => state.auth);

	if (route) {
		const user = getUserData();
		const restrictedRoute = route.meta && route.meta.restricted;
		if (user && restrictedRoute) {
			return <Navigate to={getHomeRouteForLoggedInUser(user.role)} />;
		}
	}

	return <Suspense fallback={null}>{children}</Suspense>;
};

export default PublicRoute;
