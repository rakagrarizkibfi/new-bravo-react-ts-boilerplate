// ** React Imports
import { useEffect } from "react";

// ** Third Party Components
import Prism from "prismjs";

import {
	Alert,
	Stack,
	AlertTitle,
	CardContent,
	Card,
	Breadcrumbs,
	Link,
	Typography,
	Box,
	Button,
	CardHeader,
} from "@mui/material";
import Title from "@src/components/@bfi/Title";
import { Banner } from "@bfi-finance/frontend-ui";

// ** Source Code

const Alerts = () => {
	useEffect(() => {
		Prism.highlightAll();
	}, []);
	return (
		<>
			<Title pageTitle="Alerts" />
			<Card>
				<CardHeader
					title="Alert"
					subheader="Lorem ipsum dolor sit amet, consectetur adipiscing elit "
				/>
				<CardContent>
					<Box>
						<Stack
							sx={{ width: "100%" }}
							spacing={2}
						>
							<Banner
								format="close-icon"
								handleAction={function Ga() {}}
								message="One line text for banner information"
								shape="box"
								variant="success"
							/>
							<Banner
								format="close-icon"
								handleAction={function Ga() {}}
								message="One line text for banner information"
								shape="box"
								variant="danger"
							/>
							<Banner
								format="close-icon"
								handleAction={function Ga() {}}
								message="One line text for banner information"
								shape="box"
								variant="alert"
							/>
						</Stack>
					</Box>
					{/* <Box mt={10}>
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert variant='outlined' severity='error'>
                This is an error alert — check it out!
              </Alert>
              <Alert variant='outlined' severity='warning'>
                This is a warning alert — check it out!
              </Alert>
              <Alert variant='outlined' severity='info'>
                This is an info alert — check it out!
              </Alert>
              <Alert variant='outlined' severity='success'>
                This is a success alert — check it out!
              </Alert>
            </Stack>
          </Box> */}
					{/* <Box mt={10}>
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert variant='filled' severity='error'>
                This is an error alert — check it out!
              </Alert>
              <Alert variant='filled' severity='warning'>
                This is a warning alert — check it out!
              </Alert>
              <Alert variant='filled' severity='info'>
                This is an info alert — check it out!
              </Alert>
              <Alert variant='filled' severity='success'>
                This is a success alert — check it out!
              </Alert>
            </Stack>
          </Box> */}
				</CardContent>
			</Card>
		</>
	);
};
export default Alerts;
