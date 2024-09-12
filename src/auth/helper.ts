import { store } from "@src/store/store";
import { AuthStateType } from "@src/types/authenticationTypes";

const userIdentity = (): AuthStateType => {
	const { auth } = store.getState();
	return auth;
};

export { userIdentity };
