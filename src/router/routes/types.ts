import { ReactNode } from "react";

export type LayoutType = "vertical" | "horizontal" | "blank";
// export type LayoutTypeComponent = {
// 	blank: ReactNode;
// 	vertical: ReactNode;
// 	horizontal: ReactNode;
// };
export type LayoutTypeComponent = {
	[key in LayoutType]: ReactNode;
};
export type AllRouteType = {
	path: string;
	element: ReactNode;
	children: ReactNode;
};
