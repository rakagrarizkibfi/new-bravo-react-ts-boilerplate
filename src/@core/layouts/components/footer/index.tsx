// ** Icons Import

import { Box, Typography, styled, useMediaQuery } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { APPLICATION_VERSION } from "@src/constants/envConstant";

const TypoStyle = styled(Typography)(({ theme }) => ({
	textDecoration: "none",
	color: theme.palette.grey[500],
	fontSize: "0.9rem",
}));

const Footer = () => {
	const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					alignItems: "center",
					justifyContent: "space-between",

					padding: "1rem 1.7rem",
				}}
			>
				<TypoStyle>Copyright © {new Date().getFullYear()} All rights Reserved</TypoStyle>
				{hidden ? null : (
					<Box
						sx={{
							display: "flex",
							flexWrap: "wrap",
							alignItems: "center",
							"& :not(:last-child)": { mr: 4 },
						}}
					>
						<TypoStyle>Application Version {APPLICATION_VERSION}</TypoStyle>
					</Box>
				)}
			</Box>
		</>
	);
};

export default Footer;
