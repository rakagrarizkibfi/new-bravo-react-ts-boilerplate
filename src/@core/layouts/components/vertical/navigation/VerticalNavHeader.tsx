import { Link } from "react-router-dom";

// ** MUI Imports
import IconButton from "@mui/material/IconButton";
import Box, { BoxProps } from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// ** Custom Icon Import
import Icon from "@src/@core/components/icon";

// ** Configs
import themeConfig from "@src/configs/themeConfigMUI";
import { useDispatch, useSelector } from "react-redux";
import { handleNavCollapsed, handleNavVisible } from "@src/store/layoutMUI";

// ** Styled Components
const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	paddingRight: theme.spacing(4.5),
	transition: "padding .25s ease-in-out",
	minHeight: theme.mixins.toolbar.minHeight,
	margin: "10px 0px",
}));

const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
	fontWeight: 800,
	lineHeight: "24px",
	fontSize: "1.375rem !important",
	color: theme.palette.text.primary,
	transition: "opacity .25s ease-in-out, margin .25s ease-in-out",
}));

const LinkStyled = styled(Link)({
	display: "flex",
	alignItems: "center",
	textDecoration: "none",
});

const VerticalNavHeader = () => {
	// ** Hooks & Vars
	const dispatch = useDispatch();

	const theme = useTheme();
	const { navCollapsed, navHover, skin, navVisible } = useSelector((state: any) => state.layoutMUI);

	const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

	const { collapsedNavigationSize } = themeConfig;

	const collapsedNavWidth = collapsedNavigationSize;
	const navigationBorderWidth = skin === "bordered" ? 1 : 0;

	const menuCollapsedStyles = navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 };

	const menuHeaderPaddingLeft = () => {
		if (navCollapsed && !navHover) {
			return (collapsedNavWidth - navigationBorderWidth - 32) / 8;
		} else {
			return 4.5;
		}
	};

	const MenuLockedIcon = () => <Icon icon="tabler:circle-dot" />;

	const MenuUnlockedIcon = () => <Icon icon="tabler:circle" />;

	return (
		<MenuHeaderWrapper
			className="nav-header"
			sx={{
				pl: menuHeaderPaddingLeft(),
				"& .MuiTypography-root, & .MuiIconButton-root": {
					color: "text.primary",
				},
			}}
		>
			<a
				href="/"
				style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
			>
				<img
					src={themeConfig.app.appLogoImage}
					alt="logo"
					style={{ maxWidth: "45px" }}
				/>
				<HeaderTitle
					variant="h6"
					sx={{ ...menuCollapsedStyles, ...(navCollapsed && !navHover ? {} : { ml: 2.5 }) }}
				>
					{themeConfig.app.appName}
				</HeaderTitle>
			</a>

			{hidden ? (
				<IconButton
					disableRipple
					disableFocusRipple
					onClick={() => dispatch(handleNavVisible(!navVisible))}
					sx={{
						p: 0,
						backgroundColor: "transparent !important",
						color: `${theme.palette.text.secondary} !important`,
					}}
				>
					<Icon
						icon="tabler:x"
						fontSize="1.25rem"
					/>
				</IconButton>
			) : (
				<IconButton
					disableRipple
					disableFocusRipple
					onClick={() => dispatch(handleNavCollapsed(!navCollapsed))}
					sx={{
						p: 0,
						backgroundColor: "transparent !important",
						"& svg": {
							fontSize: "1.25rem",
							...menuCollapsedStyles,
							transition: "opacity .25s ease-in-out",
						},
					}}
				>
					{navCollapsed ? MenuUnlockedIcon() : MenuLockedIcon()}
				</IconButton>
			)}
		</MenuHeaderWrapper>
	);
};

export default VerticalNavHeader;
