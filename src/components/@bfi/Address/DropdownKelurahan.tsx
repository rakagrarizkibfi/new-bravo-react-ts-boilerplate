import { useKelurahan } from "./hook/useCity";
import Select from "react-select";
import { errorStyle } from "./errorStyle";

const DropdownKelurahan = ({
	name,
	placeholder,
	isDisabled,
	initialValue,
	onChange,
	onBlur,
	value,
	isInvalid,
	city,
	kecamatan,
}: any) => {
	const { data, isFetching } = useKelurahan(city, kecamatan);
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

export default DropdownKelurahan;
