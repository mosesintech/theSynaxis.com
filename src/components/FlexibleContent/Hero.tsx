import React from "react"

const Hero = props => {
  return (
    <>
      <h1>HERO</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default Hero
