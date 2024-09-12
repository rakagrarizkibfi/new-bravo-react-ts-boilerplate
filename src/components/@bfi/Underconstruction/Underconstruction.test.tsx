import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Maintenance from "@src/pages/others/Maintenance";

describe("<Maintenance />", () => {
	it("Underconstruction page load", () => {
		render(
			<BrowserRouter>
				<Maintenance />
			</BrowserRouter>,
		);
		expect(screen.getByTestId("maintenance_page")).toBeInTheDocument();
	});

	it("Underconstruction on click button", () => {
		render(
			<BrowserRouter>
				<Maintenance />
			</BrowserRouter>,
		);
		const button = screen.getByText(/Back to Dashboard/i);
		fireEvent.click(button);
	});
});
