import React from "react"

const TextImage = props => {
  return (
    <>
      <h1>TEXT IMAGE</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default TextImage
