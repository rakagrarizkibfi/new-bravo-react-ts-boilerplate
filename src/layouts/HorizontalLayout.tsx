// ** React Imports
import { Outlet } from "react-router-dom";

import Layout from "@layouts/HorizontalLayoutMUI";

// ** Menu Items Array
import { useMenu } from "./hooks/useMenu";
import PrivateLayout from "./PrivateLayout";

const HorizontalLayout = (props: any) => {
	const { menuData, isMedium } = useMenu("horizontal");

	return (
		<>
			{!isMedium && (
				<PrivateLayout>
					<Layout
						horizontalLayoutProps={menuData}
						{...props}
					>
						<Outlet />
					</Layout>
				</PrivateLayout>
			)}
		</>
	);
};

export default HorizontalLayout;
