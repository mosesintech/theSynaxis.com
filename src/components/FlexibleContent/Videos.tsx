import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface VideoProps extends FlexibleContentProps {
  videosTitle?: string
  videosText?: string
  videosBackgroundColor?: string
  videosButton?: {
    target?: string
    title?: string
    url?: string
  }
  videos: []
}

const Videos: React.FC<VideoProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>VIDEOS</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default Videos

export const fragment = graphql`
  fragment Videos on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Videos {
      fieldGroupName
      videosTitle
      videosText
      videosBackgroundColor
      videosButton {
        target
        title
        url
      }
      videos {
        videoEmbedLink
        text
      }
    }
  }

  fragment contactVideos on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
    ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Videos {
      fieldGroupName
      videosTitle
      videosText
      videosBackgroundColor
      videosButton {
        target
        title
        url
      }
      videos {
        videoEmbedLink
        text
      }
    }
  }
`
