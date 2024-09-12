// ** React Imports
import { MouseEvent, useState, ReactNode } from "react";
import { Link } from "react-router-dom";

// ** MUI Imports
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";

// ** Icon Imports
import Icon from "@src/@core/components/icon";

// ** Type Imports
import { OptionType, OptionsMenuType, OptionMenuItemType } from "./types";
import { useSelector } from "react-redux";

const MenuItemWrapper = ({
	children,
	option,
}: {
	children: ReactNode;
	option: OptionMenuItemType;
}) => {
	if (option.href) {
		return (
			<Box
				component={Link}
				to={option.href}
				{...option.linkProps}
				sx={{
					px: 4,
					py: 1.5,
					width: "100%",
					display: "flex",
					color: "inherit",
					alignItems: "center",
					textDecoration: "none",
				}}
			>
				{children}
			</Box>
		);
	} else {
		return <>{children}</>;
	}
};

const OptionsMenu = (props: OptionsMenuType) => {
	// ** Props
	const { icon, options, menuProps, iconProps, leftAlignMenu, iconButtonProps } = props;

	// ** State
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	// ** Hook & Var
	const { direction } = useSelector((state: any) => state.layoutMUI);

	const handleClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<IconButton
				aria-haspopup="true"
				onClick={handleClick}
				{...iconButtonProps}
			>
				{icon ? (
					icon
				) : (
					<Icon
						icon="tabler:dots-vertical"
						{...iconProps}
					/>
				)}
			</IconButton>
			<Menu
				keepMounted
				anchorEl={anchorEl}
				onClose={handleClose}
				open={Boolean(anchorEl)}
				{...(!leftAlignMenu && {
					anchorOrigin: { vertical: "bottom", horizontal: direction === "ltr" ? "right" : "left" },
					transformOrigin: { vertical: "top", horizontal: direction === "ltr" ? "right" : "left" },
				})}
				{...menuProps}
			>
				{options.map((option: OptionType, index: number) => {
					if (typeof option === "string") {
						return (
							<MenuItem
								key={index}
								onClick={(e) => {
									handleClose();
								}}
							>
								{option}
							</MenuItem>
						);
					} else if ("divider" in option) {
						return (
							option.divider && (
								<Divider
									key={index}
									{...option.dividerProps}
								/>
							)
						);
					} else {
						return (
							<MenuItem
								key={index}
								{...option.menuItemProps}
								{...(option.href && { sx: { p: 0 } })}
								onClick={(e) => {
									handleClose();
									if (option?.menuItemProps?.onClick) {
										option?.menuItemProps?.onClick(e as any);
									}
								}}
							>
								<MenuItemWrapper option={option}>
									{option.icon ? option.icon : null}
									{option.text}
								</MenuItemWrapper>
							</MenuItem>
						);
					}
				})}
			</Menu>
		</>
	);
};

export default OptionsMenu;
