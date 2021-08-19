import { init } from "next-firebase-auth";

const initAuth = () => {
  init({
    authPageURL: "/",
    appPageURL: "/",
    loginAPIEndpoint: "/", // required
    logoutAPIEndpoint: "/", // required
    firebaseAuthEmulatorHost: null,
    firebaseAdminInitConfig: {
      credential: {
        projectId: "coding-bolt",
        clientEmail: "uthreviews@gmail.com",
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      },
      databaseURL: process.env.DATABASE_URL,
    },
    firebaseClientInitConfig: {
      apiKey: "AIzaSyDlBtYlp4pfEhiisgDT1U9PIZNf9qsC-mg",
      authDomain: "coding-bolt.firebaseapp.com",
      databaseURL:
        "https://coding-bolt-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "coding-bolt",
    },
    cookies: {
      name: "fbase_auth", // required
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
