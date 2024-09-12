// ** MUI Imports
import { styled, Theme } from "@mui/material/styles";
import MuiAppBar, { AppBarProps } from "@mui/material/AppBar";
import MuiToolbar, { ToolbarProps } from "@mui/material/Toolbar";

// ** Type Imports
import { hexToRGBA } from "@src/utils/hex-to-rgba";
import { useSelector } from "react-redux";
import AppBarContent from "@src/layouts/vertical/AppBarContent";

// ** Util Import

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
	transition: "none",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "transparent",
	color: theme.palette.text.primary,
	minHeight: theme.mixins.toolbar.minHeight,
	[theme.breakpoints.up("sm")]: {
		paddingLeft: theme.spacing(6),
		paddingRight: theme.spacing(6),
	},
	[theme.breakpoints.down("sm")]: {
		paddingLeft: theme.spacing(4),
		paddingRight: theme.spacing(4),
	},
}));

const Toolbar = styled(MuiToolbar)<ToolbarProps>(({ theme }) => ({
	width: "100%",
	marginTop: theme.spacing(4),
	borderRadius: theme.shape.borderRadius,
	padding: `${theme.spacing(0, 6)} !important`,
}));

const LayoutAppBar = () => {
	// ** Props

	// ** Vars
	const { skin, appBar, appBarBlur, contentWidth } = useSelector((state: any) => state.layoutMUI);

	const appBarBlurEffect = appBarBlur && {
		"&:after": {
			top: 0,
			left: 0,
			zIndex: -1,
			width: "100%",
			content: '""',
			position: "absolute",
			backdropFilter: "blur(10px)",
			height: (theme: Theme) =>
				`calc(${theme.mixins.toolbar.minHeight as number}px + ${theme.spacing(4)})`,
			mask: (theme: Theme) =>
				`linear-gradient(${theme.palette.background.default}, ${theme.palette.background.default} 18%, transparent 100%)`,
			background: (theme: Theme) =>
				`linear-gradient(180deg,${hexToRGBA(
					theme.palette.background.default,
					0.7,
				)} 44%, ${hexToRGBA(theme.palette.background.default, 0.43)} 73%, ${hexToRGBA(
					theme.palette.background.default,
					0,
				)})`,
		},
	};

	if (appBar === "hidden") {
		return null;
	}

	let userAppBarStyle = {};
	return (
		<AppBar
			elevation={0}
			color="default"
			className="layout-navbar"
			sx={{ ...appBarBlurEffect, ...userAppBarStyle }}
			position={appBar === "fixed" ? "sticky" : "static"}
		>
			<Toolbar
				className="navbar-content-container"
				sx={{
					...(appBarBlur && { backdropFilter: "blur(6px)" }),
					minHeight: (theme) => `${theme.mixins.toolbar.minHeight as number}px !important`,
					backgroundColor: (theme) =>
						hexToRGBA(theme.palette.background.paper, appBarBlur ? 0.95 : 1),
					...(skin === "bordered"
						? { border: (theme) => `1px solid ${theme.palette.divider}` }
						: { boxShadow: 4 }),
					...(contentWidth === "boxed" && {
						"@media (min-width:1440px)": {
							maxWidth: (theme) => `calc(1440px - ${theme.spacing(6 * 2)})`,
						},
					}),
				}}
			>
				<AppBarContent />
			</Toolbar>
		</AppBar>
	);
};

export default LayoutAppBar;
