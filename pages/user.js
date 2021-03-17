import { useSession, getSession, signOut } from 'next-auth/client';
import { useQuery, gql } from "@apollo/client";
import { initializeApollo, addApolloState, token, startServer } from '../lib/apolloClient'


const getUsersQuery = gql`
query MyQuery {
    users {
    id
    name

  }
}
`;

const User = (props) => {
    // As this page uses Server Side Rendering, the `session` will be already
    // populated on render without needing to go through a loading stage.
    // This is possible because of the shared context configured in `_app.js` that
    // is used by `useSession()`.
    const { data, refetch, updateQuery } = useQuery(getUsersQuery);
    return (
        <>
            {data.users.map((mapped) =>
                <>
                    <p>{mapped.id}</p>
                    <p>{mapped.name}</p>
                    <p>{mapped.email_verified ? mapped.email_verified : "login to see"}</p>
                    <p>{mapped.created_at ? mapped.created_at : "login to see"}</p>
                </>)}
            <button onClick={signOut}>Sign out</button>

        </>
    );
};

export default User;


export const getServerSideProps = async (ctx) => {
    const session1 = await getSession(ctx);
    startServer(session1);
    const apolloClient = initializeApollo();
    await apolloClient.query({
        query: getUsersQuery
    })
    return addApolloState(apolloClient, {
        props:
        {
            session: session1,
        }
    });
}

