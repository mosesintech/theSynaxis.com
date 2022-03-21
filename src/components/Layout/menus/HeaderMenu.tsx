import React from "react"
import Headroom from "react-headroom"

import DesktopMenu from "./DesktopMenu"
// import UtilityMenu from './UtilityMenu'

export default function HeaderMenu() {
  return (
    <>
      <Headroom>
        {/* <UtilityMenu /> */}
        <DesktopMenu />
      </Headroom>
    </>
  )
}
