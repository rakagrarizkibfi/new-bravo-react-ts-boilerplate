// KeycloakProvider.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { KeycloakProvider, KeycloakContext } from "..";
import useKeycloak from "../hooks";
import { TKeycloakContext } from "../types";

jest.mock("./hooks", () => ({
	__esModule: true,
	default: jest.fn(),
}));

const mockedUseKeycloak = useKeycloak as jest.MockedFunction<typeof useKeycloak>;

describe("KeycloakProvider", () => {
	const onErrorMock = jest.fn();
	const onSuccessMock = jest.fn();

	const mockKeycloak = {
		tokenParsed: {
			preferred_username: "test_user",
		},
		logout: jest.fn(),
	};

	afterEach(() => {
		jest.clearAllMocks();
	});

	test("renders loading state", () => {
		mockedUseKeycloak.mockReturnValue({
			keycloak: null,
			isLoading: true,
			isAuthenticate: false,
			error: null,
		} as any);

		render(
			<KeycloakProvider
				onError={onErrorMock}
				onSuccess={onSuccessMock}
			>
				<div>Authenticated Content</div>
			</KeycloakProvider>,
		);

		expect(screen.getByText("Loading...")).toBeInTheDocument();
	});

	test("renders children when authenticated", () => {
		mockedUseKeycloak.mockReturnValue({
			keycloak: mockKeycloak,
			isLoading: false,
			isAuthenticate: true,
			error: null,
		} as any);

		render(
			<KeycloakProvider
				onError={onErrorMock}
				onSuccess={onSuccessMock}
			>
				<div>Authenticated Content</div>
			</KeycloakProvider>,
		);

		expect(screen.getByText("Authenticated Content")).toBeInTheDocument();
	});

	test("provides context value when authenticated", () => {
		mockedUseKeycloak.mockReturnValue({
			keycloak: mockKeycloak,
			isLoading: false,
			isAuthenticate: true,
			error: null,
		} as any);

		const TestComponent: React.FC = () => {
			const { keycloak, isAuthenticate, error }: any = React.useContext(
				KeycloakContext,
			) as TKeycloakContext;
			return (
				<div>
					<span>{keycloak?.tokenParsed.preferred_username}</span>
					<span>{isAuthenticate.toString()}</span>
					<span>{error?.message || "No Error"}</span>
				</div>
			);
		};

		render(
			<KeycloakProvider
				onError={onErrorMock}
				onSuccess={onSuccessMock}
			>
				<TestComponent />
			</KeycloakProvider>,
		);

		expect(screen.getByText("test_user")).toBeInTheDocument();
		expect(screen.getByText("true")).toBeInTheDocument();
		expect(screen.getByText("No Error")).toBeInTheDocument();
	});

	test("calls onError callback on error", () => {
		const error = new Error("Keycloak initialization failed");
		mockedUseKeycloak.mockReturnValue({
			keycloak: null,
			isLoading: false,
			isAuthenticate: false,
			error: error,
		} as any);

		render(
			<KeycloakProvider
				onError={onErrorMock}
				onSuccess={onSuccessMock}
			>
				<div>Authenticated Content</div>
			</KeycloakProvider>,
		);

		expect(onErrorMock).toHaveBeenCalledWith(error);
	});
});
