import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"
import Grid from "../Layout/Grid"
import Button from "../../components/Button"

type LinkBox = {
  title?: string
  text?: string
  image?: {
    altText?: string
    localFile?: any
  }
  button?: {
    target?: string
    title?: string
    url?: string
  }
}

export interface LinkBoxesProps extends FlexibleContentProps {
  linkBoxesTitle?: string
  linkBoxesText?: string
  linkBoxesBackgroundColor?: string
  linkBoxesButton?: {
    target?: string
    title?: string
    url?: string
  }
  linkBoxes?: Array<LinkBox>
}

const LinkBoxes: React.FC<LinkBoxesProps> = props => {
  const { linkBoxesTitle, linkBoxesText, linkBoxes } = props

  return (
    <>
      <Edges size="lg">
        <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="relative max-w-7xl mx-auto">
            {linkBoxesTitle && (
              <div className="text-center">
                <h2
                  className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
                  children={linkBoxesTitle}
                />
                {linkBoxesText && (
                  <p
                    className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
                    children={linkBoxesText}
                  />
                )}
              </div>
            )}

            {linkBoxes && (
              <Grid smColumns={3} mdColumns={3} lgColumns={3} gap={6}>
                {linkBoxes.map(box => {
                  const image =
                    box?.image?.localFile && getImage(box.image.localFile)

                  return (
                    <>
                      <div
                        key={box.title || box.text}
                        className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                      >
                        <div className="flex-shrink-0">
                          {image && (
                            <GatsbyImage
                              image={image}
                              alt={box?.image?.altText || ""}
                              className="h-48 w-full object-cover"
                            />
                          )}
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                          <div className="flex flex-1 flex-col justify-between">
                            <span className="flex-1">
                              {box.title && (
                                <p className="text-xl font-semibold text-gray-900">
                                  {box.title}
                                </p>
                              )}
                              {box.text && (
                                <p className="mt-3 text-base text-gray-500">
                                  {box.text}
                                </p>
                              )}
                            </span>

                            {box.button && (
                              <div className="mt-6">
                                <Button
                                  link={box.button.url}
                                  children={box.button.title}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })}
              </Grid>
            )}
          </div>
        </div>
      </Edges>
    </>
  )
}

export default LinkBoxes

export const fragment = graphql`
  fragment LinkBoxes on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_LinkBoxes {
      fieldGroupName
      linkBoxesTitle
      linkBoxesText
      linkBoxesBackgroundColor
      linkBoxesButton {
        target
        title
        url
      }
      linkBoxes {
        title
        text
        image {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                transformOptions: { cropFocus: SOUTH }
                placeholder: BLURRED
              )
            }
          }
        }
        button {
          target
          title
          url
        }
      }
    }
  }

  fragment contactLinkBoxes on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
    ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_LinkBoxes {
      fieldGroupName
      linkBoxesTitle
      linkBoxesText
      linkBoxesBackgroundColor
      linkBoxesButton {
        target
        title
        url
      }
      linkBoxes {
        title
        text
        image {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                transformOptions: { cropFocus: SOUTH }
                placeholder: BLURRED
              )
            }
          }
        }
        button {
          target
          title
          url
        }
      }
    }
  }
`
