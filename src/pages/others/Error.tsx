import logoBfi from "../../assets/images/logo/bfi-logo-horizontal.svg";
// ** Custom Hooks

import ErrorImg from "@src/assets/images/pages/error.svg";
import ErrorImgDark from "@src/assets/images/pages/error-dark.svg";
import { useSelector } from "react-redux";

// ** MUI Imports
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";

const Error = () => {
	// ** Hooks
	const { skin } = useSelector((state: any) => state.layoutMUI);

	const illustration = skin === "dark" ? ErrorImgDark : ErrorImg;

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
							sx={{ mt: 2, fontWeight: "700" }}
						>
							The page is not available.
						</Typography>
						<Typography
							variant="body1"
							sx={{ mt: 4 }}
						>
							The page you search is not found on our website.{" "}
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};
export default Error;
