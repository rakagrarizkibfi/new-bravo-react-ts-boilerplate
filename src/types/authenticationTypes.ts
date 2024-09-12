type AuthStateType = {
	userData: UserDataType;
	isAuthenticate: boolean;
	accessToken: string | null;
	refreshToken: string | null;
};
type UserKeycloakType = {
	sid: string;
	name: string;
	preferred_username: string;
	email: string;
	role: "admin" | "all";
	ability: object[];
};

type UserDataType = {
	id: string;
	fullName: string;
	nik: string;
	email: string;
	role: "admin" | "all";
	ability: object[];
};

export type { UserDataType, UserKeycloakType, AuthStateType };
