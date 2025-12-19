import type { StaticImageData } from "next/image";

export type NavbarLinkProps = {
  label: string;
  link: string;
}

export type PageType = {
  name: string
  url: string
  image: StaticImageData
}

export type FaqType = {
  id: number
  question: string
  answer: string
}

export type FooterLinkType = {
  title: string
  links: {
    url?: string
    name: string
  }[]
}
