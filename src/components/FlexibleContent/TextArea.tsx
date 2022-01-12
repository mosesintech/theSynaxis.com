import React from "react"

import { FlexibleContentProps } from "../../interfaces"

export interface TextAreaProps extends FlexibleContentProps {
  textAreaTitle?: string;
  textAreaText?: string;
  textAreaBackgroundColor?: string;
  textAreaButton?: {
    target?: string;
    title?: string;
    url?: string;
  };
  textArea?: [];
}

const TextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <>
      <h1>TEXT AREA</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default TextArea
