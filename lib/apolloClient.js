import { useMemo } from "react";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { SubscriptionClient } from "subscriptions-transport-ws";
import {
  concatPagination,
  offsetLimitPagination,
} from "@apollo/client/utilities";
import merge from "deepmerge";
import isEqual from "lodash/isEqual";


export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient;

// function createApolloClient() {
//   const ssrMode = typeof window === "undefined";

//   let link;
//   if (ssrMode) {
//     link = new HttpLink({
//       uri: "https://hasura.physiothrive.com/v1/graphql",
//       credentials: "same-origin",
//       fetch,
//     });
//   } else {
//     const client = new SubscriptionClient(
//       "wss://hasura.physiothrive.com/v1/graphql",
//       {
//         reconnect: true,
//         connectionParams: {},
//       }
//     );
//     link = new WebSocketLink(client);
//   }

//   return new ApolloClient({
//     ssrMode,
//     link: new HttpLink({
//       uri: "https://hasura.physiothrive.com/v1/graphql",
//       credentials: "same-origin",
//       fetch,
//     }),
//     cache: new InMemoryCache({
//       typePolicies: {
//         Query: {
//           fields: {
//             publishings: offsetLimitPagination(),
//           },
//         },
//       },
//     }),
//   });
// }

var token = null;

function createApolloClient() {

  const ssrMode = typeof window === "undefined";

  let link;
  if (ssrMode) {
    link = new HttpLink({
      uri: "https://hasura.physiothrive.com/v1/graphql",
      credentials: "same-origin",
      fetch,
    });
  } else {
    const client = new SubscriptionClient(
      "wss://hasura.physiothrive.com/v1/graphql",
      {
        reconnect: true,
        connectionParams: {},
      }
    );
    link = new WebSocketLink(client);
  }

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: "https://hasura.physiothrive.com/v1/graphql",
      credentials: "include",
      headers: token ? {
        authorization: `Bearer ${token ? token.token : "public"}`,
      } : {
        "x-hasura-role": "public"
      }
      // Server URL (must be absolute)
    }),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });
  // return new ApolloClient({
  //   ssrMode: typeof window === "undefined",
  //   link: new HttpLink({
  //     uri: "https://hasura.physiothrive.com/v1/graphql",
  //     credentials: "include",
  //     headers: token ? {
  //       authorization: `Bearer ${token ? token.token : "public"}`,
  //     } : {
  //       "x-hasura-role": "public"
  //     }
  //   }),
  //   cache: new InMemoryCache(),
  //   connectToDevTools: true,
  // });
}


export const startServer = (session) => {
  token = session;
};


export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;

}

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps) {
  var state;
  if (pageProps) {
    state = pageProps[APOLLO_STATE_PROP_NAME];
  } else {
    pageProps = {};
    state = {};
  }

  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}


