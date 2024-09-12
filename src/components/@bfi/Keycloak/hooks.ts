import { KeycloakInitOptions } from "keycloak-js";
import { useEffect, useState } from "react";
import keycloak from "./keycloak";

const useKeycloak = ({
	onError,
	onSuccess,
}: {
	onError: (error: any) => void;
	onSuccess: (data: { token: string | null; refreshToken: string | null }) => void;
}) => {
	const [keycloakInstance, setKeycloakInstance] = useState<any>(null);
	const [authenticated, setAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const keycloakOption: KeycloakInitOptions = {
		onLoad: "login-required",
		silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html",
		checkLoginIframe: true,
		checkLoginIframeInterval: 3,
	};

	useEffect(() => {
		if (!keycloakInstance) {
			keycloak
				.init(keycloakOption)
				.then((authenticated) => {
					setKeycloakInstance(keycloak);
					setAuthenticated(authenticated);
					setIsLoading(false);
					if (onSuccess) {
						onSuccess({
							token: keycloak.token ?? null,
							refreshToken: keycloak.refreshToken ?? null,
						});
					}
				})
				.catch((error) => {
					setError(error);
					setIsLoading(false);
					if (onError) {
						onError(error);
					}
				});
		}
	}, []);

	if (keycloakInstance && !keycloak.authenticated) {
		console.log("logout");
	}

	return { keycloak, isLoading, isAuthenticate: authenticated, error };
};

export default useKeycloak;
