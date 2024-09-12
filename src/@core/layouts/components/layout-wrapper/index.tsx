// ** React Imports
import { Fragment, useEffect, memo, ReactNode } from "react";

// ** Third Party Components

// ** Store & Actions
import { useSelector, useDispatch } from "react-redux";
import { handleContentWidth, handleMenuCollapsed, handleMenuHidden } from "@src/store/layout";

// ** ThemeConfig
import classnames from "classnames";

// ** Styles
import "animate.css/animate.css";
import themeConfig from "@src/configs/themeConfigMUI";

type LayoutWrapperType = {
	children: ReactNode;
	routeMeta: any;
};

type LayoutWrapperStoreType = {
	navbar: any;
	layout: any;
};

const LayoutWrapper = (props: LayoutWrapperType) => {
	// ** Props
	const { children, routeMeta } = props;

	// ** Store Vars
	const dispatch = useDispatch();

	const navbar = useSelector((state: LayoutWrapperStoreType) => state.navbar);
	const layout = useSelector((state: LayoutWrapperStoreType) => state.layout);

	const navbarStore = navbar;
	const layoutStored = layout.layout;
	const contentWidth = layout.contentWidth;

	//** Vars
	const appLayoutCondition =
		(layoutStored.layout === "horizontal" && !routeMeta) ||
		(layoutStored.layout === "horizontal" && routeMeta && !routeMeta.appLayout);
	const Tag = appLayoutCondition ? "div" : Fragment;

	// ** Clean Up Function
	const cleanUp = () => {
		if (routeMeta) {
			if (routeMeta.contentWidth && routeMeta.contentWidth === layout.contentWidth) {
				dispatch(handleContentWidth(themeConfig.contentWidth));
			}
			if (routeMeta.menuCollapsed && routeMeta.menuCollapsed === layout.menuCollapsed) {
				dispatch(handleMenuCollapsed(!layout.menuCollapsed));
			}
			if (routeMeta.menuHidden && routeMeta.menuHidden === layout.menuHidden) {
				dispatch(handleMenuHidden(!layout.menuHidden));
			}
		}
	};

	// ** ComponentDidMount
	useEffect(() => {
		if (routeMeta) {
			if (routeMeta.contentWidth) {
				dispatch(handleContentWidth(routeMeta.contentWidth));
			}
			if (routeMeta.menuCollapsed) {
				dispatch(handleMenuCollapsed(routeMeta.menuCollapsed));
			}
			if (routeMeta.menuHidden) {
				dispatch(handleMenuHidden(routeMeta.menuHidden));
			}
		}
		return () => cleanUp();
	}, [routeMeta]);

	// return (
	// 	<div
	// 		className={classnames("app-content content overflow-hidden", {
	// 			[routeMeta ? routeMeta.className : ""]: routeMeta && routeMeta.className,
	// 			"show-overlay": navbarStore.query.length,
	// 		})}>
	// 		<div className="content-overlay"></div>
	// 		<div className="header-navbar-shadow" />
	// 		<div
	// 			className={classnames({
	// 				"content-wrapper": routeMeta && !routeMeta.appLayout,
	// 				"content-area-wrapper": routeMeta && routeMeta.appLayout,
	// 				"container-xxl p-0": contentWidth === "boxed",
	// 			})}>
	// 			<Tag {...(appLayoutCondition ? { className: "content-body" } : {})}>{children}</Tag>
	// 		</div>
	// 	</div>
	// )

	return <div>{children}</div>;
};

export default memo(LayoutWrapper);
