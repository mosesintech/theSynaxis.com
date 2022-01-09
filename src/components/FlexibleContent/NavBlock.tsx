import React from "react"

const NavBlock = props => {
  return (
    <>
      <h1>NAVIGATION BLOCK</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default NavBlock
