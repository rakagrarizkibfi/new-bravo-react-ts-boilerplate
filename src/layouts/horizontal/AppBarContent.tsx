import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

// ** Icon Imports
import Icon from "@src/@core/components/icon";

import { Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import UserDropdown from "../shared-components/UserDropdown";
import ModeToggler from "../shared-components/ModeToggler";
import { useDispatch, useSelector } from "react-redux";
import { handleNavVisible } from "@src/store/layoutMUI";
import NotificationDropdown from "../shared-components/NotificationDropdown";
import LanguageDropdown from "../shared-components/LanguageDropdown";

const AppBarContent = () => {
	// ** Props
	const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));
	const dispatch = useDispatch();
	const { navVisible } = useSelector((state: any) => state.layoutMUI);

	return (
		<Box
			sx={{
				width: "100%",
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
	);
};

export default AppBarContent;
