import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface SelectionProps extends FlexibleContentProps {
  selectionTitle?: string
  selectionText?: string
  selectionBackgroundColor?: string
  selectionOptions?: {
    optionCards?: [
      {
        optionOne?: {
          title?: string
          text?: string
          link?: any
          image?: any
        }
      },
      {
        optionTwo?: {
          title?: string
          text?: string
          link?: any
          image?: any
        }
      },
      {
        optionImage?: any
      }
    ]
  }
}

const Selection: React.FC<SelectionProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>SELECTION</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default Selection

export const fragment = graphql`
  fragment Selection on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Selection {
      fieldGroupName
      selectionTitle
      selectionText
      selectionBackgroundColor
      selectionOptions {
        optionCards {
          optionOne {
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
          optionTwo {
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
          optionImage {
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
  }

  fragment contactSelection on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
    ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Selection {
      fieldGroupName
      selectionTitle
      selectionText
      selectionBackgroundColor
      selectionOptions {
        optionCards {
          optionOne {
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
          optionTwo {
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
          optionImage {
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
  }
`
