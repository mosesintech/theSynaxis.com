import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface TextAreaProps extends FlexibleContentProps {
  textAreaTitle?: string
  textAreaText?: string
  textAreaBackgroundColor?: string
  textAreaButton?: {
    target?: string
    title?: string
    url?: string
  }
  textArea?: []
}

const TextArea: React.FC<TextAreaProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>TEXT AREA</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default TextArea

export const fragment = graphql`
  fragment TextArea on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_TextArea {
      fieldGroupName
      textAreaTitle
      textAreaText
      textAreaBackgroundColor
      textAreaButton {
        target
        title
        url
      }
      textArea {
        title
        text
      }
    }
  }

  fragment contactTextArea on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
    ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_TextArea {
      fieldGroupName
      textAreaTitle
      textAreaText
      textAreaBackgroundColor
      textAreaButton {
        target
        title
        url
      }
      textArea {
        title
        text
      }
    }
  }
`
