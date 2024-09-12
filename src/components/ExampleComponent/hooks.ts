import { useEffect, useState } from "react";

const useExampleHooks = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleChange = () => {
		console.log("handle Change");
	};
	const handleSubmit = () => {
		console.log("handle submit");
	};

	useEffect(() => {
		setIsOpen(true);
	}, []);
	console.log("example");

	return { data: "example", isLoading: false, isOpen, action: { handleChange, handleSubmit } };
};

export { useExampleHooks };
