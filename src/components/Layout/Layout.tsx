import * as React from "react"

import Header from "./Header"
import Footer from "./Footer"
import Breadcrumbs from "./Breadcrumbs"
import "../../styles/index.css"

interface LayoutProps {
  children: any
  title?: string
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Header />
      <Breadcrumbs title={title} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
