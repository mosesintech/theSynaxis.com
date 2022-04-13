import fetch from "cross-fetch"
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"

const graphqlHost =
  process.env.NODE_ENV === "production"
    ? `${process.env.GATSBY_WPGRAPHQL_URL}`
    : `${process.env.WPGRAPHQL_URL}`

export const link = createHttpLink({
  uri: graphqlHost,
  fetch,
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})
