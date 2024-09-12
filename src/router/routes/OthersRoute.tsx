import { lazy } from "react";

const Error = lazy(() => import("../../pages/others/Error"));
const ComingSoon = lazy(() => import("../../pages/others/ComingSoon"));
const Maintenance = lazy(() => import("../../pages/others/Maintenance.js"));
const NotAuthorized = lazy(() => import("../../pages/others/NotAuthorized"));
const ErrorSso = lazy(() => import("../../pages/others/ErrorSso"));

const OthersRoutes = [
	{
		path: "/coming-soon",
		element: <ComingSoon />,
		meta: {
			publicRoute: true,
			layout: "blank",
		},
	},
	{
		path: "/error/unauthorized",
		element: <NotAuthorized />,
		meta: {
			publicRoute: true,
			layout: "blank",
		},
	},
	{
		path: "/error/sso",
		element: <ErrorSso />,
		meta: {
			publicRoute: true,
			layout: "blank",
		},
	},
	{
		path: "/maintenance",
		element: <Maintenance />,
		meta: {
			publicRoute: true,
			layout: "blank",
		},
	},
	{
		path: "/error/not-found",
		element: <Error />,
		meta: {
			publicRoute: true,
			layout: "blank",
		},
	},
];

export default OthersRoutes;
