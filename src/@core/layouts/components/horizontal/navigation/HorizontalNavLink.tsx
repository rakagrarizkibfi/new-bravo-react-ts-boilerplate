// ** React Imports
import { ElementType, Fragment } from "react";

// ** Next Imports
import { Link, useLocation } from "react-router-dom";

// ** MUI Imports
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import MuiListItem, { ListItemProps } from "@mui/material/ListItem";

// ** Third Party Imports
import clsx from "clsx";

// ** Theme Config Import
import themeConfig from "@src/configs/themeConfigMUI";

// ** Types
import { NavLink } from "@src/@core/layouts/types";

// ** Custom Components Imports
import UserIcon from "@src/layouts/UserIcon";
// import Translations from "src/layouts/components/Translations"

// ** Util Imports
import { hexToRGBA } from "@src/utils/hex-to-rgba";
import ListItem from "@mui/material/ListItem";
interface Props {
	item: NavLink;
	hasParent: boolean;
}

// const ListItem = styled(MuiListItem)<
// 	ListItemProps & { component?: ElementType; href: string; target?: "_blank" | undefined }
// >(({ theme }) => ({
// 	width: "auto",
// 	borderRadius: theme.shape.borderRadius,
// 	"&:hover": {
// 		backgroundColor: theme.palette.action.hover,
// 	},
// 	"&.active, &.active:hover": {
// 		backgroundColor: hexToRGBA(theme.palette.primary.main, 0.08),
// 	},
// 	"&.active .MuiTypography-root, &.active .MuiListItemIcon-root": {
// 		color: theme.palette.primary.main,
// 	},
// 	"&.active .MuiTypography-root": {
// 		fontWeight: 600,
// 	},
// 	"&:focus-visible": {
// 		outline: 0,
// 		backgroundColor: theme.palette.action.focus,
// 	},
// }))

const HorizontalNavLink = (props: Props) => {
	// ** Props
	const { item, hasParent } = props;

	// ** Hook & Vars
	const router = useLocation();
	const { navSubItemIcon, menuTextTruncate } = themeConfig;

	const icon = item.icon ? item.icon : navSubItemIcon;

	const Wrapper = !hasParent ? List : Fragment;

	const isNavLinkActive = () => {
		if (router.pathname === item.navLink) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<Wrapper {...(!hasParent ? { component: "div" } : {})}>
			<ListItem
				component={Link}
				disabled={item.disabled}
				{...(item.disabled && { tabIndex: -1 })}
				className={clsx({ active: isNavLinkActive() })}
				target={item.openInNewTab ? "_blank" : undefined}
				to={item.navLink === undefined ? "/" : `${item.navLink}`}
				onClick={(e) => {
					if (item.navLink === undefined) {
						e.preventDefault();
						e.stopPropagation();
					}
				}}
				sx={{
					...(item.disabled ? { pointerEvents: "none" } : { cursor: "pointer" }),
					...(!hasParent
						? {
								"&.active, &.active:hover": {
									boxShadow: (theme) =>
										`0px 2px 6px ${hexToRGBA(theme.palette.primary.main, 0.48)}`,
									background: (theme) =>
										`linear-gradient(72.47deg, ${theme.palette.primary.main} 22.16%, ${hexToRGBA(
											theme.palette.primary.main,
											0.7,
										)} 76.47%)`,
									"&:focus-visible": {
										background: (theme) =>
											`linear-gradient(72.47deg, ${theme.palette.primary.dark} 22.16%, ${hexToRGBA(
												theme.palette.primary.dark,
												0.7,
											)} 76.47%)`,
									},
									"& .MuiTypography-root, & .MuiListItemIcon-root": {
										color: "common.white",
									},
								},
						  }
						: {
								mx: 2,
								width: (theme) => `calc(100% - ${theme.spacing(2 * 2)})`,
								"&.active, &.active:hover": {
									"&:focus-visible": {
										backgroundColor: (theme) => hexToRGBA(theme.palette.primary.main, 0.24),
									},
								},
						  }),
				}}
			>
				<Box
					sx={{
						gap: 2,
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							...(menuTextTruncate && { overflow: "hidden" }),
						}}
					>
						<ListItemIcon sx={{ mr: 2, color: "text.secondary" }}>
							<UserIcon
								icon={icon}
								fontSize={icon === navSubItemIcon ? "0.625rem" : "1.375rem"}
							/>
						</ListItemIcon>
						<Typography
							{...(menuTextTruncate && { noWrap: true })}
							sx={{ color: "text.secondary" }}
						>
							{item.title}
						</Typography>
					</Box>
					{item.badgeContent ? (
						<Chip
							label={item.badgeContent}
							color={item.badgeColor || "primary"}
							sx={{
								height: 20,
								fontWeight: 600,
								"& .MuiChip-label": { px: 1.5, textTransform: "capitalize" },
							}}
						/>
					) : null}
				</Box>
			</ListItem>
		</Wrapper>
	);
};

export default HorizontalNavLink;
