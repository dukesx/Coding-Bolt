import Wrapper from 'components/global/wrapper';
import {
  withAuthUserTokenSSR,
  useAuthUser,
  withAuthUser,
} from 'next-firebase-auth';
import { FunctionComponent } from 'react';

interface TokenProps {
  token?: String;
}
const Abc: FunctionComponent<TokenProps> = ({ token }) => {
  return (
    <Wrapper tokener={token}>
      <p>Hello World</p>
    </Wrapper>
  );
};

export default withAuthUser()(Abc);

export const getServerSideProps = withAuthUserTokenSSR()(
  async ({ AuthUser: AuthUser }) => {
    const token = await AuthUser.getIdToken();
    return {
      props: {
        token: token,
      },
    };
  }
);
