import { Context, createContext } from "react";
import useKeycloak from "./hooks";
import KeycloakLoading from "./Loading";
import { TKeycloakContext, TKeycloakProvider } from "./types";

export const KeycloakContext: Context<TKeycloakContext> = createContext<TKeycloakContext>({
	keycloak: null,
	isAuthenticate: false,
	error: null,
});

export const KeycloakProvider = ({ children, onError, onSuccess }: TKeycloakProvider) => {
	const { keycloak, isLoading, isAuthenticate, error } = useKeycloak({
		onError,
		onSuccess,
	} as any);
	if (isLoading) return <KeycloakLoading />;
	return (
		<KeycloakContext.Provider value={{ keycloak, isAuthenticate, error }}>
			{children}
		</KeycloakContext.Provider>
	);
};
