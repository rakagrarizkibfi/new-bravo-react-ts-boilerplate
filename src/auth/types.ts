type UseJwtType = {
	jwt: {
		jwtConfig: {
			loginEndpoint: string;
			registerEndpoint: string;
			refreshEndpoint: string;
			logoutEndpoint: string;
			tokenType: string;
			storageTokenKeyName: string;
			storageRefreshTokenKeyName: string;
		};
	};
};

type DefaultConfigType = {
	loginEndpoint: string;
	registerEndpoint: string;
	refreshEndpoint: string;
	logoutEndpoint: string;
	tokenType: string;
	storageTokenKeyName: string;
	storageRefreshTokenKeyName: string;
};

export type { UseJwtType, DefaultConfigType };
