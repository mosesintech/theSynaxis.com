import { graphql } from "gatsby"

export const contactFragment = graphql`
  fragment ContactTemplateFragment on WpTemplate_Contact {
    templateName
    flexibleContentModules {
      contentModule {
        ...contactBanner
        ...contactCallToAction
        ...contactCarousel
        ...contactCompareProducts
        ...contactDataTable
        ...contactFaq
        ...contactFeatureLinks
        ...contactForm
        ...contactGallery
        ...contactHero
        ...contactLatestArticles
        ...contactLinkBoxes
        ...contactList
        ...contactLogos
        ...contactNavBlock
        ...contactSelection
        ...contactSupportTiers
        ...contactSwitch
        ...contactTextArea
        ...contactTextBlock
        ...contactTextImage
        ...contactVideos
      }
    }
  }
`
