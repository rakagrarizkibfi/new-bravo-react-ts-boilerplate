import { Theme, useMediaQuery } from "@mui/material";
import { menuOtherApp } from "@src/services/keycloak/menuOtherApp";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ItemNavType } from "../types";
import navigationHorizontal from "@src/navigation/horizontal";
import navigationVertical from "@src/navigation/vertical";
import { useSelector } from "react-redux";

const useMenu = (menuType = "vertical") => {
	const [menuData, setMenuData] = useState([]);
	const { isAuthenticate } = useSelector((state: any) => state.auth);

	const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
	const { data, isFetched } = useQuery(["menuOtherApp"], menuOtherApp, {
		enabled: isAuthenticate,
		refetchOnMount: false,
	});

	// ** For ServerSide navigation
	useEffect(() => {
		const nav: any = menuType == "vertical" ? [...navigationVertical] : [...navigationHorizontal];
		data?.map((item: any) => {
			if (menuType == "vertical") {
				return nav.push({
					id: item.id,
					title: item.title,
					navLink: item.path,
				} as ItemNavType);
			}
			return nav
				.filter((x: ItemNavType) => x.id == "otherApp")[0]
				.children.push({
					id: item.id,
					title: item.title,
					navLink: item.path,
				} as ItemNavType);
		});
		setMenuData(nav);
	}, [isFetched]);

	return { menuData, isMedium: hidden };
};

export { useMenu };
