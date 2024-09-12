// ** Type Import
import { OwnerStateThemeType } from "./";

// ** Hook Import
import { useSelector } from "react-redux";

const Accordion = () => {
	// Hook & Var

	const { skin } = useSelector((state: any) => state.layoutMUI);

	return {
		MuiAccordion: {
			styleOverrides: {
				root: ({ theme }: OwnerStateThemeType) => ({
					margin: theme.spacing(2, 0),
					"&:before": { display: "none" },
					borderRadius: theme.shape.borderRadius,
					transition: "box-shadow .35s ease, margin .35s ease",
					boxShadow: theme.shadows[skin === "bordered" ? 0 : 1],
					...(skin === "bordered" && { border: `1px solid ${theme.palette.divider}` }),
					"&.Mui-disabled": {
						backgroundColor: `rgba(${theme.palette.customColors.main}, 0.12)`,
					},
					"&.Mui-expanded": {
						margin: theme.spacing(2, 0),
						boxShadow: theme.shadows[skin === "bordered" ? 0 : 6],
					},
					"& .MuiCollapse-root": {
						minHeight: "unset !important",
						transition: "height .35s ease !important",
						"&.MuiCollapse-entered": {
							height: "auto !important",
						},
					},
				}),
			},
		},
		MuiAccordionSummary: {
			styleOverrides: {
				root: ({ theme }: OwnerStateThemeType) => ({
					fontWeight: 600,
					borderRadius: "inherit",
					padding: `0 ${theme.spacing(4.5)}`,
					"& + .MuiCollapse-root": {
						"& .MuiAccordionDetails-root:first-of-type": {
							paddingTop: 0,
						},
					},
					"&.Mui-expanded": {
						minHeight: "unset",
						borderBottomLeftRadius: 0,
						borderBottomRightRadius: 0,
						"& .MuiAccordionSummary-content": {
							margin: theme.spacing(3, 0),
						},
					},
					"& .MuiTypography-root": {
						fontWeight: 600,
					},
				}),
				content: ({ theme }: OwnerStateThemeType) => ({
					margin: theme.spacing(3, 0),
				}),
				expandIconWrapper: ({ theme }: OwnerStateThemeType) => ({
					color: theme.palette.text.primary,
				}),
			},
		},
		MuiAccordionDetails: {
			styleOverrides: {
				root: ({ theme }: OwnerStateThemeType) => ({
					padding: theme.spacing(4.5),
					"& + .MuiAccordionDetails-root": {
						paddingTop: 0,
					},
				}),
			},
		},
	};
};

export default Accordion;
