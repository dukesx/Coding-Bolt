// import { Auth, GoogleAuthProvider, UserCredential } from "firebase/auth";
export interface ImageProps {
  name: string;
  alt?: string;
  style?: object;
  width?: number;
  height?: number;
  className?: string;
  hash?: string;
  preload?: boolean;
}

export interface NavProps {
  // loginOptions?: Array<GoogleAuthProvider>;
  // auth?: Auth;
  session?: any;
  loading?: boolean;
  signIn?: any;
  signOut?: any;
}

export interface ArticleCardProps {
  title: string;
  description: string;
  cover: {
    width: number;
    height: number;
    hash: string;
    alt: string;
    name: string;
    preload?: boolean;
  };
}
