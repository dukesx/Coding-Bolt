import { withAuthUser, AuthAction, useAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth';


const MyLoader = () => <div>Loading...</div>;



const LoginPage = () => {
  const AuthUser = useAuthUser()
  return (
    <div>
      <p>Your email is {AuthUser.email ? AuthUser.email : "unknown"}.</p>
      <h2>My login page </h2>
    </div>
  );
};

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
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