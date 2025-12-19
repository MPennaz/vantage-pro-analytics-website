import type { StaticImageData } from "next/image"

export type FeatureType = {
  icon: string
  name: string
  description: string
}

export type TestimonialType = {
  name: string
  avatar: StaticImageData
  role: string
  description: string
}