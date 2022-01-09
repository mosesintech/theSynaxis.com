import { graphql } from "gatsby"

export const fragments = graphql`
  fragment DefaultTemplateFragment on WpDefaultTemplate {
    templateName
    flexibleContentModules {
      contentModule {
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_TextBlock {
          fieldGroupName
          textBlockHeading
          textBlockText
        }
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Gallery {
          fieldGroupName
          galleryHeading
          imageGallery {
            altText
          }
        }
      }
    }
  }
`
