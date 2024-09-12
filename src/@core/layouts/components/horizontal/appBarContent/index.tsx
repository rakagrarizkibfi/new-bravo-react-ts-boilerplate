// ** Next Import

import { IconButton, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

// ** MUI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import Icon from "@src/@core/components/icon";

import { Theme } from "@mui/material/styles";
// ** Type Import
import { LayoutProps } from "@src/@core/layouts/types";

// ** Theme Config Import
import themeConfig from "@src/configs/themeConfigMUI";
import LanguageDropdown from "@src/layouts/shared-components/LanguageDropdown";
import ModeToggler from "@src/layouts/shared-components/ModeToggler";
import NotificationDropdown from "@src/layouts/shared-components/NotificationDropdown";
import { useDispatch, useSelector } from "react-redux";
import { handleNavVisible } from "@src/store/layoutMUI";
import UserDropdown from "@src/layouts/shared-components/UserDropdown";

interface Props {
	hidden: LayoutProps["hidden"];
	settings: LayoutProps["settings"];
	saveSettings: LayoutProps["saveSettings"];
	appBarContent: NonNullable<
		NonNullable<LayoutProps["horizontalLayoutProps"]>["appBar"]
	>["content"];
	appBarBranding: NonNullable<
		NonNullable<LayoutProps["horizontalLayoutProps"]>["appBar"]
	>["branding"];
}

const LinkStyled = styled(Link)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	textDecoration: "none",
	marginRight: theme.spacing(8),
}));

const AppBarContent = (props: Props) => {
	// ** Props
	const { appBarContent: userAppBarContent, appBarBranding: userAppBarBranding } = props;
	const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));
	const dispatch = useDispatch();
	const { navVisible } = useSelector((state: any) => state.layoutMUI);
	// ** Hooks
	const theme = useTheme();

	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			{userAppBarBranding ? (
				userAppBarBranding(props)
			) : (
				<a
					href="/"
					style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
				>
					<img
						src={themeConfig.app.appLogoImage}
						alt="logo"
						style={{ maxWidth: "45px" }}
					/>
					<Typography
						variant="h6"
						sx={{
							ml: 2.5,
							fontWeight: 700,
							lineHeight: "24px",
							fontSize: "1.375rem !important",
							display: "flex",
						}}
					>
						{themeConfig.app.appName}
					</Typography>
				</a>
			)}
			{userAppBarContent ? userAppBarContent(props) : null}
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Box
					className="actions-left"
					sx={{ mr: 2, display: "flex", alignItems: "center" }}
				>
					{hidden ? (
						<IconButton
							color="inherit"
							sx={{ ml: -2.75 }}
							onClick={() => dispatch(handleNavVisible(!navVisible))}
						>
							<Icon
								fontSize="1.5rem"
								icon="tabler:menu-2"
							/>
						</IconButton>
					) : null}
				</Box>
				<Box
					className="actions-right"
					sx={{ display: "flex", alignItems: "center" }}
				>
					<ModeToggler />
					<LanguageDropdown />
					<NotificationDropdown
						notifications={[
							{
								meta: "string",
								title: "string",
								subtitle: "string",
								avatarText: "string",
							},
						]}
					/>
					<UserDropdown />
				</Box>
			</Box>
		</Box>
	);
};

export default AppBarContent;
