// ** Core JWT Import
import useJwt from "@src/@core/auth/jwt/useJwt";
import { UseJwtType } from "../types";

const { jwt } = useJwt({}) as UseJwtType | any;

export default jwt;
