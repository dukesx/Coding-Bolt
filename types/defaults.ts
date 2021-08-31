import { Auth, GoogleAuthProvider, UserCredential } from "firebase/auth";

export interface ImageProps {
  name: string;
  alt?: string;
  style?: object;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export interface NavProps {
  loginOptions: Array<GoogleAuthProvider>;
  auth: Auth;
}
