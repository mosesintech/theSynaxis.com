import React from "react"

import { FlexibleContentProps } from "../../interfaces"

export interface CompareProductsProps extends FlexibleContentProps {
  compareProductsTitle?: string
  compareProductsBackgroundColor?: string
  switchTitle?: string
  switchText?: string
  switchBackgroundColor?: string
  switchOptions?: []
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

const CompareProducts: React.FC<CompareProductsProps> = props => {
  return (
    <>
      <h1>COMPARE PRODUCTS</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default CompareProducts
