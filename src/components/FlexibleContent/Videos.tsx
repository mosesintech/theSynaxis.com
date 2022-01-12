import React from "react"

import { FlexibleContentProps } from "../../interfaces"

export interface VideoProps extends FlexibleContentProps {
  videosTitle?: string;
  videosText?: string;
  videosBackgroundColor?: string;
  videosButton?: {
    target?: string;
    title?: string;
    url?: string;
  };
  videos: [];
}

const Videos: React.FC<VideoProps> = (props) => {
  return (
    <>
      <h1>VIDEOS</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default Videos
