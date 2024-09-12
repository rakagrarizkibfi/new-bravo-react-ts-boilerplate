import packageJson from "../../package.json";

export const APP_NAME: string | undefined = "BFI Default Template";
export const BACKEND_URL: string | undefined =
	import.meta.env.VITE_BACKEND_URL + import.meta.env.BASE_URL;
export const KEYCLOAK_URL: string | undefined = import.meta.env.VITE_KEYCLOAK_URL;
export const KEYCLOAK_CLIENTID: string | undefined = import.meta.env.VITE_KEYCLOAK_CLIENT_ID;
export const KEYCLOAK_REALM: string | undefined = import.meta.env.VITE_KEYCLOAK_REALM;
export const APPLICATION_VERSION: string | undefined = packageJson.version;
export const TRACKING_ID: string = import.meta.env.VITE_TRACKING_ID;
