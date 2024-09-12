// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

// ** UseJWT import to get config
import useJwt from "@src/auth/jwt/useJwt";
import { ABILITY } from "@src/constants/mockDataConstant";
import { AuthStateType, UserDataType, UserKeycloakType } from "@src/types/authenticationTypes";
import jwt_decode from "jwt-decode";

const config = useJwt.jwtConfig;

const initialUser = () => {
	const item = window.localStorage.getItem("userData");
	//** Parse stored json or if none return initialValue
	return item ? JSON.parse(item) : {};
};

const defaultUser = (token: string): UserDataType => {
	const userKeycloak = token ? (jwt_decode(token) as UserKeycloakType) : ({} as UserKeycloakType);
	return {
		id: userKeycloak.sid,
		fullName: userKeycloak.name,
		nik: userKeycloak.preferred_username,
		email: userKeycloak.email,
		role: "admin",
		ability: ABILITY,
	};
};

export const authSlice = createSlice({
	name: "authentication",
	initialState: {
		userData: initialUser(),
		accessToken: null,
		refreshToken: null,
		isAuthenticate: false,
	},
	reducers: {
		handleLogin: (state: AuthStateType, action: any) => {
			const userData = defaultUser(action.payload.token);
			state.userData = userData;
			state.isAuthenticate = true;
			state.accessToken = action.payload.token;
			state.refreshToken = action.payload.refreshToken;
		},
		handleLogout: (state: any) => {
			state.userData = {};
			state.isAuthenticate = false;
			state[config.storageTokenKeyName] = null;
			state[config.storageRefreshTokenKeyName] = null;
		},
	},
});

export const { handleLogin, handleLogout } = authSlice.actions;

export default authSlice.reducer;
