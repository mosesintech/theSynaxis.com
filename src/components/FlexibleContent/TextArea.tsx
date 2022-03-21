import React from "react"

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
