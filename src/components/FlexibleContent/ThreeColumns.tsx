import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface ThreeColumnsProps extends FlexibleContentProps {
  threeColumnsTitle?: string
  threeColumnsText?: string
  threeColumnsBackgroundColor?: string
  threeColumnsButton?: {
    target?: string
    title?: string
    url?: string
  }
  columns?: [
    {
      title?: string
      text?: string
      link?: {
        target?: string
        title?: string
        url?: string
      }
      image?: {}
    },
    {
      title?: string
      text?: string
      link?: {
        target?: string
        title?: string
        url?: string
      }
      image?: {}
    },
    {
      title?: string
      text?: string
      link?: {
        target?: string
        title?: string
        url?: string
      }
      image?: {}
    }
  ]
}

const ThreeColumns: React.FC<ThreeColumnsProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>THREE COLUMNS</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default ThreeColumns

export const fragment = graphql`
  fragment ThreeColumns on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_ThreeColumns {
      fieldGroupName
      threeColumnsTitle
      threeColumnsText
      threeColumnsBackgroundColor
      threeColumnsButton {
        target
        title
        url
      }
      columns {
        title
        text
        link {
          target
          title
          url
        }
        image {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }

  fragment contactThreeColumns on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
    ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_ThreeColumns {
      fieldGroupName
      threeColumnsTitle
      threeColumnsText
      threeColumnsBackgroundColor
      threeColumnsButton {
        target
        title
        url
      }
      columns {
        title
        text
        link {
          target
          title
          url
        }
        image {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
