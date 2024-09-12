import logoBfi from "../../assets/images/logo/bfi-logo-horizontal.svg";
// ** Custom Hooks

import ComingSoonImage from "@src/assets/images/pages/coming-soon.svg";
import ComingSoonImageDark from "@src/assets/images/pages/coming-soon.svg";
import { useSelector } from "react-redux";

// ** MUI Imports
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";

const ComingSoon = () => {
	// ** Hooks
	const { skin } = useSelector((state: any) => state.layoutMUI);

	const illustration = skin === "dark" ? ComingSoonImageDark : ComingSoonImage;

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
							alt="underMaintenance"
							style={{ maxWidth: "400px" }}
						/>
						<Typography
							variant="h3"
							sx={{ mt: 2, fontWeight: "800" }}
						>
							We are launching soon
						</Typography>
						<Typography
							variant="body1"
							sx={{ mt: 4 }}
						>
							We`re creating something awesome. Please subscribe to get notified when it`s ready!
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};
export default ComingSoon;
