// ** React Imports
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

// ** MUI Imports
import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";

import Navigation from "./components/vertical/navigation";
import LayoutAppBar from "./components/vertical/appBar";
import Footer from "./components/footer";

type VerticalLayoutType = {
	children: any;
	verticalNavItems: any;
};

const VerticalLayout = (props: VerticalLayoutType) => {
	// ** Props
	const { children, verticalNavItems } = props;

	// ** States
	const [isMounted, setIsMounted] = useState(false);
	const [menuVisibility, setMenuVisibility] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	// ** Vars
	const { navHidden, contentWidth, lastLayout } = useSelector((state: any) => state.layoutMUI);

	// ** Update Window Width
	const handleWindowWidth = () => {
		setWindowWidth(window.innerWidth);
	};

	// ** Vars
	const location = useLocation();

	//** This function will detect the Route Change and will hide the menu on menu item click
	useEffect(() => {
		if (menuVisibility && windowWidth < 1200) {
			setMenuVisibility(false);
		}
	}, [location]);

	//** Sets Window Size & Layout Props
	useEffect(() => {
		if (window !== undefined) {
			window.addEventListener("resize", handleWindowWidth);
		}
	}, [windowWidth]);

	//** ComponentDidMount
	useEffect(() => {
		setIsMounted(true);
		return () => setIsMounted(false);
	}, []);

	const VerticalLayoutWrapper = styled("div")({
		height: "100%",
		display: "flex",
	});

	const MainContentWrapper = styled(Box)<BoxProps>({
		flexGrow: 1,
		minWidth: 0,
		display: "flex",
		minHeight: "100vh",
		flexDirection: "column",
	});

	const ContentWrapper = styled("main")(({ theme }) => ({
		flexGrow: 1,
		width: "100%",
		padding: theme.spacing(6),
		transition: "padding .25s ease-in-out",
		[theme.breakpoints.down("sm")]: {
			paddingLeft: theme.spacing(4),
			paddingRight: theme.spacing(4),
		},
	}));

	if (!isMounted) {
		return null;
	}
	return (
		<VerticalLayoutWrapper>
			{navHidden ? null : <Navigation verticalNavItems={verticalNavItems} />}

			<MainContentWrapper className="layout-content-wrapper">
				{/* AppBar Component */}
				<LayoutAppBar />
				{/* Content */}
				<ContentWrapper
					className="layout-page-content"
					sx={{
						...(contentWidth === "boxed" && {
							mx: "auto",
							"@media (min-width:1440px)": { maxWidth: 1440 },
							"@media (min-width:1200px)": { maxWidth: "100%" },
						}),
					}}
				>
					{children}
				</ContentWrapper>
				<Footer />
			</MainContentWrapper>
		</VerticalLayoutWrapper>
	);
};

export default VerticalLayout;
