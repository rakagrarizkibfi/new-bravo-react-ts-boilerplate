// ** Router imports
import { lazy, useEffect } from "react";

// ** Router imports
import { useDispatch } from "react-redux";
import { useRoutes, Navigate, useLocation } from "react-router-dom";

import { useLayout } from "@src/utils/hooks/useLayout";
import BlankLayout from "@layouts/BlankLayout";
import { handleLogin } from "@src/store/authentication";
// ** Layouts

// ** Hooks Imports

// ** Utils
import { getUserData, getHomeRouteForLoggedInUser } from "../utils/Utils";

// ** GetRoutes
import { DefaultRoute, getRoutes } from "./routes";
import { userIdentity } from "@src/auth/helper";
import { ABILITY } from "@src/constants/mockDataConstant";
import { UserDataType } from "@src/types/authenticationTypes";

// ** Components
const Error = lazy(() => import("../pages/others/Error"));
const NotAuthorized = lazy(() => import("../pages/others/NotAuthorized"));
import ReactGA from "react-ga4";

const Router = () => {
	// ** Hooks
	const { layout }: any = useLayout();
	const dispatch = useDispatch();
	const allRoutes = getRoutes(layout);

	const routes = useRoutes([
		{
			path: "/",
			index: true,
			element: (
				<Navigate
					replace
					to={DefaultRoute}
				/>
			),
		},
		{
			path: "/health-check",
			element: <>Health-check</>,
		},
		{
			path: "*",
			element: <BlankLayout />,
			children: [{ path: "*", element: <Error /> }],
		},
		...(allRoutes as any),
	]);
	return routes;
};

export default Router;
