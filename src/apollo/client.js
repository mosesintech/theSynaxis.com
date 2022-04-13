import fetch from "cross-fetch"
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"

export const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.WPGRAPHQL_URL,
    fetch,
  }),
  cache: new InMemoryCache(),
})