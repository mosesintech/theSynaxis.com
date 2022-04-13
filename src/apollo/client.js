import fetch from "cross-fetch"
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"

const graphqlHost = process.env.REACT_APP_WPGRAPHQL_URL

export const client = new ApolloClient({
  link: new HttpLink({
    uri: graphqlHost,
    fetch,
  }),
  cache: new InMemoryCache(),
})
