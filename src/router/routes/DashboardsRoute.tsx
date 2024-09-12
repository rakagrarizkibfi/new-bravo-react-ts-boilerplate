import { lazy } from "react";

const Dashboard = lazy(() => import("@src/pages/dashboard/Index"));

const DashboardRoutes = [
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
];

export default DashboardRoutes;
