import {
	CardContent,
	Card,
	Breadcrumbs,
	Link,
	Typography,
	Box,
	FormGroup,
	FormControlLabel,
	Checkbox,
	CardHeader,
} from "@mui/material";
import Title from "@src/components/@bfi/Title";

const Checkboxes = () => {
	return (
		<>
			<Title pageTitle="Checkbox" />
			<Card>
				<CardHeader
					title="Checkbox"
					subheader="Lorem ipsum dolor sit amet, consectetur adipiscing elit "
				/>
				<CardContent>
					<Box>
						<FormGroup>
							<FormControlLabel
								control={<Checkbox defaultChecked />}
								label="Label"
							/>
							<FormControlLabel
								required
								control={<Checkbox />}
								label="Required"
							/>
							<FormControlLabel
								disabled
								control={<Checkbox />}
								label="Disabled"
							/>
						</FormGroup>
					</Box>
				</CardContent>
			</Card>
		</>
	);
};
export default Checkboxes;
