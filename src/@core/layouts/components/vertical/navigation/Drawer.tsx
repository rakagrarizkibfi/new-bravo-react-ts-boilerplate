// ** MUI Imports
import { styled } from "@mui/material/styles";
import MuiSwipeableDrawer, { SwipeableDrawerProps } from "@mui/material/SwipeableDrawer";
import { useDispatch, useSelector } from "react-redux";
import { Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { handleNavHover, handleNavVisible } from "@src/store/layoutMUI";
import { LayoutProps } from "@src/@core/layouts/types";
import themeConfig from "@src/configs/themeConfigMUI";

const SwipeableDrawer = styled(MuiSwipeableDrawer)<SwipeableDrawerProps>({
	overflowX: "hidden",
	transition: "width .25s ease-in-out",
	"& ul": {
		listStyle: "none",
	},
	"& .MuiListItem-gutters": {
		paddingLeft: 4,
		paddingRight: 4,
	},
	"& .MuiDrawer-paper": {
		left: "unset",
		right: "unset",
		overflowX: "hidden",
		transition: "width .25s ease-in-out, box-shadow .25s ease-in-out",
	},
});

const Drawer = ({ children }: { children: LayoutProps["children"] }) => {
	const dispatch = useDispatch();

	// ** Vars
	const { skin, navCollapsed, navHover, navVisible } = useSelector((state: any) => state.layoutMUI);
	const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

	const { navigationSize, collapsedNavigationSize } = themeConfig;

	const navWidth = navigationSize;
	const collapsedNavWidth = collapsedNavigationSize;
	const navigationBorderWidth = skin === "bordered" ? 1 : 0;

	let flag = true;

	// Drawer Props for Mobile & Tablet screens
	const MobileDrawerProps = {
		open: navVisible,
		onOpen: () => dispatch(handleNavVisible(true)),
		onClose: () => dispatch(handleNavVisible(false)),
		ModalProps: {
			keepMounted: true, // Better open performance on mobile.
		},
	};

	// Drawer Props for Laptop & Desktop screens
	const DesktopDrawerProps = {
		open: true,
		onOpen: () => null,
		onClose: () => null,
		onMouseEnter: () => {
			// Declared flag to resolve first time flicker issue while trying to collapse the menu
			if (flag || navCollapsed) {
				dispatch(handleNavHover(true));
				flag = false;
			}
		},
		onMouseLeave: () => {
			if (navCollapsed) {
				dispatch(handleNavHover(false));
			}
		},
	};

	return (
		<SwipeableDrawer
			className="layout-vertical-nav"
			variant={hidden ? "temporary" : "permanent"}
			{...(hidden ? { ...MobileDrawerProps } : { ...DesktopDrawerProps })}
			PaperProps={{
				sx: {
					backgroundColor: "background.paper",
					...(!hidden && skin !== "bordered" && { boxShadow: 6 }),
					width: navCollapsed && !navHover ? collapsedNavWidth : navWidth,
					borderRight: (theme) =>
						navigationBorderWidth === 0
							? 0
							: `${navigationBorderWidth}px solid ${theme.palette.divider}`,
				},
			}}
			sx={{
				width: navCollapsed ? collapsedNavWidth : navWidth,
			}}
		>
			{children}
		</SwipeableDrawer>
	);
};

export default Drawer;
