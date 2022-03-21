import React from "react"

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
