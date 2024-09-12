import logoBfi from "../../assets/images/logo/bfi-logo-horizontal.svg";

import UnauthorizeImage from "@src/assets/images/pages/not-authorized.svg";
import UnauthorizeImageDark from "@src/assets/images/pages/not-authorized-dark.svg";
import { useSelector } from "react-redux";

// ** MUI Imports
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";

const NotAuthorized = () => {
	// ** Hooks
	const { skin } = useSelector((state: any) => state.layoutMUI);

	// ** Vars
	const illustration = skin === "dark" ? UnauthorizeImageDark : UnauthorizeImage;

	return (
		<Grid
			container
			sx={{ height: "100vh" }}
		>
			<Grid
				item
				xs={12}
			>
				<Card
					sx={{
						padding: 20,
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<CardContent sx={{ textAlign: "center" }}>
						<Box>
							<img
								src={logoBfi}
								alt="BFI logo"
								style={{ width: "200px" }}
							/>
						</Box>
						<img
							src={illustration}
							alt="Not authorized page"
							style={{ maxWidth: "400px" }}
						/>
						<Typography
							variant="h3"
							sx={{ mt: 2, fontWeight: "800" }}
						>
							You are not authorized! 🔐
						</Typography>
						<Typography
							variant="body1"
							sx={{ mt: 4 }}
						>
							Oops! 😖 Sorry, we couldn’t show this page please contact the administrator.
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};
export default NotAuthorized;
