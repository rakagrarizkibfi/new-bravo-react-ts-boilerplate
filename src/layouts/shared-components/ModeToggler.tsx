// ** MUI Imports
import IconButton from "@mui/material/IconButton";

// ** Icon Imports
import Icon from "@src/@core/components/icon";

// ** Types Import
import { Mode } from "@src/@core/layouts/types";
import { handleMode } from "@src/store/layoutMUI";
import { useDispatch, useSelector } from "react-redux";

const ModeToggler = () => {
	// ** hooks
	const dispatch = useDispatch();
	const { mode } = useSelector((state: any) => state.layoutMUI);

	const handleModeToggle = () => {
		if (mode === "light") {
			dispatch(handleMode("dark" as Mode));
		} else {
			dispatch(handleMode("light" as Mode));
		}
	};

	return (
		<IconButton
			color="inherit"
			aria-haspopup="true"
			onClick={handleModeToggle}
		>
			<Icon
				fontSize="1.5rem"
				icon={mode === "dark" ? "tabler:sun" : "tabler:moon-stars"}
			/>
		</IconButton>
	);
};

export default ModeToggler;
