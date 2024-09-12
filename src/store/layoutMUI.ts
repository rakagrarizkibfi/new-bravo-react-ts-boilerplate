// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

// ** MUI Imports
import { Direction } from "@mui/material";

// ** ThemeConfig Import
import themeConfig from "@configs/themeConfigMUI";

// ** Types Import
import {
	Skin,
	Mode,
	AppBar,
	Footer,
	ThemeColor,
	ContentWidth,
	VerticalNavToggle,
} from "@src/@core/layouts/types";

export type Settings = {
	skin: Skin;
	mode: Mode;
	appBar?: AppBar;
	footer?: Footer;
	navHidden?: boolean; // navigation menu
	appBarBlur: boolean;
	direction: Direction;
	navCollapsed: boolean;
	themeColor: ThemeColor;
	contentWidth: ContentWidth;
	layout?: "vertical" | "horizontal";
	lastLayout?: "vertical" | "horizontal";
	verticalNavToggleType: VerticalNavToggle;
	toastPosition?:
		| "top-left"
		| "top-center"
		| "top-right"
		| "bottom-left"
		| "bottom-center"
		| "bottom-right";
};

const initialSkin = () => {
	const item = window.localStorage.getItem("skin");
	//** Parse stored json or if none return initialValue
	return item ? JSON.parse(item) : themeConfig.skin;
};

export const layoutSlice = createSlice({
	name: "layoutMUI",
	initialState: {
		navVisible: false,
		navHover: false,
		skin: initialSkin(),
		themeColor: "primary",
		mode: themeConfig.mode,
		footer: themeConfig.footer,
		layout: themeConfig.layout,
		lastLayout: themeConfig.layout,
		direction: themeConfig.direction,
		navHidden: themeConfig.navHidden,
		appBarBlur: themeConfig.appBarBlur,
		navCollapsed: themeConfig.navCollapsed,
		contentWidth: themeConfig.contentWidth,
		toastPosition: themeConfig.toastPosition,
		verticalNavToggleType: themeConfig.verticalNavToggleType,
		appBar:
			themeConfig.layout.type === "horizontal" && themeConfig.appBar === "hidden"
				? "fixed"
				: themeConfig.appBar,
	},
	reducers: {
		handleSkin: (state, action) => {
			state.skin = action.payload;
			window.localStorage.setItem("skin", JSON.stringify(action.payload));
		},
		handleMode: (state, action) => {
			state.mode = action.payload;
		},
		handleNavHover: (state, action) => {
			state.navHover = action.payload;
		},
		handleNavVisible: (state, action) => {
			state.navVisible = action.payload;
		},
		handleNavCollapsed: (state, action) => {
			state.navCollapsed = action.payload;
		},
	},
});

export const { handleSkin, handleNavHover, handleNavVisible, handleNavCollapsed, handleMode } =
	layoutSlice.actions;

export default layoutSlice.reducer;
