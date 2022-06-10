import React from "react"
import { graphql } from "gatsby"
import Parser from "html-react-parser"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"
import Button from "../../components/Button"

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
  const { textAreaTitle, textAreaText, textArea, textAreaButton } = props
  return (
    <>
      <Edges size="lg">
        <h1>TEXT AREA</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
        <div className="bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden">
              <div className="flex flex-col relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="hidden md:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
                <div className="mx-auto text-base max-w-prose md:grid md:grid-cols-2 md:gap-8 md:max-w-none">
                  <div>
                    {textAreaTitle && (
                      <h2
                        className="text-base text-indigo-600 font-semibold tracking-wide uppercase"
                        children={textAreaTitle}
                      />
                    )}
                  </div>
                </div>
                {textArea &&
                  textArea.map((item: { title: string; text: string }) => {
                    return (
                      <div>
                        {item.title && (
                          <h3
                            className="text-base text-indigo-600 font-semibold tracking-wide capitalize"
                            children={item.title}
                          />
                        )}

                        <div>{item.text && Parser(item.text)}</div>
                      </div>
                    )
                  })}
                <div className="mt-8 md:grid md:grid-cols-2 md:gap-8">
                  <div className="relative md:row-start-1 md:col-start-2">
                    <svg
                      className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
                      width={404}
                      height={384}
                      fill="none"
                      viewBox="0 0 404 384"
                      aria-hidden="true"
                    >
                      <defs>
                        <pattern
                          id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            x={0}
                            y={0}
                            width={4}
                            height={4}
                            className="text-gray-200"
                            fill="currentColor"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width={404}
                        height={384}
                        fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                      />
                    </svg>
                  </div>
                  <div className="mt-8 md:mt-0">
                    {textAreaButton && (
                      <div className="mt-6">
                        <Button
                          link={textAreaButton.url}
                          children={textAreaButton.title}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Edges>
    </>
  )
}

export default TextArea

export const fragment = graphql`
  fragment TextArea on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_TextArea {
      fieldGroupName
      textAreaTitle
      textAreaText
      textAreaBackgroundColor
      textAreaButton {
        target
        title
        url
      }
      textArea {
        title
        text
      }
    }
  }

  fragment contactTextArea on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
    ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_TextArea {
      fieldGroupName
      textAreaTitle
      textAreaText
      textAreaBackgroundColor
      textAreaButton {
        target
        title
        url
      }
      textArea {
        title
        text
      }
    }
  }
`
