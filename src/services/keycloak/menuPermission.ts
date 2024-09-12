import axios from "axios";
import qs from "query-string";
import { KEYCLOAK_CLIENTID, KEYCLOAK_REALM, KEYCLOAK_URL } from "@src/constants/envConstant";

export const menuPermission = async () => {
	const data = qs.stringify({
		grant_type: "urn:ietf:params:oauth:grant-type:uma-ticket",
		audience: KEYCLOAK_CLIENTID + "-authorization",
		response_mode: "permissions",
	});

	const requestParam = {
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"Access-Control-Allow-Origin": "*",
		},
	};
	return axios
		.post(
			KEYCLOAK_URL + "/realms/" + KEYCLOAK_REALM + "/protocol/openid-connect/token",
			data,
			requestParam,
		)
		.then((response) => response.data)
		.catch(function (error) {
			console.error(error);
		});
};
