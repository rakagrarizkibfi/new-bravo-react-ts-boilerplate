import axios from "axios";

import { refreshToken } from "@src/services/keycloak/refreshToken";
import { store } from "@src/store/store";
import jwtDefaultConfig from "./jwtDefaultConfig";
import { userIdentity } from "@src/auth/helper";
import { useDispatch } from "react-redux";
import { handleLogin } from "@src/store/authentication";

export default class JwtService {
	// ** jwtConfig <= Will be used by this service
	jwtConfig = { ...jwtDefaultConfig };

	// ** For Refreshing Token
	isAlreadyFetchingAccessToken = false;

	// ** For Refreshing Token
	subscribers = [] as any;

	constructor(jwtOverrideConfig: object) {
		this.jwtConfig = { ...this.jwtConfig, ...jwtOverrideConfig };

		// ** Request Interceptor
		axios.interceptors.request.use(
			(config: any) => {
				// ** Get token from localStorage
				const accessToken = this.getToken();
				// ** If token is present add it to request's Authorization Header
				if (accessToken) {
					// ** eslint-disable-next-line no-param-reassign
					config.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
				}
				config.withCredentials = true;
				return config;
			},
			(error) => Promise.reject(error),
		);

		// // ** Add request/response interceptor
		axios.interceptors.response.use(
			(response) => response,
			(error) => {
				//** const { config, response: { status } } = error
				const { config, response } = error;
				const originalRequest = config;

				//** if (status === 401) {
				if ((response && response.status === 401) || error.code === "ERR_NETWORK") {
					if (!this.isAlreadyFetchingAccessToken) {
						this.isAlreadyFetchingAccessToken = true;
						this.refreshToken()
							.then((res) => {
								// this.isAlreadyFetchingAccessToken = false;
								// //** Update accessToken in localStorage
								this.setToken({ token: res.access_token, refreshToken: res.refresh_token });
								// this.setRefreshToken(res.refresh_token);
								// //this.setRefreshToken("update")
								// this.onAccessTokenFetched(res.access_token);
							})
							.catch((error) => {
								window.location.reload();
							});
					}

					const retryOriginalRequest = new Promise((resolve) => {
						this.addSubscriber((accessToken: string) => {
							originalRequest.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
							resolve(axios(originalRequest));
						});
					});
					return retryOriginalRequest;
				}
				return Promise.reject(error);
			},
		);
	}

	onAccessTokenFetched(accessToken: string) {
		this.subscribers = this.subscribers.filter((callback: any) => callback(accessToken));
	}

	addSubscriber(callback: any) {
		this.subscribers.push(callback);
	}

	getToken(): string | null {
		const { accessToken } = userIdentity();
		//return localStorage.getItem(this.jwtConfig.storageTokenKeyName)
		return accessToken;
	}

	getRefreshToken() {
		const { refreshToken } = userIdentity();
		//return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName)
		return refreshToken;
	}

	setToken(value: any) {
		//localStorage.setItem(this.jwtConfig.storageTokenKeyName, value);
		store.dispatch(
			handleLogin({
				token: value.token,
				refreshToken: value.refreshToken,
			} as any),
		);
	}

	setRefreshToken(value: string) {
		localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName, value);
	}

	login(...args: any) {
		return axios.post(this.jwtConfig.loginEndpoint, ...args);
	}

	register(...args: any) {
		return axios.post(this.jwtConfig.registerEndpoint, ...args);
	}

	async refreshToken() {
		console.log("refresh");
		const tokenResponse = await refreshToken();
		return tokenResponse;
	}
}
