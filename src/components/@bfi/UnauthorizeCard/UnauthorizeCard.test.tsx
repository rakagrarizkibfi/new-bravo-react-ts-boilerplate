import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import UnauthorizeCard from ".";

describe("<UnauthorizeCard />", () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<UnauthorizeCard />
			</BrowserRouter>,
		);
	});

	it("UnauthorizeCard page load", () => {
		expect(screen.getByTestId("unauthorize_card")).toBeInTheDocument();
	});

	it("UnauthorizeCard on click button", () => {
		const button = screen.getByText(/Back to Dashboard/i);
		fireEvent.click(button);
	});
});
