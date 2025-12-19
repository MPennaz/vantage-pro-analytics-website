import type { FaqType, NavbarLinkProps } from "@/types/data";
import type { BlogType, BrowseByCategoryType, CategoriesType, FooterLinkType, SellerType } from "./types";

import avatar1 from "@/assets/images/avatars/img-1.png"
import avatar2 from "@/assets/images/avatars/img-2.png"
import avatar3 from "@/assets/images/avatars/img-3.png"
import avatar4 from "@/assets/images/avatars/img-4.png"
import avatar5 from "@/assets/images/avatars/img-5.png"
import avatar6 from "@/assets/images/avatars/img-6.png"
import avatar8 from "@/assets/images/avatars/img-8.png"
import avatar9 from "@/assets/images/avatars/img-9.png"
import avatar10 from "@/assets/images/avatars/img-10.png"
import avatar11 from "@/assets/images/avatars/img-11.png"

import artImg4 from '@/assets/images/nft/art/4.png'
import artImg5 from '@/assets/images/nft/art/5.png'
import artImg6 from '@/assets/images/nft/art/6.png'
import artImg7 from '@/assets/images/nft/art/7.png'
import artImg8 from '@/assets/images/nft/art/8.png'
import artImg9 from '@/assets/images/nft/art/9.png'
import artImg10 from '@/assets/images/nft/art/10.png'
import artImg11 from '@/assets/images/nft/art/11.png'
import artImg12 from '@/assets/images/nft/art/12.png'
import artImg13 from '@/assets/images/nft/art/13.png'
import artImg14 from '@/assets/images/nft/art/14.png'
import artImg15 from '@/assets/images/nft/art/15.png'
import artImg16 from '@/assets/images/nft/art/16.png'
import artImg17 from '@/assets/images/nft/art/17.png'
import artImg18 from '@/assets/images/nft/art/18.png'
import artImg19 from '@/assets/images/nft/art/19.png'
import artImg20 from '@/assets/images/nft/art/20.png'
import artImg21 from '@/assets/images/nft/art/21.png'
import artImg22 from '@/assets/images/nft/art/22.png'
import artImg25 from '@/assets/images/nft/art/25.png'

import nftImg from '@/assets/images/nft/bg/1.png'
import nftImg2 from '@/assets/images/nft/bg/2.png'

export const showcaseImages = [artImg10, artImg4, artImg5, artImg9, artImg14, artImg22, artImg25, artImg20]

export const navLinks: NavbarLinkProps[] = [
  {
    label: 'Home',
    link: '#home',
  },
  {
    label: 'Categories',
    link: '#categories',
  },
  {
    label: 'Sellers',
    link: '#sellers',
  },
  {
    label: 'Showcase',
    link: '#showcase',
  },
  {
    label: 'Faq',
    link: '#faq',
  },
  {
    label: 'Blog',
    link: '#blog',
  },
]

export const trendingCategories: CategoriesType[] = [
  {
    image: artImg4,
    avatar: avatar1,
    username: '@Nikom',
    name: 'Half Hair',
    currentBid: 20.5,
    lastBid: 25.04,
    hasTime: true,
  },
  {
    image: artImg5,
    avatar: avatar3,
    username: '@Mexi',
    name: 'Headphone Monkey',
    currentBid: 12.5,
    lastBid: 25.04,
  },
  {
    image: artImg6,
    avatar: avatar4,
    username: '@Astro',
    name: 'Goggles Monkey',
    currentBid: 14.8,
    lastBid: 12.04,
  },
  {
    image: artImg7,
    avatar: avatar5,
    username: '@Aliza',
    name: 'Cute Girl',
    currentBid: 18.0,
    lastBid: 32.06,
    hasTime: true,
  },
  {
    image: artImg8,
    avatar: avatar8,
    username: '@Tony',
    name: 'Sky Hair Girl',
    currentBid: 20.42,
    lastBid: 18.96,
  },
  {
    image: artImg9,
    avatar: avatar9,
    username: '@Alabto',
    name: 'Cartoon Couple',
    currentBid: 24.96,
    lastBid: 40.22,
  },
  {
    image: artImg14,
    avatar: avatar10,
    username: '@Minato',
    name: 'Skeleton',
    currentBid: 12.5,
    lastBid: 25.04,
    hasTime: true,
  },
  {
    image: artImg22,
    avatar: avatar11,
    username: '@Tamari',
    name: 'Businessman Monkey',
    currentBid: 42.52,
    lastBid: 20.42,
  },
]

export const sellersData: SellerType[] = [
  {
    id: 1,
    images: [artImg4, artImg5, artImg6,],
    avatar: avatar1,
    name: 'Nikom Petroy',
    amount: 60000,
  },
  {
    id: 2,
    images: [artImg7, artImg8, artImg9,],
    avatar: avatar2,
    name: 'Mexi Luna',
    amount: 55000,
  },
  {
    id: 3,
    images: [artImg10, artImg11, artImg12,],
    avatar: avatar4,
    name: 'Astro Stark',
    amount: 52000,
  },
  {
    id: 4,
    images: [artImg13, artImg14, artImg15,],
    avatar: avatar5,
    name: 'Aliza Spencer',
    amount: 48500,
  },
  {
    id: 5,
    images: [artImg16, artImg17, artImg18,],
    avatar: avatar6,
    name: 'Tony Stark',
    amount: 45200,
  },
  {
    id: 6,
    images: [artImg20, artImg21, artImg22,],
    avatar: avatar8,
    name: 'Minato Namikaze',
    amount: 45100,
  },
]

export const browseByCategoryData: BrowseByCategoryType[] = [
  {
    image: artImg19,
    category: 'Art',
  },
  {
    image: artImg5,
    category: 'Music',
  },
  {
    image: artImg14,
    category: 'Utility',
  },
]

export const faqData: FaqType[] = [
  {
    id: 1,
    question: 'Will you support my language?',
    answer:
      'You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.',
  },
  {
    id: 2,
    question: 'Do you also provide subtitles?',
    answer:
      'You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.',
  },
  {
    id: 3,
    question: 'How do I get started?',
    answer:
      'You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.',
  },
  {
    id: 4,
    question: 'Do you have any samples?',
    answer:
      'You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.',
  },
  {
    id: 5,
    question: 'Can I get custom templates?',
    answer:
      'You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.',
  },
  {
    id: 6,
    question: 'What types of videos can I upload?',
    answer:
      'You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.',
  },
]

export const blogs: BlogType[] = [
  {
    date: '27 Aug 2021',
    title: "The Beginner's to creating & selling digital NFTs",
    description:
      'suscipit eget imperdiet nec imperdiet iaculis ipsum. Sed aliquam ultrices mauris.',
    image: nftImg,
  },
  {
    date: '31 Jan 2022',
    title: '7 Reasons to sell your NFTs on openSea',
    description:
      'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero.',
    image: nftImg2,
  },
]

export const footerLinks: FooterLinkType[] = [
  {
    title: 'Marketplace',
    links: [{ name: 'All NFTs' }, { name: 'New' }, { name: 'Arts' }],
  },
  {
    title: 'Status',
    links: [{ name: 'Rankings' }, { name: 'Activity' }],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Help Center' },
      { name: 'Suggestions' },
      { name: 'Newsletter' },
    ],
  },
  {
    title: 'Company',
    links: [{ name: 'About' }, { name: 'Careers' }],
  },
]
