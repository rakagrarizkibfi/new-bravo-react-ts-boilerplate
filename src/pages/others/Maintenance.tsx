import logoBfi from "../../assets/images/logo/bfi-logo-horizontal.svg";
import MaintenanceImage from "@src/assets/images/pages/under-maintenance.svg";
import MaintenanceImageDark from "@src/assets/images/pages/under-maintenance-dark.svg";
import { useSelector } from "react-redux";

// ** MUI Imports
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";

const Maintenance = () => {
	// ** Hooks
	const { skin } = useSelector((state: any) => state.layoutMUI);

	const illustration = skin === "dark" ? MaintenanceImageDark : MaintenanceImage;

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
							alt="Under maintenance page"
							style={{ maxWidth: "400px" }}
						/>
						<Typography
							variant="h3"
							sx={{ mt: 2, fontWeight: "800" }}
						>
							Under Maintenance
						</Typography>
						<Typography
							variant="body1"
							sx={{ mt: 4 }}
						>
							Sorry for the inconvenience but we're performing some maintenance at the moment
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};
export default Maintenance;
