import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';
import firebase from 'firebase';
import { useEffect, useState } from 'react';
import Wrapper from 'components/global/wrapper';

const config = {
  apiKey: 'AIzaSyAeue-AsYu76MMQlTOM-KlbYBlusW9c1FM',
  authDomain: 'myproject-1234.firebaseapp.com',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const Abc = (props) => {
  const AuthUser = useAuthUser();
  const [token, setToken] = useState(props.token ? props.token : null);
  const [modal, setModal] = useState(false);
  useEffect(async () => {
    if (firebase.apps.length) {
      var firebaseui = require('firebaseui');
      var ui =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(firebase.auth());
      const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
          {
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            clientId:
              '963385239831-0fkb07g5dpsb5n6kmfbv77o5e9120mk2.apps.googleusercontent.com',
          },
        ],
        callbacks: {
          signInSuccessWithAuthResult: (authResult, redirectUrl) => {
            console.log(authResult.user.uid);
            fetch('/api/flutter-auth/find', {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
                accept: 'application/json',
              },
              body: JSON.stringify({
                rand_id: authResult.user.uid,
              }),
            }).then((res) =>
              res.json().then((reso) => {
                if (reso.success) {
                } else {
                  fetch('/api/flutter-auth/create', {
                    method: 'POST',
                    headers: {
                      'content-type': 'application/json',
                      accept: 'application/json',
                    },
                    body: JSON.stringify({
                      auth: 'Google',
                      username: authResult.user.email.split('@')[0],
                      email: authResult.user.email,
                      rand_id: authResult.user.uid,
                      name: authResult.user.displayName,
                    }),
                  }).then((res) =>
                    res.json().then((reso) => {
                      setModal(false);
                      return false;
                    })
                  );
                }
              })
            );
          },
        },
        credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
      };

      if (!AuthUser.id) {
        ui.start('#firebase-ui', uiConfig);
        setToken(null);
      }
      ui.disableAutoSignIn();
      if (!token) {
        if (AuthUser) {
          var tokener = await AuthUser.getIdToken();
          setToken(tokener);
        }
      }
    }
  });
  return (
    <Wrapper>
      <p>Your email is {AuthUser.email ? AuthUser.email : 'unknown'}.</p>
      <p>
        <button onClick={AuthUser.signOut}>SignOut</button>
      </p>
      <p className="w-3/6 p-5 m-10 overflow-x-scroll h-60">{token}</p>
      <div id="firebase-ui" style={{ visibility: 'hidden' }} />
    </Wrapper>
  );
};

export default withAuthUser()(Abc);

export const getServerSideProps = withAuthUserTokenSSR()(
  async ({ AuthUser }) => {
    const token = await AuthUser.getIdToken();

    return {
      props: {
        token: token,
      },
    };
  }
);
