import useDarkMode from "use-dark-mode";
import { Button, Layout } from "antd";
import firebase from "firebase/app";
import { useEffect, useState } from "react";
import Nav from "./nav";
//

if (firebase.apps.length < 1) {
  firebase.initializeApp({
    apiKey: "AIzaSyDlBtYlp4pfEhiisgDT1U9PIZNf9qsC-mg",
    authDomain: "coding-bolt.firebaseapp.com",
  });
}

const { Content } = Layout;

const Wrapper = (props: any) => {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  var user = firebase.auth().currentUser;

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    var firebaseui = require("firebaseui");
    var uiConfig = {
      signInSuccessUrl: "/",
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          return false;
        },
      },
      signInFlow: "popup",
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          clientId:
            "1036440562165-j7g06r27357plblbsbdosmf6k5gh6drv.apps.googleusercontent.com",
        },
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
      ],
      credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
    };

    var ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());
    ui.disableAutoSignIn();

    if (user) {
      // Initialize the FirebaseUI Widget using Firebase.
      if (ui) {
        ui.delete();
      }
    } else {
      ui.start("#firebaseui-auth", uiConfig);
    }
  }, [user]);
  return (
    <Layout className="bg-gray-50 dark:bg-transparent">
      <Nav />
      <Layout className="mt-5 bg-gray-50 dark:bg-transparent">
        <Content>
          {props.children}

          <div>
            <h1>My App</h1>
            <p>
              Welcome{" "}
              {firebase.auth().currentUser &&
                firebase.auth().currentUser.displayName}
              ! You are now signed-in!
            </p>
            <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Wrapper;
