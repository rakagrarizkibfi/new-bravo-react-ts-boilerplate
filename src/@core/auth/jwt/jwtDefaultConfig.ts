// ** Auth Endpoints
export default {
	loginEndpoint: "/jwt/login",
	registerEndpoint: "/jwt/register",
	refreshEndpoint: "/jwt/refresh-token",
	logoutEndpoint: "/jwt/logout",

	// ** This will be prefixed in authorization header with token
	// ? e.g. Authorization: Bearer <token>
	tokenType: "Bearer",

	// ** Value of this property will be used as key to store JWT token in storage
	storageTokenKeyName: "accessToken",
	storageRefreshTokenKeyName: "refreshToken",
} as DefaultConfigType;

type DefaultConfigType = {
	loginEndpoint: string;
	registerEndpoint: string;
	refreshEndpoint: string;
	logoutEndpoint: string;
	tokenType: string;
	storageTokenKeyName: string;
	storageRefreshTokenKeyName: string;
};
