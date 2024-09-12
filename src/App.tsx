import { Suspense } from "react";

import ReactGA from "react-ga4";

// ** Router Import
import Router from "./router/Router";
import { TRACKING_ID } from "./constants/envConstant";

if (TRACKING_ID) {
	ReactGA.initialize(TRACKING_ID || ("" as string));
}

const App = () => {
	return (
		<Suspense fallback={null}>
			<Router />
		</Suspense>
	);
};

export default App;
