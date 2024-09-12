import { render } from "@testing-library/react";
import BfiInitialName from "../index";
import React from "react";

describe("<BfiInitialName/>", () => {
	it("renders initial name correctly, on the page", () => {
		const { getByText } = render(<BfiInitialName userName={"MAMAH MUDA MUDA"} />);
		const initialName = getByText(/MM/i);
		expect(initialName).toBeInTheDocument();
	});

	it("renders initial name correctly, on the page", () => {
		const { getByText } = render(<BfiInitialName userName={""} />);
		const initialName = getByText(/XX/i);
		expect(initialName).toBeInTheDocument();
	});
});
