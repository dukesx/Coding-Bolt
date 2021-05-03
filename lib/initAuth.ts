import { init } from 'next-firebase-auth';
import Obj from '../coding-bolt.json';

const initAuth = () => {
  init({
    authPageURL: '/auth',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    // Required in most cases.
    firebaseAdminInitConfig: {
      credential: Obj,
    },
    firebaseClientInitConfig: {
      apiKey: 'AIzaSyDlBtYlp4pfEhiisgDT1U9PIZNf9qsC-mg', // required
      authDomain: 'coding-bolt.firebaseapp.com',
      databaseURL:
        'https://coding-bolt-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'coding-bolt',
    },
    cookies: {
      name: 'auth', // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [process.env.COOKIE_CURRENT_SECRET, process.env.COOKIE_OLD_SECRET],
      httpOnly: true,
      maxAge: 3 * 60 * 60 * 24 * 1000, // three days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
  });
};

export default initAuth;
