import { CircularProgress } from "@mui/material";
import logo from "@src/assets/images/logo/logo.png";
import styled from "styled-components";

const LoaderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 70px auto;
`;

const Content = styled.div`
	position: relative;
`;

const ImgWrapper = styled.img`
	position: absolute;
	left: 16px;
	top: 16px;
`;

const BfiLoader = () => {
	return (
		<LoaderWrapper>
			<Content>
				<ImgWrapper
					src={logo}
					alt="logo"
					width={25}
				/>
				<CircularProgress />
			</Content>
		</LoaderWrapper>
	);
};

export default BfiLoader;
