import React from "react"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface TextImageProps extends FlexibleContentProps {
  textImageTitle?: string
  textImageText?: string
  textImagePosition?: string
  textImageBackgroundColor?: string
  textImageButton?: {
    target?: string
    title?: string
    url?: string
  }
  textImage?: {}
}

const TextImage: React.FC<TextImageProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>TEXT IMAGE</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

// Tailwind Component: Content: Two columns with image; for left/right image options

export default TextImage
