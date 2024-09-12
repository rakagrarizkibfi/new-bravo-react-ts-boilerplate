// ** React Imports
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import Spinner from "./@core/components/spinner/Fallback-spinner.js";
import ability from "./configs/acl/ability.js";
import themeConfig from "./configs/themeConfigMUI.js";
import { store } from "./store/store.js";

// ** Intl, CASL & ThemeColors Context
import * as serviceWorker from "./serviceWorker.js";
import { AbilityContext } from "./utils/context/Can.js";
import { ThemeContext } from "./utils/context/ThemeColors.js";

// ** ThemeConfig

// ** Toast

// ** i18n
import "./configs/i18n/index.js";

// ** Spinner (Splash Screen)

// ** PrismJS
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx.min";

// ** React Perfect Scrollbar
import "react-perfect-scrollbar/dist/css/styles.css";

// ** Core styles
import "./@core/assets/fonts/feather/iconfont.css";
import "react-loading-skeleton/dist/skeleton.css";
import ThemeComponent from "./@core/theme/ThemeComponent.js";

// ** Service Worker

// ** Lazy load app
const LazyApp = lazy(() => import("./App.js"));

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
const queryClient = new QueryClient();

root.render(
	<BrowserRouter basename={""}>
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<Provider store={store}>
				<Suspense fallback={<Spinner />}>
					<AbilityContext.Provider value={ability}>
						<ThemeContext>
							<ThemeComponent>
								<LazyApp />
								<Toaster
									position={themeConfig.toastPosition}
									toastOptions={{ className: "react-hot-toast" }}
								/>
							</ThemeComponent>
						</ThemeContext>
					</AbilityContext.Provider>
				</Suspense>
			</Provider>
		</QueryClientProvider>
	</BrowserRouter>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
