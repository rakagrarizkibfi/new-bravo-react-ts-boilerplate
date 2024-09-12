// ** React Imports
import { Outlet } from "react-router-dom";

import Layout from "@layouts/VerticalLayoutMUI";

// ** Menu Items Array
import navigation from "@src/navigation/vertical";
import { useQuery } from "@tanstack/react-query";

import { menuOtherApp } from "../services/keycloak/menuOtherApp";
import { useMenu } from "./hooks/useMenu";
import PrivateLayout from "./PrivateLayout";

const VerticalLayout = (props: any) => {
	const { menuData } = useMenu();

	return (
		<>
			<PrivateLayout>
				<Layout
					verticalNavItems={menuData}
					{...props}
				>
					<Outlet />
				</Layout>
			</PrivateLayout>
		</>
	);
};

export default VerticalLayout;
