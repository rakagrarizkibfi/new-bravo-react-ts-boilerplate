import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Button, Theme, useMediaQuery } from "@mui/material";
import { useTheme } from "styled-components";
import { UnderConstruction } from "@src/assets/svg";

const Underconstruction = () => {
	const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
	const CardPadding = { padding: matches ? 5 : 20 };
	return (
		<Grid container>
			<Grid
				item
				justifyContent="center"
				alignItems="center"
				xs={12}
			>
				<Card sx={CardPadding}>
					<CardContent sx={{ textAlign: "center" }}>
						<img
							src={UnderConstruction}
							alt="underMaintenance"
							style={{ maxWidth: "400px", width: "100%" }}
						/>
						<Typography
							variant="h3"
							sx={{ mt: 2, fontWeight: "700" }}
						>
							This page is currently <br />
							under construction
						</Typography>
						<Typography
							variant="body1"
							sx={{ mt: 4 }}
						>
							Sorry for the inconvenience but we’re performing some maintenance at the moment.
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};
export default Underconstruction;
