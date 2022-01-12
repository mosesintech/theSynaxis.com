import React from "react"

import { FlexibleContentProps } from "../../interfaces"

export interface TextBlockProps extends FlexibleContentProps {
  textBlockTitle?: string;
  textBlockText?: string;
  textBlockLocation?: string;
  textBlockBackgroundColor?: string;
  textBlockButton?: {
    target?: string;
    title?: string;
    url?: string;
  };
}

const TextBlock: React.FC<TextBlockProps> = (props) => {
  return (
    <>
      <h1>TEXT BLOCK</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default TextBlock
