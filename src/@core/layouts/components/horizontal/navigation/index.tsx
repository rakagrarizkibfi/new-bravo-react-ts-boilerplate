// ** MUI Imports
import Box from "@mui/material/Box";

// ** Config Import
import themeConfig from "@src/configs/themeConfigMUI";

// ** Menu Components
import HorizontalNavItems from "./HorizontalNavItems";

// ** Types
interface Props {
	horizontalNavItems: any;
}

const Navigation = (props: Props) => {
	return (
		<Box
			className="menu-content"
			sx={{
				display: "flex",
				flexWrap: "wrap",
				alignItems: "center",
				"& > *": {
					"&:not(:last-child)": { mr: 1 },
					...(themeConfig.menuTextTruncate && { maxWidth: 200 }),
				},
			}}
		>
			<HorizontalNavItems {...props} />
		</Box>
	);
};

export default Navigation;
