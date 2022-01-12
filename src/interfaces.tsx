import { PageProps } from "gatsby"

interface FlexibleContentProps extends PageProps {
  title?: string
  slug?: string
}

interface TemplatePageProps extends PageProps {
  data: {
    page: {
      title?: string
      uri?: string
      slug?: string
      template?: any
    }
  }
}

export { FlexibleContentProps, TemplatePageProps }
