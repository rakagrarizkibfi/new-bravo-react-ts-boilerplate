import { useKecamatan } from "./hook/useCity";
import Select from "react-select";
import { errorStyle } from "./errorStyle";

const DropdownKecamatan = ({
	name,
	placeholder,
	initialValue,
	onChange,
	onBlur,
	value,
	isInvalid,
	city,
	isDisabled,
}: any) => {
	const { data, isFetching } = useKecamatan(city);

	const defaultValue = () => {
		return data ? data.find((item: any) => item.value === value) : "";
	};

	return (
		<>
			<Select
				options={data}
				value={defaultValue() || ""}
				defaultValue={initialValue}
				name={name}
				styles={errorStyle(isInvalid)}
				isLoading={isFetching}
				placeholder={placeholder}
				className={isInvalid && "is-invalid"}
				onBlur={onBlur}
				onChange={onChange}
				isDisabled={isDisabled}
			/>
		</>
	);
};

export default DropdownKecamatan;
