// ** React Imports
import { Fragment, useEffect } from "react";

// ** Third Party Components
import Prism from "prismjs";

import {
	Stack,
	Button,
	CardContent,
	Card,
	Breadcrumbs,
	Link,
	Typography,
	Box,
	CardHeader,
} from "@mui/material";

import { Button as BfiButton } from "@bfi-finance/frontend-ui/components";
import Title from "@src/components/@bfi/Title";

const Buttons = () => {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	return (
		<>
			<Title pageTitle="Button" />
			<Card>
				<CardHeader
					title="Button"
					subheader="Lorem ipsum dolor sit amet, consectetur adipiscing elit "
				/>
				<CardContent>
					<Box>
						<div className="demo-space-x">
							<Button variant="text">Text</Button>
							<Button variant="contained">Contained</Button>
							<Button variant="outlined">Outlined</Button>
						</div>
						<div className="demo-space-x">
							<Button
								variant="contained"
								color="success"
							>
								Success
							</Button>
							<Button
								variant="contained"
								color="error"
							>
								Error
							</Button>
							<Button
								variant="contained"
								color="warning"
							>
								Warning
							</Button>
							<Button
								variant="contained"
								color="info"
							>
								Info
							</Button>
						</div>
					</Box>
				</CardContent>
			</Card>

			<Card sx={{ marginTop: "20px" }}>
				<CardHeader
					title="Button Design Sytem"
					subheader="Lorem ipsum dolor sit amet, consectetur adipiscing elit "
				/>
				<CardContent>
					<Box>
						<BfiButton text="Label" />
					</Box>
				</CardContent>
			</Card>
		</>
	);
};
export default Buttons;
