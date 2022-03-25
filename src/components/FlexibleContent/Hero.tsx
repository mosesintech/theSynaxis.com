import React from "react"
import { Link, graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface HeroProps extends FlexibleContentProps {
  heroTitle?: string
  heroSubtitle?: string
  heroText?: string
  heroImage?: {} // Add to WordPress
  heroBackgroundColor?: string
  heroBackgroundVideo?: string
  heroBackgroundImage?: {}
  heroGallery?: []
  heroButton?: {
    target?: string
    title?: string
    url?: string
  }
  heroSecondaryButton?: {
    target?: string
    title?: string
    url?: string
  }
}

const Hero: React.FC<HeroProps> = props => {
  const { heroTitle, heroSubtitle, heroText, heroButton, heroSecondaryButton } =
    props
  return (
    <>
      <Edges size="lg">
        <div className="relative bg-white-50 overflow-hidden">
          <div className="relative pt-6 pb-16 sm:pb-24">
            <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold font-headingStyled text-gray-900 sm:text-5xl md:text-6xl">
                  {heroTitle && <span className="block">{heroTitle}</span>}
                  {heroSubtitle && (
                    <span className="block text-indigo-600">
                      {heroSubtitle}
                    </span>
                  )}
                </h1>
                {heroText && (
                  <p
                    className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
                    children={heroText}
                  />
                )}
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                  {heroButton && (
                    <div className="rounded-md shadow">
                      <Link
                        to={`${heroButton.url}`}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        {heroButton.title}
                      </Link>
                    </div>
                  )}
                  {heroSecondaryButton && (
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                      <Link
                        to={`${heroSecondaryButton.url}`}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 hover:text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                      >
                        {heroSecondaryButton.title}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </main>
          </div>
        </div>
      </Edges>
    </>
  )
}

export default Hero

export const fragment = graphql`
  fragment Hero on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Hero {
      fieldGroupName
      heroTitle
      heroSubtitle
      heroText
      heroBackgroundColor
      heroBackgroundVideo
      heroBackgroundImage {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      heroButton {
        target
        title
        url
      }
      heroSecondaryButton {
        target
        title
        url
      }
      heroGallery {
        altText
      }
    }
  }
`
