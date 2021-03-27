import Wrapper from 'components/global/wrapper';
import { withAuthUserTokenSSR } from 'next-firebase-auth';

const Abc = (props: any) => {
  return (
    <Wrapper token={props.token}>
      <p>Hello World</p>
    </Wrapper>
  );
};

export default Abc;

export const getServerSideProps = withAuthUserTokenSSR()(
  async ({ AuthUser: AuthUser }) => {
    const token = await AuthUser.getIdToken();
    console.log(token);
    return {
      props: {
        token: token,
      },
    };
  }
);
