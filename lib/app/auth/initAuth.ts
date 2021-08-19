import { init } from "next-firebase-auth";

const initAuth = () => {
  init({
    authPageURL: "/login",
    appPageURL: "/",
    loginAPIEndpoint: "/api/login", // required
    logoutAPIEndpoint: "/api/logout", // required
    firebaseAuthEmulatorHost: null,
    firebaseAdminInitConfig: {
      credential: {
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
        clientEmail: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      },
      databaseURL: process.env.DATABASE_URL,
    },
    firebaseClientInitConfig: {
      apiKey: "AIzaSyDlBtYlp4pfEhiisgDT1U9PIZNf9qsC-mg",
      authDomain: "coding-bolt.firebaseapp.com",
      databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    },
    cookies: {
      name: process.env.FIREBASE_COOKIE_NAME, // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: "/",
      sameSite: "strict",
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
  });
};

export default initAuth;
