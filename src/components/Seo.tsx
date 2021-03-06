import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

interface SeoProps {
  title?: string
  description?: string
}

const Seo: React.FC<SeoProps> = props => {
  const { title, description } = props

  return (
    <StaticQuery
      query={graphql`
        query SEOQuery {
          site {
            siteMetadata {
              defaultTitle: title
              defaultDescription: description
            }
          }
        }
      `}
      render={({
        site: {
          siteMetadata: { defaultTitle, titleTemplate, defaultDescription },
        },
      }) => {
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
        }

        return (
          <>
            <Helmet
              title={`The Synaxis | ${seo.title}`}
              titleTemplate={titleTemplate}
            >
              <meta name="description" content={seo.description} />
            </Helmet>
          </>
        )
      }}
    />
  )
}

export default Seo
