import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { APP_NAME } from "@src/constants/envConstant";

type TitleProps = {
	pageTitle: string;
};
const Title = ({ pageTitle }: TitleProps) => {
	const location = useLocation();
	const TITLE = `${pageTitle} | ${APP_NAME}`;
	useEffect(() => {
		ReactGA.send({
			hitType: "pageview",
			page: window.location.pathname + window.location.search,
			title: document.title,
		});
	}, [location]);
	return (
		<Helmet>
			<title>{TITLE}</title>
		</Helmet>
	);
};

export default Title;
