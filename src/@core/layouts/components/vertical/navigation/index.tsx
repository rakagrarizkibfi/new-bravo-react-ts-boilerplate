// ** React Import
import { useRef, useState } from "react";

// ** MUI Imports
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import { createTheme, responsiveFontSizes, styled, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material/styles";

// ** Third Party Components
import PerfectScrollbar from "react-perfect-scrollbar";

// ** Theme Config
import themeConfig from "@src/configs/themeConfigMUI";

// ** Component Imports
import Drawer from "./Drawer";
import VerticalNavItems from "./VerticalNavItems";
import VerticalNavHeader from "./VerticalNavHeader";

// ** Theme Options
import themeOptions from "@src/@core/theme/ThemeOptions";
import { useSelector } from "react-redux";

interface Props {
	verticalNavItems: any;
}

const Navigation = (props: Props) => {
	const { verticalNavItems } = props;

	// ** States
	const [groupActive, setGroupActive] = useState<string[]>([]);
	const [currentActiveGroup, setCurrentActiveGroup] = useState<string[]>([]);

	// ** Ref
	const shadowRef = useRef(null);

	// ** Var
	const { beforeVerticalNavMenuContentPosition } = themeConfig;

	const settings = useSelector((state: any) => state.layoutMUI);
	const { navHover } = settings;

	// ** Create new theme for the navigation menu when mode is `semi-dark`
	let darkTheme = createTheme(themeOptions(settings, "dark"));
	const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

	// ** Set responsive font sizes to true
	if (themeConfig.responsiveFontSizes) {
		darkTheme = responsiveFontSizes(darkTheme);
	}

	// ** Fixes Navigation InfiniteScroll
	const handleInfiniteScroll = (ref: HTMLElement) => {
		if (ref) {
			// @ts-ignore
			ref._getBoundingClientRect = ref.getBoundingClientRect;

			ref.getBoundingClientRect = () => {
				// @ts-ignore
				const original = ref._getBoundingClientRect();

				return { ...original, height: Math.floor(original.height) };
			};
		}
	};

	// ** Scroll Menu
	const scrollMenu = (container: any) => {
		if (beforeVerticalNavMenuContentPosition === "static") {
			container = hidden ? container.target : container;
			if (shadowRef && container.scrollTop > 0) {
				// @ts-ignore
				if (!shadowRef.current.classList.contains("scrolled")) {
					// @ts-ignore
					shadowRef.current.classList.add("scrolled");
				}
			} else {
				// @ts-ignore
				shadowRef.current.classList.remove("scrolled");
			}
		}
	};

	const ScrollWrapper = hidden ? Box : PerfectScrollbar;

	return (
		<ThemeProvider theme={darkTheme}>
			<Drawer>
				<VerticalNavHeader />
				<Box sx={{ position: "relative", overflow: "hidden" }}>
					{/* @ts-ignore */}
					<ScrollWrapper
						{...(hidden
							? {
									onScroll: (container: any) => scrollMenu(container),
									sx: { height: "100%", overflowY: "auto", overflowX: "hidden" },
							  }
							: {
									options: { wheelPropagation: false },
									onScrollY: (container: any) => scrollMenu(container),
									containerRef: (ref: any) => handleInfiniteScroll(ref),
							  })}
					>
						<List
							className="nav-items"
							sx={{ pt: 0, "& > :first-of-type": { mt: "0" } }}
						>
							<VerticalNavItems
								verticalNavItems={verticalNavItems}
								navHover={navHover}
								groupActive={groupActive}
								setGroupActive={setGroupActive}
								currentActiveGroup={currentActiveGroup}
								setCurrentActiveGroup={setCurrentActiveGroup}
							/>
						</List>
					</ScrollWrapper>
				</Box>
			</Drawer>
		</ThemeProvider>
	);
};

export default Navigation;
