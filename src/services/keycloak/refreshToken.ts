import axios from "axios";
import qs from "query-string";

import { KEYCLOAK_MENU_PERMISSION } from "@src/constants/urlApiConstant";
import { KEYCLOAK_CLIENTID } from "@src/constants/envConstant";
import { userIdentity } from "@src/auth/helper";

export const refreshToken = async () => {
	const { refreshToken } = userIdentity();

	const data = qs.stringify({
		grant_type: "refresh_token",
		client_id: KEYCLOAK_CLIENTID,
		refresh_token: refreshToken,
	});
	const requestParam = {
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
	};
	return axios
		.post(KEYCLOAK_MENU_PERMISSION, data, requestParam)
		.then((response) => response.data)
		.catch(function (error) {
			throw error;
		});
};
