import React from "react"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface FaqProps extends FlexibleContentProps {
  FaqTitle?: string
  FaqText?: string
  FaqBackgroundColor?: string
  FaqButton?: {
    target?: string
    title?: string
    url?: string
  }
  Faq?: []
}

const Faq: React.FC<FaqProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>FAQ</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default Faq
