import React from "react"

import { FlexibleContentProps } from "../../interfaces"

export interface SupportTiersProps extends FlexibleContentProps {
  supportTiersTitle?: string;
  supportTiersText?: string;
  supportTiersBackgroundColor?: string;
  supportTiersButton?: {
    target?: string;
    title?: string;
    url?: string;
  };
  supportTiersCategories?: [];
  supportTiersFeatures?: [];
}

const SupportTiers: React.FC<SupportTiersProps> = (props) => {
  return (
    <>
      <h1>SUPPORT TIERS</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default SupportTiers
