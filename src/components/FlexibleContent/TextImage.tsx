import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import Parser from "html-react-parser"
import sanitizeHtml from "sanitize-html"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"
import Button from "../../components/Button"

export interface TextImageProps extends FlexibleContentProps {
  textImageTitle?: string
  textImageSubtitle?: string
  textImageText?: string
  textImagePosition?: string
  textImageBackgroundColor?: string
  textImageButton?: {
    target?: string
    title?: string
    url?: string
  }
  textImage?: {
    localFile?: IGatsbyImageData
    altText?: string
  }
  altImage?: {
    localFile?: IGatsbyImageData
    altText?: string
  }
}

const TextImage: React.FC<TextImageProps> = props => {
  const {
    textImageTitle,
    textImageSubtitle,
    textImageText,
    textImagePosition,
    textImageButton,
    textImage,
    altImage,
  } = props

  const image = textImage?.localFile && getImage(textImage.localFile)
  const alternativeImage = altImage?.localFile && getImage(altImage.localFile)
  const aboveTitle = textImagePosition === "Above Title"
  const belowTitle = textImagePosition === "Below Title"
  const belowText = textImagePosition === "Below Text"

  return (
    <>
      <Edges size="lg">
        {/* 
            Ternary checks Left of Text first, then Right of Text.
            If neither, then returns default layout.
        */}
        {textImagePosition === "Left of Text" ? (
          <>
            <div className="bg-white overflow-hidden">
              <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="hidden md:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
                <div className="mx-auto text-base max-w-prose md:grid md:grid-cols-2 md:gap-8 md:max-w-none">
                  <div>
                    {textImageTitle && (
                      <h2
                        className="text-base text-indigo-600 font-semibold tracking-wide uppercase"
                        children={textImageTitle}
                      />
                    )}

                    {textImageSubtitle && (
                      <h3
                        className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                        children={textImageSubtitle}
                      />
                    )}
                  </div>
                </div>

                <div className="mt-8 md:grid md:grid-cols-2 md:gap-8">
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
                  <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                    <figure>
                      <div className="aspect-w-12 aspect-h-7 md:aspect-none">
                        {image && (
                          <GatsbyImage
                            image={image}
                            alt={textImage?.altText || ""}
                            className="rounded-lg shadow-lg object-cover object-center"
                          />
                        )}
                      </div>
                    </figure>
                  </div>
                  <div className="relative md:row-start-1 md:col-start-2">
                    <div className="mt-8 md:mt-0">
                      <div>
                        {textImageText && Parser(sanitizeHtml(textImageText))}
                      </div>

                      {textImageButton && (
                        <div className="mt-6">
                          <Button
                            link={textImageButton.url}
                            children={textImageButton.title}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : textImagePosition === "Right of Text" ? (
          <>
            <div className="bg-white overflow-hidden">
              <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="hidden md:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
                <div className="mx-auto text-base max-w-prose md:grid md:grid-cols-2 md:gap-8 md:max-w-none">
                  <div>
                    {textImageTitle && (
                      <h2
                        className="text-base text-indigo-600 font-semibold tracking-wide uppercase"
                        children={textImageTitle}
                      />
                    )}

                    {textImageSubtitle && (
                      <h3
                        className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                        children={textImageSubtitle}
                      />
                    )}
                  </div>
                </div>

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
                    <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                      <figure>
                        <div className="aspect-w-12 aspect-h-7 md:aspect-none">
                          {image && (
                            <GatsbyImage
                              image={image}
                              alt={textImage?.altText || ""}
                              className="rounded-lg shadow-lg object-cover object-center"
                            />
                          )}
                        </div>
                      </figure>
                    </div>
                  </div>
                  <div className="mt-8 md:mt-0">
                    <div>
                      {textImageText && Parser(sanitizeHtml(textImageText))}
                    </div>

                    {textImageButton && (
                      <div className="mt-6">
                        <Button
                          link={textImageButton.url}
                          children={textImageButton.title}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Above Title, Below Title, Below Text options */}
            <div className="relative py-16 bg-white overflow-hidden">
              <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                <div
                  className="relative h-full text-lg max-w-prose mx-auto"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute top-12 left-full transform translate-x-32"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                  >
                    <defs>
                      <pattern
                        id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
                      fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                    />
                  </svg>
                  <svg
                    className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                  >
                    <defs>
                      <pattern
                        id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
                      fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                    />
                  </svg>
                  <svg
                    className="absolute bottom-12 left-full transform translate-x-32"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                  >
                    <defs>
                      <pattern
                        id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
                      fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="text-lg max-w-prose mx-auto">
                  {aboveTitle && (
                    <>
                      <figure>
                        {alternativeImage && (
                          <GatsbyImage
                            image={alternativeImage}
                            alt={altImage?.altText || ""}
                            className="w-full rounded-lg"
                          />
                        )}
                      </figure>
                    </>
                  )}

                  {textImageTitle && (
                    <h2
                      className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-indigo-600 sm:text-4xl"
                      children={textImageTitle}
                    />
                  )}

                  {textImageSubtitle && (
                    <h3
                      className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                      children={textImageSubtitle}
                    />
                  )}

                  {belowTitle && (
                    <>
                      <figure>
                        {alternativeImage && (
                          <GatsbyImage
                            image={alternativeImage}
                            alt={altImage?.altText || ""}
                            className="w-full rounded-lg"
                          />
                        )}
                      </figure>
                    </>
                  )}
                </div>
                <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                  <div>
                    {textImageText && Parser(sanitizeHtml(textImageText))}
                  </div>

                  {textImageButton && (
                    <div className="mt-6">
                      <Button
                        link={textImageButton.url}
                        children={textImageButton.title}
                      />
                    </div>
                  )}

                  {belowText && (
                    <>
                      <figure>
                        {alternativeImage && (
                          <GatsbyImage
                            image={alternativeImage}
                            alt={altImage?.altText || ""}
                            className="w-full rounded-lg"
                          />
                        )}
                      </figure>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </Edges>
    </>
  )
}

export default TextImage

export const fragment = graphql`
  fragment TextImage on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_TextImage {
      fieldGroupName
      textImageTitle
      textImageText
      textImagePosition
      textImageBackgroundColor
      textImageButton {
        target
        title
        url
      }
      textImage {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(width: 1184, height: 1376, placeholder: BLURRED)
          }
        }
      }
      altImage: textImage {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(width: 1310, height: 873, placeholder: BLURRED)
          }
        }
      }
    }
  }

  fragment contactTextImage on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
    ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_TextImage {
      fieldGroupName
      textImageTitle
      textImageText
      textImagePosition
      textImageBackgroundColor
      textImageButton {
        target
        title
        url
      }
      textImage {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(width: 1184, height: 1376, placeholder: BLURRED)
          }
        }
      }
      altImage: textImage {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(width: 1310, height: 873, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
