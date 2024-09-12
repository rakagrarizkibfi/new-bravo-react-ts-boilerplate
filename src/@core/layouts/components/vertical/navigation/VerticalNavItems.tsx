// ** Type Imports
import { NavLink, NavGroup, LayoutProps, NavSectionTitle } from "@src/@core/layouts/types";

// ** Custom Menu Components
import VerticalNavLink from "./VerticalNavLink";
import VerticalNavGroup from "./VerticalNavGroup";
import VerticalNavSectionTitle from "./VerticalNavSectionTitle";

// ** Vertical Menu Components
import { canViewMenuItem, canViewMenuGroup } from "@layouts/utils";

interface Props {
	parent?: NavGroup;
	navHover?: boolean;
	groupActive: string[];
	navVisible?: boolean;
	verticalNavItems?: any;
	isSubToSub?: NavGroup;
	currentActiveGroup: string[];
	setGroupActive: (value: string[]) => void;
	setCurrentActiveGroup: (item: string[]) => void;
}

const resolveNavItemComponent = (item: NavGroup | NavLink | NavSectionTitle) => {
	if ((item as NavSectionTitle).sectionTitle) return VerticalNavSectionTitle;
	if ((item as NavGroup).children) return VerticalNavGroup;

	return VerticalNavLink;
};

const VerticalNavItems = (props: Props) => {
	const { verticalNavItems } = props;

	const RenderMenuItems = verticalNavItems?.map((item: any, index: number) => {
		const TagName: any = resolveNavItemComponent(item);

		if (item.children) {
			return (
				canViewMenuGroup(item) && (
					<TagName
						item={item}
						index={index}
						//key={item.id || item.header}
						key={index}
						{...props}
					/>
				)
			);
		}

		return (
			canViewMenuItem(item) && (
				<TagName
					{...props}
					key={item.id || item.header}
					item={item}
				/>
			)
		);
	});

	return RenderMenuItems;
};

export default VerticalNavItems;
