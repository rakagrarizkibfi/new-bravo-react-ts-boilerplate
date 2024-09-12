import { Avatar } from "@mui/material";
import { Avatar as BfiAvatar } from "@bfi-finance/frontend-ui";
import { BfiInitialNameProps } from "./types";

const BfiInitialName = ({ userName }: BfiInitialNameProps) => {
	const initialName = () => {
		const fullname = userName;
		if (fullname) {
			const space = fullname.split(" ");
			let name = "";
			for (let x = 0; x < space.length; x++) {
				if (x === 0 || x === space.length - 1) {
					name += space[x].substring(0, 1).toUpperCase();
				}
			}
			return name;
		}
		return "XX";
	};
	return (
		<>
			{initialName() == "XX" ? (
				<BfiAvatar
					size="medium"
					variant="placeholder"
				/>
			) : (
				<Avatar sx={{ bgcolor: "#04559F", fontWeight: 700, fontSize: "1em", color: "#fff" }}>
					{initialName()}
				</Avatar>
			)}
		</>
	);
};
export default BfiInitialName;
