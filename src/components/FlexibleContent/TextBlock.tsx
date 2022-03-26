import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface TextBlockProps extends FlexibleContentProps {
  textBlockTitle?: string
  textBlockText?: string
  textBlockLocation?: string
  textBlockBackgroundColor?: string
  textBlockButton?: {
    target?: string
    title?: string
    url?: string
  }
}

const TextBlock: React.FC<TextBlockProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>TEXT BLOCK</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default TextBlock

export const fragment = graphql`
  fragment TextBlock on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_TextBlock {
      fieldGroupName
      textBlockTitle
      textBlockText
      textBlockLocation
      textBlockBackgroundColor
      textBlockButton {
        target
        title
        url
      }
    }
  }

  fragment contactTextBlock on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
    ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_TextBlock {
      fieldGroupName
      textBlockTitle
      textBlockText
      textBlockLocation
      textBlockBackgroundColor
      textBlockButton {
        target
        title
        url
      }
    }
  }
`
