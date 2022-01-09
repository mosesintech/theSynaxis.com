import React from "react"

const Gallery = props => {
  return (
    <>
      <h1>GALLERY</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default Gallery
