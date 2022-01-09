import React from "react"

const Intro = props => {
  return (
    <>
      <h1>Intro</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default Intro
