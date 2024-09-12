import { render, screen } from "@testing-library/react";
import React from "react";
import BfiLoader from ".";

describe("<BfiLoader/>", () => {
	beforeEach(() => {
		render(<BfiLoader />);
	});

	it("should render BFI logo on the page", () => {
		const logo = screen.getByAltText(/logo/i);
		expect(logo).toBeInTheDocument();
	});

	it("should render Spinner Loading text on the page", () => {
		const loadingText = screen.getByText(/Loading.../i);
		expect(loadingText).toBeInTheDocument();
	});
});
