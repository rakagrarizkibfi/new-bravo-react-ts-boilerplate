import { BACKEND_URL, KEYCLOAK_REALM, KEYCLOAK_URL } from "./envConstant";

export const KEYCLOAK_MENU_OTHER_APP =
	KEYCLOAK_URL + "/admin/realms/" + KEYCLOAK_REALM + "/clients";
export const KEYCLOAK_MENU_PERMISSION =
	KEYCLOAK_URL + "/realms/" + KEYCLOAK_REALM + "/protocol/openid-connect/token";

export const LEGACY_DROPDOWN_CITY = BACKEND_URL + "/legacy-api/api/v1/master/city";
export const LEGACY_DROPDOWN_KECAMATAN = BACKEND_URL + "/legacy-api/api/v1/master/kecamatan";
export const LEGACY_DROPDOWN_KELURAHAN = BACKEND_URL + "/legacy-api/api/v1/master/kelurahan";
export const LEGACY_DROPDOWN_ZIPCODE = BACKEND_URL + "/legacy-api/api/v1/master/zipcode";
export const OMNI_API = BACKEND_URL + "/omni-api/api/v1/campaign/omni_campaign_paging";

export const DUMMY_COUNTRY = BACKEND_URL + "/dummy-api/country";
