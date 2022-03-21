import React from "react"
import { graphql } from "gatsby"

import Edges from "../../components/Layout/Edges"
import Layout from "../../components/Layout/Layout"

export default function DefaultPostTemplate(props: any) {
  const {
    data: {
      wpPost: { title, content, uri, featuredImage, categories, id },
      posts: { nodes: allPosts },
    },
    pageContext: { archivePath },
  } = props

  return (
    <Layout title={title}>
      <Edges size="lg">
        <h1>
          {title} | {id}
        </h1>
        <pre>{JSON.stringify(content, null, 2)}</pre>
        <pre>{JSON.stringify(uri, null, 2)}</pre>
        <pre>{JSON.stringify(featuredImage, null, 2)}</pre>
        <pre>{JSON.stringify(categories, null, 2)}</pre>

        <h2>Posts</h2>
        <pre>{JSON.stringify(allPosts, null, 2)}</pre>

        <h2>Archive Path</h2>
        <pre>{JSON.stringify(archivePath, null, 2)}</pre>
      </Edges>
    </Layout>
  )
}

export const PostSingleQuery = graphql`
  query Post($id: String!) {
    wpPost(id: { eq: $id }) {
      ...PostFragment
    }
    posts: allWpPost {
      nodes {
        ...PostFragment
      }
    }
  }
`
