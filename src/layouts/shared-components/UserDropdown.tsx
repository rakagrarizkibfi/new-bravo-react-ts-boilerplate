// ** React Imports
import { useState, useEffect, SyntheticEvent, Fragment, useContext } from "react";

// ** Store & Actions
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// ** MUI Imports
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";

// ** Icon Imports
import Icon from "@src/@core/components/icon";
import { handleLogout } from "@src/store/authentication";
import BfiInitialName from "@src/components/@bfi/BfiInitialName";

import { KeycloakContext } from "@src/components/@bfi/Keycloak";

// ** Styled Components
const BadgeContentSpan = styled("span")(({ theme }) => ({
	width: 8,
	height: 8,
	borderRadius: "50%",
	backgroundColor: theme.palette.success.main,
	boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
}));

const MenuItemStyled = styled(MenuItem)<MenuItemProps>(({ theme }) => ({
	"&:hover .MuiBox-root, &:hover .MuiBox-root svg": {
		color: theme.palette.primary.main,
	},
}));

const UserDropdown = () => {
	const navigate = useNavigate() as any;
	const dispatch = useDispatch();
	const { keycloak } = useContext(KeycloakContext);

	// ** States
	const [anchorEl, setAnchorEl] = useState<Element | null>(null);

	// ** Hooks

	// ** Vars
	const { direction } = useSelector((state: any) => state.layoutMUI);
	const { userData } = useSelector((state: any) => state.auth);

	const handleDropdownOpen = (event: SyntheticEvent) => {
		setAnchorEl(event.currentTarget);
	};

	const handleDropdownClose = (url?: string) => {
		if (url) {
			navigate.push(url);
		}
		setAnchorEl(null);
	};

	const handleClickLogout = (e: any) => {
		e.preventDefault();
		dispatch(handleLogout());
		keycloak.logout();
		navigate.push("/");
		handleDropdownClose();
	};

	return (
		<Fragment>
			<Badge
				overlap="circular"
				onClick={handleDropdownOpen}
				sx={{ ml: 2, cursor: "pointer" }}
				badgeContent={<BadgeContentSpan />}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
			>
				<BfiInitialName userName={(userData && userData["fullName"]) || ""} />
			</Badge>
			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={() => handleDropdownClose()}
				sx={{ "& .MuiMenu-paper": { width: 230, mt: 4.5 } }}
				anchorOrigin={{ vertical: "bottom", horizontal: direction === "ltr" ? "right" : "left" }}
				transformOrigin={{ vertical: "top", horizontal: direction === "ltr" ? "right" : "left" }}
			>
				<Box sx={{ py: 1.75, px: 6 }}>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Badge
							overlap="circular"
							badgeContent={<BadgeContentSpan />}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "right",
							}}
						>
							<BfiInitialName userName={(userData && userData["fullName"]) || ""} />
						</Badge>
						<Box
							sx={{ display: "flex", ml: 2.5, alignItems: "flex-start", flexDirection: "column" }}
						>
							<Typography sx={{ fontWeight: 600 }}>
								{(userData && userData["fullName"]) || "John Doe"}
							</Typography>
							<Typography variant="body2">Admin</Typography>
						</Box>
					</Box>
				</Box>
				<Divider sx={{ my: (theme) => `${theme.spacing(2)} !important` }} />
				<MenuItemStyled
					onClick={handleClickLogout}
					sx={{ py: 2, "& svg": { mr: 2, fontSize: "1.375rem" } }}
				>
					<Icon icon="tabler:logout" />
					Logout
				</MenuItemStyled>
			</Menu>
		</Fragment>
	);
};

export default UserDropdown;
