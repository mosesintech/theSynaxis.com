import { graphql } from "gatsby"

export const DocFragment = graphql`
  fragment DocFragment on WpDoc {
    id
    uri
    date
    title
    content
    excerpt
    featuredImage {
      node {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 90, layout: FULL_WIDTH)
          }
        }
      }
    }
    thumbnail: featuredImage {
      node {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(
              quality: 90
              layout: CONSTRAINED
              width: 280
              height: 200
            )
          }
        }
      }
    }
  }
`
