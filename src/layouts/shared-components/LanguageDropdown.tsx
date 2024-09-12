// ** React Import
import { useEffect } from "react";

// ** Icon Imports
import Icon from "@src/@core/components/icon";

// ** Third Party Import
import { useTranslation } from "react-i18next";

// ** Custom Components Imports
import OptionsMenu from "@src/@core/components/option-menu";

const LanguageDropdown = () => {
	// ** Hook
	const { i18n } = useTranslation();

	const handleLangItemClick = (lang: "en" | "id") => {
		i18n.changeLanguage(lang);
	};

	// ** Change html `lang` attribute when changing locale
	useEffect(() => {
		document.documentElement.setAttribute("lang", i18n.language);
	}, [i18n.language]);

	return (
		<OptionsMenu
			iconButtonProps={{ color: "inherit" }}
			icon={
				<Icon
					fontSize="1.5rem"
					icon="tabler:language"
				/>
			}
			menuProps={{ sx: { "& .MuiMenu-paper": { mt: 4.5, minWidth: 130 } } }}
			options={[
				{
					text: "English",
					menuItemProps: {
						sx: { py: 2 },
						selected: i18n.language === "en",
						onChange: () => {
							console.log("firing");
						},
						onClick: () => {
							handleLangItemClick("en");
						},
					},
				},
				{
					text: "Bahasa",
					menuItemProps: {
						sx: { py: 2 },
						selected: i18n.language === "id",
						onClick: () => {
							console.log("fire");
							handleLangItemClick("id");
						},
					},
				},
			]}
		/>
	);
};

export default LanguageDropdown;
