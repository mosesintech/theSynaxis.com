import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import { FlexibleContentProps } from "../../interfaces"

interface ModuleProps extends FlexibleContentProps {
  formId?: string;
  formTitle?: string;
  formText?: string;
  formBackgroundColor?: string;
}


const Form: React.FC<ModuleProps> = (props) => {
  const { formId, formTitle, formText, formBackgroundColor } = props;

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

  const { allWpGravityFormsForm } = useGravityData();

  const form = allWpGravityFormsForm.nodes.find((form:any) => Number(form.formId) === Number(formId));

  return (
    <>
      <h1>FORM</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </>
  )
}

export default Form
