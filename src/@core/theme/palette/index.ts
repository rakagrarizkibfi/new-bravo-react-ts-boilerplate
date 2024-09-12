// ** Type Imports
import { Palette } from "@mui/material";
import { Skin } from "@src/@core/layouts/types";

const DefaultPalette = (mode: Palette["mode"], skin: Skin): Palette => {
	// ** Vars
	const whiteColor = "#FFF";
	const lightColor = "51, 48, 60";
	const darkColor = "228, 230, 244";
	const darkPaperBgColor = "#2F3349";
	const mainColor = mode === "light" ? lightColor : darkColor;

	const defaultBgColor = () => {
		if (skin === "bordered" && mode === "light") {
			return whiteColor;
		} else if (skin === "bordered" && mode === "dark") {
			return darkPaperBgColor;
		} else if (mode === "light") {
			return "#F8F7FA";
		} else return "#25293C";
	};

	return {
		customColors: {
			dark: darkColor,
			main: mainColor,
			light: lightColor,
			lightPaperBg: whiteColor,
			darkPaperBg: darkPaperBgColor,
			bodyBg: mode === "light" ? "#F8F7FA" : "#25293C", // Same as palette.background.default but doesn't consider bordered skin
			trackBg: mode === "light" ? "#F1F0F2" : "#3B405B",
			avatarBg: mode === "light" ? "#F6F6F7" : "#4A5072",
			tableHeaderBg: mode === "light" ? "#F6F6F7" : "#4A5072",
		},
		mode: mode,
		common: {
			black: "#000",
			white: whiteColor,
		},
		primary: {
			light: "#D9E5F1",
			main: "#04559F",
			dark: "#003A70",
			contrastText: whiteColor,
		},
		secondary: {
			light: "#B2B4B8",
			main: "#A8AAAE",
			dark: "#949699",
			contrastText: whiteColor,
		},
		error: {
			light: "#FFE5E3",
			main: "#FD5044",
			dark: "#C73329",
			contrastText: whiteColor,
		},
		warning: {
			light: "#F9F2CC",
			main: "#E1BD00",
			dark: "#978109",
			contrastText: whiteColor,
		},
		info: {
			light: "#D9E5F1",
			main: "#04559F",
			dark: "#7AC143",
			contrastText: whiteColor,
		},
		success: {
			light: "#E9F8EC",
			main: "#6BD282",
			dark: "#349349",
			contrastText: whiteColor,
		},
		grey: {
			50: "#FAFAFA",
			100: "#F5F5F5",
			200: "#EEEEEE",
			300: "#E0E0E0",
			400: "#BDBDBD",
			500: "#9E9E9E",
			600: "#757575",
			700: "#616161",
			800: "#424242",
			900: "#212121",
			A100: "#F5F5F5",
			A200: "#EEEEEE",
			A400: "#BDBDBD",
			A700: "#616161",
		},
		text: {
			primary: `rgba(${mainColor}, 0.87)`,
			secondary: `rgba(${mainColor}, 0.6)`,
			disabled: `rgba(${mainColor}, 0.38)`,
		},
		divider: `rgba(${mainColor}, 0.12)`,
		background: {
			paper: mode === "light" ? whiteColor : darkPaperBgColor,
			default: defaultBgColor(),
		},
		action: {
			active: `rgba(${mainColor}, 0.54)`,
			hover: `rgba(${mainColor}, 0.04)`,
			selected: `rgba(${mainColor}, 0.08)`,
			disabled: `rgba(${mainColor}, 0.26)`,
			disabledBackground: `rgba(${mainColor}, 0.12)`,
			focus: `rgba(${mainColor}, 0.12)`,
		},
	} as Palette;
};

export default DefaultPalette;
