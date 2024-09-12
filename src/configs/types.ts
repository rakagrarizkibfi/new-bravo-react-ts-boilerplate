import { Direction } from "@mui/material";
import {
	AppBar,
	ContentWidth,
	Footer,
	HorizontalMenuToggle,
	Mode,
	Skin,
	VerticalNavToggle,
} from "@src/@core/layouts/types";

type ThemeConfig = {
	app: {
		appName: string;
		appLogoImage: any;
	};
	skin: Skin;
	mode: Mode;
	appBar: AppBar;
	footer: Footer;
	navHidden: boolean;
	appBarBlur: boolean;
	direction: Direction;
	navCollapsed: boolean;
	routingLoader: boolean;
	disableRipple: boolean;
	navigationSize: number;
	navSubItemIcon: string;
	menuTextTruncate: boolean;
	contentWidth: ContentWidth;
	disableCustomizer: boolean;
	responsiveFontSizes: boolean;
	collapsedNavigationSize: number;
	horizontalMenuAnimation: boolean;
	layout: {
		type: "vertical" | "horizontal";
		isRTL: boolean;
		skin: Skin;
		navbar: {
			// ? For horizontal menu, navbar type will work for navMenu type
			type: "floating" | "static" | "sticky" | "hidden"; // static , sticky , floating, hidden
			backgroundColor: string; // BS color options [primary, success, etc]
		};
		menu: {
			isHidden: boolean;
		};
		contentWidth: "full" | "boxed";
	};
	verticalNavToggleType: VerticalNavToggle;
	horizontalMenuToggle: HorizontalMenuToggle;
	afterVerticalNavMenuContentPosition: "fixed" | "static";
	beforeVerticalNavMenuContentPosition: "fixed" | "static";
	toastPosition:
		| "top-left"
		| "top-center"
		| "top-right"
		| "bottom-left"
		| "bottom-center"
		| "bottom-right";
};

export type { ThemeConfig };
