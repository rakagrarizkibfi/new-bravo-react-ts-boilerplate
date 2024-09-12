import notAuthImg from "@src/assets/images/svg/not-authorize.svg";

// ** MUI Imports
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

const UnauthorizeCard = () => {
	return (
		<>
			<Grid container>
				<Grid
					item
					justifyContent="center"
					alignItems="center"
					xs={12}
				>
					<Card sx={{ padding: 20 }}>
						<CardContent sx={{ textAlign: "center" }}>
							<img
								src={notAuthImg}
								alt="notAuthImg"
								className="img-fluid align-self-center mt-75"
								style={{ maxWidth: "400px", width: "100%" }}
							/>
							<Typography
								variant="h3"
								sx={{ mt: 2, fontWeight: "700" }}
							>
								You have no access to this page.
							</Typography>
							<Typography
								variant="body1"
								sx={{ mt: 4 }}
							>
								Sorry, we couldn’t show this page please contact the administrator
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</>
	);
};
export default UnauthorizeCard;
