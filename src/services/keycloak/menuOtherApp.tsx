import useJwt from "@src/auth/jwt/useJwt";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Monitor } from "react-feather";

import { KEYCLOAK_MENU_OTHER_APP } from "@src/constants/urlApiConstant";
import { KEYCLOAK_CLIENTID } from "@src/constants/envConstant";

export const menuOtherApp = async () => {
	const token = useJwt.getToken();

	const { aud } = jwt_decode(token) as any;
	const responseListClient = await axios.get(KEYCLOAK_MENU_OTHER_APP);

	const filterByAudience = responseListClient.data.filter((x: any) => {
		return (
			aud.includes(x.clientId) &&
			!x.name?.includes("$") &&
			!x.clientId.includes(KEYCLOAK_CLIENTID + "-authorization")
		);
	});

	return filterByAudience.map((item: any) => {
		return {
			id: item.id,
			icon: <Monitor size={12} />,
			title: item.name,
			path: item.baseUrl,
			externalLink: true,
			newTab: true,
		};
	});
};
