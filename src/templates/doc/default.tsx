import React from "react"
import { graphql } from "gatsby"

import Edges from "../../components/Layout/Edges"
import Layout from "../../components/Layout/Layout"

export default function DefaultDocTemplate(props: any) {
  const {
    data: {
      wpDoc: { title, content, uri, featuredImage, id },
      docs: { nodes: allDocs },
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

        <h2>Docs</h2>
        <pre>{JSON.stringify(allDocs, null, 2)}</pre>

        <h2>Archive Path</h2>
        <pre>{JSON.stringify(archivePath, null, 2)}</pre>
      </Edges>
    </Layout>
  )
}

export const DocSingleQuery = graphql`
  query Doc($id: String!) {
    wpDoc(id: { eq: $id }) {
      ...DocFragment
    }
    docs: allWpDoc {
      nodes {
        ...DocFragment
      }
    }
  }
`
