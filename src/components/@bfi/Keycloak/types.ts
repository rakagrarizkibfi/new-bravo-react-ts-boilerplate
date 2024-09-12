import { KeycloakError } from "keycloak-js";
import { ReactNode } from "react";

type TKeycloakProvider = {
	children: ReactNode;
	onError?: (error: any) => void;
	onSuccess?: (data: { token: string | null; refreshToken: string | null }) => void;
};

type TKeycloakContext = {
	keycloak: any;
	isAuthenticate: boolean;
	error: KeycloakError | null;
};

export type { TKeycloakProvider, TKeycloakContext };
