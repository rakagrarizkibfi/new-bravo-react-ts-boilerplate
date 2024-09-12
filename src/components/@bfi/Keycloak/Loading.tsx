// ** Logo
import logo from "@src/assets/images/logo/logo.svg";
import { Grid } from "@mui/material";

const KeycloakLoading = () => {
	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{ minHeight: "100vh" }}
		>
			<Grid
				item
				xs={12}
			>
				<img
					className="fallback-logo"
					src={logo}
					alt="logo"
					style={{ width: "75px" }}
				/>
			</Grid>
			<Grid
				item
				xs={12}
			>
				Checking authentication ...
			</Grid>
		</Grid>
	);
};

export default KeycloakLoading;
