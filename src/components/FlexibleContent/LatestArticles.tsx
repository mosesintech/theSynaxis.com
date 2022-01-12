import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import { FlexibleContentProps } from "../../interfaces"

interface ModuleProps extends FlexibleContentProps {
  latestArticlesTitle?: string;
  latestArticlesText?: string;
  latestArticlesPostType?: string;
  latestArticlesPostLimit?: string;
  latestArticlesBackgroundColor?: string;
  latestArticlesButton?: {
    target?: string;
    title?: string;
    url?: string;
  }
}

const LatestArticles: React.FC<ModuleProps> = (props) => {
  const usePostData = () => {
    const { allWpPost } = useStaticQuery(
      graphql`
        query PostQuery {
          allWpPost {
            nodes {
              title
            }
          }
        }
      `
    )
    return { allWpPost }
  }

  if(!!props.latestArticlesPostType && props.latestArticlesPostType.toLowerCase() === 'post') {
    const allPosts = usePostData();

    return (
      <>
        <h1>LATEST ARTICLES</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
        <pre>{JSON.stringify(allPosts, null, 2)}</pre>
      </>
    )  
  }

  return (
    <>
      <h1>LATEST ARTICLES</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default LatestArticles
