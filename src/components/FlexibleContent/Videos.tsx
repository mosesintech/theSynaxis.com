import React from "react"

const Videos = props => {
  return (
    <>
      <h1>VIDEOS</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default Videos
