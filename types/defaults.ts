import { Session } from "@supabase/gotrue-js";

// import { Auth, GoogleAuthProvider, UserCredential } from "firebase/auth";
export interface ImageProps {
  name: string;
  alt?: string;
  style?: any;
  width?: number;
  height?: number;
  className?: string;
  hash?: string;
  cover?: boolean;
  preload?: boolean;
  caption?: string;
  crop?: {
    x: number;
    y: number;
  };
  avatar?: boolean;
  fill?: boolean;
}

export interface NavProps {
  session?: Session;
}
