import { graphql } from "gatsby"

export const fragments = graphql`
  fragment DefaultTemplateFragment on WpDefaultTemplate {
    templateName
    flexibleContentModules {
      contentModule {
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Banner {
          fieldGroupName
        }
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_CallToAction {
          fieldGroupName
        }
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Carousel {
          fieldGroupName
        }
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_CompareProducts {
          fieldGroupName
        }
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_DataTable {
          fieldGroupName
        }
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_FeatureLinks {
          fieldGroupName
        }
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Gallery {
          fieldGroupName
        }
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Hero {
          fieldGroupName
        }
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Intro {
          fieldGroupName
        }
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_LatestArticles {
          fieldGroupName
        }
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_LinkBoxes {
          fieldGroupName
        }
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_LinkPanels {
          fieldGroupName
        }
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_List {
          fieldGroupName
        }
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Logos {
          fieldGroupName
        }
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_NavBlock {
          fieldGroupName
        }
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Selection {
          fieldGroupName
        }
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_SupportTiers {
          fieldGroupName
        }
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Switch {
          fieldGroupName
        }
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_TextArea {
          fieldGroupName
        }
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_TextBlock {
          fieldGroupName
        }
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_TextImage {
          fieldGroupName
        }
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_ThreeColumns {
          fieldGroupName
        }
        ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Videos {
          fieldGroupName
        }
      }
    }
  }
`
