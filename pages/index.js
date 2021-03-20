import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR
} from 'next-firebase-auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import SigninWithGoogle from 'components/loginHandlers/google';
import firebase from 'firebase';
import { useEffect, useState } from 'react';
import { Modal } from 'antd';

let firebaseui;
const config = {
    apiKey: 'AIzaSyAeue-AsYu76MMQlTOM-KlbYBlusW9c1FM',
    authDomain: 'myproject-1234.firebaseapp.com'
    // ...
};

// Configure FirebaseUI.

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const Abc = (props) => {
    const AuthUser = useAuthUser();
    const [modal, setModal] = useState(false);
    useEffect(() => {
        if (firebase.apps.length) {
            var firebaseui = require('firebaseui');

            var ui =
                firebaseui.auth.AuthUI.getInstance() ||
                new firebaseui.auth.AuthUI(firebase.auth());
            // The start method will wait until the DOM is loaded.
            const uiConfig = {
                // Popup signin flow rather than redirect flow.
                signInFlow: 'popup',
                // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
                // We will display Google and Facebook as auth providers.
                signInOptions: [
                    {
                        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,

                        // Google provider must be enabled in Firebase Console to support one-tap
                        // sign-up.
                        // Required to enable ID token credentials for this provider.
                        // This can be obtained from the Credentials page of the Google APIs
                        // console. Use the same OAuth client ID used for the Google provider
                        // configured with GCIP or Firebase Auth.
                        clientId:
                            '963385239831-0fkb07g5dpsb5n6kmfbv77o5e9120mk2.apps.googleusercontent.com'
                    }
                ],
                callbacks: {
                    // Avoid redirects after sign-in.
                    signInSuccessWithAuthResult: () => {
                        setModal(false);
                        return false;
                    }
                },
                credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
            };

            if (!AuthUser.id) {
                ui.start('#firebase-ui', uiConfig);

            }
            ui.disableAutoSignIn();
        }
    });
    return (
        <>
            <p>Your email is {AuthUser.email ? AuthUser.email : 'unknown'}.</p>
            <p>
                <button onClick={AuthUser.signOut}>SignOut</button>
            </p>
            {/* <StyledFirebaseAuth Callback={ui => Object.assign(uiConfig, {
                credentialHelper: ui.auth.CredentialHelper.GOOGLE_YOLO
            })} uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}

            <div id="firebase-ui" style={{ visibility: "hidden" }} />
        </>
    );
};

export default withAuthUser()(Abc);

export const getServerSideProps = withAuthUserTokenSSR()();
