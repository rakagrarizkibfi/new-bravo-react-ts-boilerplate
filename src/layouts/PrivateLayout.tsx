import { KeycloakProvider } from "@src/components/@bfi/Keycloak";
import { ReactNode } from "react";
import { handleLogin } from "@src/store/authentication";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const PrivateLayout = ({ children }: { children: ReactNode }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	return (
		<KeycloakProvider
			onSuccess={(data) => {
				dispatch(handleLogin(data as any));
			}}
			onError={(error) => {
				navigate("/error/sso");
			}}
		>
			{children}
		</KeycloakProvider>
	);
};

export default PrivateLayout;
