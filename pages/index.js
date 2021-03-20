import { useSession, getSession, providers, signIn } from 'next-auth/client';
import { useQuery, gql } from "@apollo/client";
import { initializeApollo, addApolloState, token, startServer } from '../lib/apolloClient'
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';
const getUsersQuery = gql`
query MyQuery {
    sample {
    id
  }
}
`;


const Abc = (props) => {
    const AuthUser = useAuthUser();
    // As this page uses Server Side Rendering, the `session` will be already
    // populated on render without needing to go through a loading stage.
    // This is possible because of the shared context configured in `_app.js` that
    // is used by `useSession()`.
    const [session, loading] = useSession();
    // const { data: userData, error } = useQuery(getUsersQuery);



    return (
        <>
            {/* {Object.values(props.pro).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => signIn(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}

            <div style={{
                position: "relative",
                paddingTop: "125%"
            }}><iframe src="https://iframe.mediadelivery.net/embed/1448/e1e9fbb7-0f29-4197-bbf5-8bc92bde438c?autoplay=true" loading="lazy" style={{
                border: "none", position: "absolute", top: 0, height: "600px", width: "600px"
            }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe></div> */}
<p>Your email is {AuthUser.email ? AuthUser.email : "unknown"}.</p>
        </>
    );
};

export default withAuthUser()(Abc)


// export async function getServerSideProps(ctx) {
//     const session1 = await getSession(ctx);
//     startServer(session1);
//     // const apolloClient = initializeApollo();

//     // await apolloClient.query({
//     //     query: getUsersQuery
//     // })

//     // return addApolloState(apolloClient, {
//     //     props: {
//     //         session: session1,
//     //         pro: await providers()
//     //     }
//     // });
//     return {
//         props: {
//             session: await getSession(ctx),
//             pro: await providers()
//         }
//     }
// }

export const getServerSideProps = withAuthUserTokenSSR()()

