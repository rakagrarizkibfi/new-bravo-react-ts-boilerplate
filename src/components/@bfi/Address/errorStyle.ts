export const errorStyle = (isInvalid = false) => {
	return {
		control: (base: any, state: { isFocused: any }) => ({
			...base,
			borderColor: state.isFocused ? "#ddd" : isInvalid ? "#ec0000" : "#ddd",
			"&:hover": {
				borderColor: state.isFocused ? "#ddd" : isInvalid ? "#ec0000" : "#ddd",
			},
		}),
	};
};
