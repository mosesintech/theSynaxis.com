import { useStaticQuery, graphql } from "gatsby"

const useDocData = () => {
  const { allWpDoc } = useStaticQuery(
    graphql`
      query DocQuery {
        allWpDoc {
          nodes {
            ...DocFragment
          }
        }
      }
    `
  )
  return { allWpDoc }
}

export default useDocData
