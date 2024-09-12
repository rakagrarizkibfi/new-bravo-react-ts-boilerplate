// ** React Imports
import { ReactNode } from "react";

// ** MUI Imports
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";

// ** Theme Config
import themeConfig from "@src/configs/themeConfigMUI";

// ** Direction component for LTR or RTL

// ** Theme
import themeOptions from "./ThemeOptions";

// ** Global Styles
import GlobalStyling from "./globalStyles";
import Direction from "@src/layouts/vertical/Direction";
import { useSelector } from "react-redux";

interface Props {
	children: ReactNode;
}

const ThemeComponent = (props: Props) => {
	// ** Props
	const { children } = props;
	const settings = useSelector((state: any) => state.layoutMUI);

	// ** Pass merged ThemeOptions (of core and user) to createTheme function
	let theme = createTheme(themeOptions(settings, "light"));

	// ** Set responsive font sizes to true
	if (themeConfig.responsiveFontSizes) {
		theme = responsiveFontSizes(theme);
	}

	return (
		<ThemeProvider theme={theme}>
			<Direction direction={settings.direction}>
				<CssBaseline />
				<GlobalStyles styles={() => GlobalStyling(theme) as any} />
				{children}
			</Direction>
		</ThemeProvider>
	);
};

export default ThemeComponent;
