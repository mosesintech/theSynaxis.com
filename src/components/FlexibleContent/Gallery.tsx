import React from "react"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface GalleryProps extends FlexibleContentProps {
  galleryTitle?: string
  galleryText?: string
  galleryBackgroundColor?: string
  galleryButton?: {
    target?: string
    title?: string
    url?: string
  }
  imageGallery?: []
}

const Gallery: React.FC<GalleryProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>GALLERY</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default Gallery
