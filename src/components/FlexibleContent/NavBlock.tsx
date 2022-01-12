import React from "react"

import { FlexibleContentProps } from "../../interfaces"

export interface NavBlockProps extends FlexibleContentProps {
  navBlockTitle?: string;
  navBlockText?: string;
  navBlockBackgroundColor?: string;
  navBlockButton?: {
    target?: string;
    title?: string;
    url?: string;
  };
  navBlockLinks?: [];
}

const NavBlock: React.FC<NavBlockProps> = (props) => {
  return (
    <>
      <h1>NAVIGATION BLOCK</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default NavBlock
