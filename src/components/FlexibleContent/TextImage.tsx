import React from "react"

import { FlexibleContentProps } from "../../interfaces"

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
      <h1>TEXT IMAGE</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default TextImage
