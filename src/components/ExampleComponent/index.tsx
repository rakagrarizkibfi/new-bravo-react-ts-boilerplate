import { Button } from "@mui/material";
import { useExampleHooks } from "./hooks";
import { exampleComponentStyle } from "./styles";
import { ExampleComponentTypes } from "./types";

const ExampleComponent = ({ entity }: ExampleComponentTypes) => {
	const { data, isOpen, action, isLoading } = useExampleHooks();
	console.log(entity);
	console.log(isOpen);
	return (
		<>
			<h1 style={exampleComponentStyle}>{data}</h1>
			<Button
				disabled={isLoading}
				onClick={action.handleChange() as any}
			>
				Button
			</Button>
		</>
	);
};
export default ExampleComponent;
