import { withAuthUser, AuthAction, useAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const provider = new firebase.auth.GoogleAuthProvider();
const MyLoader = () => <div>Loading...</div>;
const signInWithGoogle = async () => {
  try {
    await firebase.auth().signInWithPopup(provider);
  } catch (error) {
    console.log(error);
  }
};

const LoginPage = () => {
  const AuthUser = useAuthUser()
  return (
    <div>
      <p>Your email is {AuthUser.email ? AuthUser.email : "unknown"}.</p>
      <h2>My login page </h2>
      <button onClick={signInWithGoogle}>Sign in</button>
      <button onClick={AuthUser.signOut}>Sign Out</button>
      {/* {console.log(process.env.FIREBASE_PRIVATE_KEY)} */}
    </div>
  );
};

export default withAuthUser({
  // whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.RENDER,
  LoaderComponent: MyLoader
})(LoginPage);


export const getServerSideProps = withAuthUserTokenSSR()(async ({ AuthUser }) => {
  const token = await AuthUser.getIdToken()
  return {
    props: {
      token: token
    }
  }
})