import { init } from 'next-firebase-auth';
import Obj from "../wowwrites-auth-firebase-adminsdk-geofr-75a09bf8b8.json";
var key = process.env.FIREBASE_PRIVATE_KEY;

const initAuth = () => {
    init({
        authPageURL: '/auth',
        appPageURL: '/',
        loginAPIEndpoint: '/api/login', // required
        logoutAPIEndpoint: '/api/logout', // required
        // Required in most cases.
        firebaseAdminInitConfig: {
            credential: Obj,
            databaseURL: 'https://wowwrites-auth-default-rtdb.firebaseio.com/',
        },
        firebaseClientInitConfig: {
            apiKey: 'AIzaSyCOksrE5_qNHpidHdEVVezZs2g6fKkjcIA', // required
            authDomain: 'wowwrites-auth.firebaseapp.com',
            databaseURL: 'https://wowwrites-auth-default-rtdb.firebaseio.com',
            projectId: 'wowwrites-auth',
        },
        cookies: {
            name: 'auth', // required
            // Keys are required unless you set `signed` to `false`.
            // The keys cannot be accessible on the client side.
            keys: [
                process.env.COOKIE_CURRENT_SECRET,
                process.env.COOKIE_OLD_SECRET,
            ],
            httpOnly: true,
            maxAge: 3 * 60 * 60 * 24 * 1000, // three days
            overwrite: true,
            path: '/',
            sameSite: 'strict',
            secure: true, // set this to false in local (non-HTTPS) development
            signed: true,
        },
    })
}

export default initAuth