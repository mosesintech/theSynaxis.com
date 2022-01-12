import React from "react"

import { FlexibleContentProps } from "../../interfaces"

export interface GalleryProps extends FlexibleContentProps {
  galleryTitle?: string;
  galleryText?: string;
  galleryBackgroundColor?: string;
  galleryButton?: {
    target?: string;
    title?: string;
    url?: string;
  }
  imageGallery?: [];
}

const Gallery: React.FC<GalleryProps> = (props) => {
  return (
    <>
      <h1>GALLERY</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default Gallery
