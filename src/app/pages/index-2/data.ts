import type { NavbarLinkProps } from "@/types/data";
import type { FeatureType, TestimonialType } from "./types";
import avatar1 from '@/assets/images/avatars/img-1.png'
import avatar2 from '@/assets/images/avatars/img-2.png'
import avatar3 from '@/assets/images/avatars/img-3.png'
import type { FooterLinkType } from "../index-1/types";

export const navLinks: NavbarLinkProps[] = [
  {
    label: 'Home',
    link: '#home',
  },
  {
    label: 'Features',
    link: '#features',
  },
  {
    label: 'AI Made',
    link: '#ai_made',
  },
  {
    label: 'Testimonials',
    link: '#testimonials',
  },
]

export const features: FeatureType[] = [
  {
    icon: 'lucide:activity',
    name: 'Built for speed',
    description:
      'Generate up to 10 images in seconds. Our AI is super fast and flexible that can generate image for you in quick times.',
  },
  {
    icon: 'lucide:layers',
    name: '10+ AI models',
    description:
      'From Starble Diffusion to custom community styles. We have over 10+ AI models that will works better for you.',
  },
  {
    icon: 'lucide:dribbble',
    name: 'Works for everything',
    description:
      'Generate up to 10 images in seconds. Our AI is super fast and flexible that can generate image for you in quick times.',
  },
]

export const testimonialData: TestimonialType[] = [
  {
    name: 'Shane Watson',
    avatar: avatar1,
    role: 'CEO & Founder',
    description:
      '"Amet minim mollil non deserunt ulliamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."',
  },
  {
    name: 'Maria Ruth',
    avatar: avatar2,
    role: 'CEO & Founder',
    description:
      '"Amet minim mollil non deserunt ulliamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."',
  },
  {
    name: 'Megan Hild',
    avatar: avatar3,
    role: 'CEO & Founder',
    description:
      '"Amet minim mollil non deserunt ulliamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."',
  },
]

export const footerLinks2: FooterLinkType[] = [
  {
    title: "Company",
    links: [
      { name: "About" },
      { name: "Developers" },
      { name: "Blog" },
      { name: "Contact" }
    ]
  },
  {
    title: "Service",
    links: [
      { name: "Developer Driven" },
      { name: "DMCA policy" },
      { name: "Private IPFS" },
      { name: "News" }
    ]
  }
]