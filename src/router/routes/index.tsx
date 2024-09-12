// ** React Imports
import { Fragment } from "react";

// ** Routes Imports
import PrivateRoute from "@components/routes/PrivateRoute";
import PublicRoute from "@components/routes/PublicRoute";
import BlankLayout from "@layouts/BlankLayout";
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper";
import HorizontalLayout from "@src/layouts/HorizontalLayout";
import VerticalLayout from "@src/layouts/VerticalLayout";
import { isObjEmpty } from "@src/utils/Utils";

import ComponentsRoute from "./ComponentsRoute";
import DashboardRoutes from "./DashboardsRoute";
import OthersRoutes from "./OthersRoute";
import { AllRouteType, LayoutType, LayoutTypeComponent } from "./types";

// ** Layouts

// ** Route Components

// ** Utils

const getLayout: any = {
	blank: <BlankLayout />,
	vertical: <VerticalLayout />,
	horizontal: <HorizontalLayout />,
};

// ** Default Route
const DefaultRoute = "/dashboard";

// ** Merge Routes
const Routes = [...DashboardRoutes, ...ComponentsRoute, ...OthersRoutes];

const getRouteMeta = (route: any) => {
	if (isObjEmpty(route.element.props)) {
		if (route.meta) {
			return { routeMeta: route.meta };
		} else {
			return {};
		}
	}
};

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout: any, defaultLayout: any) => {
	const LayoutRoutes = [] as string[];

	if (Routes) {
		Routes.filter((route: any) => {
			let isBlank = false;
			// ** Checks if Route layout or Default layout matches current layout
			if (
				(route.meta && route.meta.layout && route.meta.layout === layout) ||
				((route.meta === undefined || route.meta.layout === undefined) && defaultLayout === layout)
			) {
				let RouteTag = PrivateRoute;

				// ** Check for public or private route
				if (route.meta) {
					route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false);
					RouteTag = route.meta.publicRoute ? PublicRoute : PrivateRoute;
				}

				if (route.element) {
					const Wrapper: React.FC<any> =
						// eslint-disable-next-line multiline-ternary
						isObjEmpty(route.element.props) && isBlank === false
							? // eslint-disable-next-line multiline-ternary
							  LayoutWrapper
							: Fragment;

					route.element = (
						<Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
							<RouteTag route={route}>{route.element}</RouteTag>
						</Wrapper>
					);
				}

				// Push route to LayoutRoutes
				LayoutRoutes.push(route);
			}
			return LayoutRoutes;
		});
	}
	return LayoutRoutes;
};

const getRoutes = (layout: LayoutType) => {
	const defaultLayout: string = layout || "vertical";
	const layouts = ["vertical", "horizontal", "blank"];

	const AllRoutes = [] as string[];
	layouts.forEach((layoutItem: string) => {
		const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

		AllRoutes.push({
			path: "/",
			element: getLayout[layoutItem] || getLayout[defaultLayout],
			children: LayoutRoutes,
		} as any);
	});
	return AllRoutes;
};

export { DefaultRoute, Routes, getRoutes };
