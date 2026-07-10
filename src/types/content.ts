export interface NavLink {
  label: string;
  href: string;
  subLinks?: { label: string; href: string }[];
}

export interface TrustedLogo {
  name: string;
  svgPath: string;
}

export interface BenefitCard {
  title: string;
  description: string;
  image: string;
}

export interface AskingListItem {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

export interface PricingFeature {
  label: string;
  included: boolean;
}

export interface PricingTier {
  name: string;
  priceMonthly: string;
  priceAnnual: string;
  captionMonthly: string;
  captionAnnual: string;
  description: string;
  features: PricingFeature[];
  ctaLabel: string;
  highlighted?: boolean;
}

export interface HowItWorksTab {
  label: string;
  screenshot: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface IntegrationLogo {
  name: string;
  icon: string;
}
