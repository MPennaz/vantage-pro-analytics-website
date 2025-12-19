import type { StaticImageData } from "next/image"

export type CategoriesType = {
  image: StaticImageData
  avatar: StaticImageData
  username: string
  name: string
  currentBid: number
  lastBid: number
  hasTime?: boolean
}

export type SellerType = {
  id:number
  images: StaticImageData[]
  avatar: StaticImageData
  name: string
  amount: number
}

export type BrowseByCategoryType = {
  image: StaticImageData
  category: string
}


export type BlogType = {
  date: string
  title: string
  description: string
  image: StaticImageData
}

export type FooterLinkType = {
  title: string
  links: {
    url?: string
    name: string
  }[]
}
