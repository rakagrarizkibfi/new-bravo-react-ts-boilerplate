import Select from "react-select";
import { useCity } from "./hook/useCity";

type DropdownCityProps = {
	name: string;
	placeholder: String;
	initialValue?: string;
	onChange?: any;
};
const DropdownCity = ({ name, placeholder, initialValue, onChange }: DropdownCityProps) => {
	const { data, isLoading } = useCity();
	return (
		<>
			<Select
				options={data}
				defaultValue={initialValue}
				name={name}
				isLoading={isLoading}
				placeholder={placeholder}
				onChange={(e) => {
					onChange();
				}}
			/>
		</>
	);
};

export default DropdownCity;
