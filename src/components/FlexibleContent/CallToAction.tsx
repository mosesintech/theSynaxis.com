import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"
import CalltoAction from "../../components/CallToAction"

export interface CTAProps extends FlexibleContentProps {
  ctaTitle?: string
  ctaContent?: string
  ctaPhoneNumber?: string
  ctaBackgroundColor?: string
  ctaButton?: {
    target?: string
    title?: string
    url?: string
  }
}

const CallToAction: React.FC<CTAProps> = props => {
  const {
    ctaTitle,
    ctaContent,
    // ctaPhoneNumber,
    // ctaBackgroundColor,
    ctaButton,
  } = props

  return (
    <>
      <Edges size="lg">
        <CalltoAction title={ctaTitle} text={ctaContent} button={ctaButton} />
      </Edges>
    </>
  )
}

export default CallToAction

export const fragment = graphql`
  fragment CallToAction on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_CallToAction {
      fieldGroupName
      ctaTitle
      ctaContent
      ctaPhoneNumber
      ctaBackgroundColor
      ctaButton {
        target
        title
        url
      }
    }
  }

  fragment contactCallToAction on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
    ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_CallToAction {
      fieldGroupName
      ctaTitle
      ctaContent
      ctaPhoneNumber
      ctaBackgroundColor
      ctaButton {
        target
        title
        url
      }
    }
  }
`
