// ** React Imports
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

// ** Custom Hooks
import { useSkin } from "@src/utils/hooks/useSkin";

// ** Third Party Components
import classnames from "classnames";

const BlankLayout = () => {
	// ** States
	const [isMounted, setIsMounted] = useState(false);

	// ** Hooks
	const { skin } = useSkin();

	useEffect(() => {
		setIsMounted(true);
		return () => setIsMounted(false);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<div
			className={classnames("blank-page", {
				"dark-layout": skin === "dark",
			})}
		>
			<div className="app-content content">
				<div className="content-wrapper">
					<div className="content-body">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlankLayout;
