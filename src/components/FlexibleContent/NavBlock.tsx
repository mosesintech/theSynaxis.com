import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface NavBlockProps extends FlexibleContentProps {
  navBlockTitle?: string
  navBlockText?: string
  navBlockBackgroundColor?: string
  navBlockButton?: {
    target?: string
    title?: string
    url?: string
  }
  navBlockLinks?: []
}

const NavBlock: React.FC<NavBlockProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>NAVIGATION BLOCK</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default NavBlock

export const fragment = graphql`
  fragment NavBlock on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_NavBlock {
      fieldGroupName
      navBlockTitle
      navBlockText
      navBlockBackgroundColor
      navBlockButton {
        target
        title
        url
      }
      navBlockLinks {
        link {
          target
          title
          url
        }
      }
    }
  }
`
