import React from "react"
import { graphql, PageProps } from "gatsby"

import { TemplatePageProps } from '../../interfaces'
import FlexibleContent from "../../components/FlexibleContent"

const ContactPageTemplate: React.FC<TemplatePageProps> = props => {
  const {
    data: {
      page: { title, uri, slug, template },
    },
  } = props

  return (
    <>
      {!!template && (
        <FlexibleContent
          modules={template.flexibleContentModules.contentModule}
          data={{
            title,
            uri,
            slug,
          }}
        />
      )}
    </>
  )
}

export default ContactPageTemplate

export const FlexibleContentQuery = graphql`
  query ContactPage($id: String!) {
    page: wpPage(id: { eq: $id }) {
      title
      slug
      uri
      template {
        ... on WpTemplate_Contact {
          ...ContactTemplateFragment
        }
      }
    }
  }
`
