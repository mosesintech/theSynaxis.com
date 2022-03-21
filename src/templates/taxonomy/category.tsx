import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout/Layout"
import Edges from "../../components/Layout/Edges"

const Category = (props: any) => {
  const {
    data: { wpCategory, posts, categories },
    pageContext: { postsPerPage, totalPages: numberOfPages, currentPage: page },
  } = props

  return (
    <Layout title={wpCategory.name}>
      <Edges size="lg">
        <h1>{wpCategory.name}</h1>
        <pre>{JSON.stringify(wpCategory, null, 2)}</pre>

        <h2>Posts</h2>
        <pre>{JSON.stringify(posts, null, 2)}</pre>

        <h2>Categories</h2>
        <pre>{JSON.stringify(categories, null, 2)}</pre>

        <h2>Posts per Page</h2>
        <pre>{JSON.stringify(postsPerPage, null, 2)}</pre>

        <h2>Number of Pages</h2>
        <pre>{JSON.stringify(numberOfPages, null, 2)}</pre>

        <h2>Page</h2>
        <pre>{JSON.stringify(page, null, 2)}</pre>
      </Edges>
    </Layout>
  )
}

export default Category

export const categoryQuery = graphql`
  query Category($id: String!, $postsPerPage: Int!, $offset: Int!) {
    wpCategory(id: { eq: $id }) {
      description
      name
      id
      uri
    }

    categories: allWpCategory {
      nodes {
        ...PostCategory
      }
    }

    posts: allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
      filter: { categories: { nodes: { elemMatch: { id: { eq: $id } } } } }
    ) {
      nodes {
        ...PostFragment
      }
    }
  }
`
