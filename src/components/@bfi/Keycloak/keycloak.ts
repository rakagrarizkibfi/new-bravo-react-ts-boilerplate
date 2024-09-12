import { KEYCLOAK_CLIENTID, KEYCLOAK_REALM, KEYCLOAK_URL } from "@src/constants/envConstant";
import Keycloak from "keycloak-js";

const keycloak: Keycloak = new Keycloak({
	url: KEYCLOAK_URL,
	realm: KEYCLOAK_REALM ?? "",
	clientId: KEYCLOAK_CLIENTID ?? "",
});

export default keycloak;
