import { lazy } from "react";

const Alert = lazy(() => import("@src/pages/components/alerts/index"));
const Buttons = lazy(() => import("@src/pages/components/buttons/index"));
const Checkbox = lazy(() => import("@src/pages/components/checkboxes/index"));
const Input = lazy(() => import("@src/pages/components/input/index"));

const ComponentsRoute = [
	{
		path: "/components/alerts",
		element: <Alert />,
	},
	{
		path: "/components/buttons",
		element: <Buttons />,
	},
	{
		path: "/components/checkboxes",
		element: <Checkbox />,
	},
	{
		path: "/components/inputs",
		element: <Input />,
	},
];

export default ComponentsRoute;
