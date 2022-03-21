import * as React from "react"

import Header from "./Header"
import Footer from "./Footer"
import "../../styles/index.css"

interface LayoutProps {
  children: any
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
