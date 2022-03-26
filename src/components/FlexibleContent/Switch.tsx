import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface SwitchProps extends FlexibleContentProps {
  switchTitle?: string
  switchText?: string
  switchBackgroundColor?: string
  switchOptions?: []
}

const Switch: React.FC<SwitchProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>SWITCH</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default Switch

export const fragment = graphql`
  fragment Switch on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Switch {
      fieldGroupName
      switchTitle
      switchText
      switchBackgroundColor
      switchOptions {
        title
        text
        link {
          target
          title
          url
        }
      }
    }
  }

  fragment contactSwitch on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
    ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Switch {
      fieldGroupName
      switchTitle
      switchText
      switchBackgroundColor
      switchOptions {
        title
        text
        link {
          target
          title
          url
        }
      }
    }
  }
`
