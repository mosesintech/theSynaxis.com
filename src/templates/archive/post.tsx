import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout/Layout"
import Edges from "../../components/Layout/Edges"

const PostArchive = (props: any) => {
  const {
    data: {
      page: { title },
      posts: { nodes: allPosts },
      categories: { nodes: allCategories },
    },
    pageContext: { postsPerPage, totalPages: numberOfPages, currentPage: page },
  } = props

  return (
    <>
      <Layout title={title}>
        <Edges size="lg">
          <h1>{title}</h1>
          <pre>{JSON.stringify(page, null, 2)}</pre>

          <h2>All Posts</h2>
          <pre>{JSON.stringify(allPosts, null, 2)}</pre>

          <h2>All Categories</h2>
          <pre>{JSON.stringify(allCategories, null, 2)}</pre>

          <h2>Posts Per Page</h2>
          <pre>{JSON.stringify(postsPerPage, null, 2)}</pre>

          <h2>Number of Pages</h2>
          <pre>{JSON.stringify(numberOfPages, null, 2)}</pre>
        </Edges>
      </Layout>
    </>
  )
}

export default PostArchive

export const pageQuery = graphql`
  query WordPressPostsArchive(
    $id: String!
    $postsPerPage: Int!
    $offset: Int!
  ) {
    page: wpPage(id: { eq: $id }) {
      title
      content
      uri
      template {
        ... on WpDefaultTemplate {
          templateName
        }
      }
    }

    posts: allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        ...PostFragment
      }
    }
    categories: allWpCategory {
      nodes {
        ...PostCategory
      }
    }
  }
`
