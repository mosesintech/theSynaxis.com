import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface FormProps extends FlexibleContentProps {
  formTitle?: string
  formText?: string
  formBackgroundColor?: string
  formId?: string
}

const Form: React.FC<FormProps> = props => {
  const {
    formId,
    // formTitle,
    // formText,
    // formBackgroundColor
  } = props

  const useGravityData = () => {
    const { allWpGravityFormsForm } = useStaticQuery(
      graphql`
        query FormQuery {
          allWpGravityFormsForm {
            nodes {
              formId
              title
              description
              button {
                text
              }
              confirmations {
                isDefault
                message
              }
              formFields {
                nodes {
                  id
                  type
                  formId
                  ... on WpTextField {
                    id
                    label
                    cssClass
                    isRequired
                    description
                    placeholder
                  }
                  ... on WpEmailField {
                    id
                    label
                    cssClass
                    isRequired
                    description
                    placeholder
                  }
                  ... on WpTextAreaField {
                    id
                    label
                    cssClass
                    isRequired
                    description
                    placeholder
                  }
                }
              }
            }
          }
        }
      `
    )
    return { allWpGravityFormsForm }
  }

  const { allWpGravityFormsForm } = useGravityData()

  const form = allWpGravityFormsForm.nodes.find(
    (form: any) => Number(form.formId) === Number(formId)
  )

  return (
    <>
      <Edges size="lg">
        <h1>FORM</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default Form

export const fragment = graphql`
  fragment Form on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Form {
      fieldGroupName
      formTitle
      formText
      formBackgroundColor
      formId
    }
  }

  fragment contactForm on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
    ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Form {
      fieldGroupName
      formTitle
      formText
      formBackgroundColor
      formId
    }
  }
`
