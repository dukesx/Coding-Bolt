import  { useSession, getSession, signOut } from 'next-auth/client';
import { useQuery, gql } from '@apollo/client';
import {
  initializeApollo,
  addApolloState,
  startServer,
} from 'lib/apolloClient';
import type {NextPageContext} from "next/types"

const getUsersQuery = gql`
  query MyQuery {
    users {
      id
      name
    }
  }
`;

interface Data 
{
  id: String,
  name: String,
  email_verified: String
  created_at: Date
}

const User = (props: Object) => {
  const { data, refetch, updateQuery } = useQuery(getUsersQuery);
  return (
    <>
      {data.users.map((mapped: Data) => (
        <>
          <p>{mapped.id}</p>
          <p>{mapped.name}</p>
          <p>
            {mapped.email_verified ? mapped.email_verified : 'login to see'}
          </p>
          <p>{mapped.created_at ? mapped.created_at : 'login to see'}</p>
        </>
      ))}
      <button onClick={():Promise<void> => signOut()}>Sign out</button>
    </>
  );
};

export default User;

export const getServerSideProps = async (ctx:NextPageContext) => {
  const session1 = await getSession(ctx);
  startServer(session1);
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: getUsersQuery,
  });
  return addApolloState(apolloClient, {
    props: {
      session: session1,
    },
  });
};
