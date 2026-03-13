import type { FaqType, NavbarLinkProps } from "@/types/data";
import type {
  FeatureType,
  PricingType,
  TestimonialType,
  ToolType,
  TopicType,
} from './types'


import avatar1 from '@/assets/images/avatars/img-1.png';
import avatar2 from '@/assets/images/avatars/img-2.png';
import avatar3 from '@/assets/images/avatars/img-3.png';
import avatar4 from '@/assets/images/avatars/img-4.png';
import avatar5 from '@/assets/images/avatars/img-5.png';
import avatar6 from '@/assets/images/avatars/img-6.png';
import avatar7 from '@/assets/images/avatars/img-7.png';
import avatar8 from '@/assets/images/avatars/img-8.png';


export const aiTools: ToolType[] = [
  {
    icon: 'lucide:dribbble',
    title: 'Latest AI technology',
    description:
      'Click on Chat Archive and search to Watch Ask Anything Chats from your favocite artists. Ask Them A Question.',
  },
  {
    icon: 'lucide:messages-square',
    title: 'Muiti-language',
    description:
      'Click on Chat Archive and search to Watch Ask Anything Chats from your favocite artists. Ask Them A Question.',
  },
  {
    icon: 'lucide:image',
    title: 'Edit text easily',
    description:
      'Click on Chat Archive and search to Watch Ask Anything Chats from your favocite artists. Ask Them A Question.',
  },
]

export const features: FeatureType[] = [
  {
    icon: "lucide:factory",
    name: "For Plant Managers",
    description:
      "See what is running, what is blocked and what is late in one place. Batches, lines and exceptions roll up into a live view instead of a dozen whiteboards and emails.",
  },
  {
    icon: "lucide:beaker",
    name: "For QC & Lab",
    description:
      "Capture every test, spec and adjustment with full batch traceability. Trend properties over time and give QC a clear view of what is in spec, at risk or out of bounds.",
  },
  {
    icon: "lucide:truck",
    name: "For Logistics & Customer Service",
    description:
      "Promise ship dates with confidence. Connect orders, production status and inventory so customer-facing teams know exactly what they can commit and when.",
  },
  {
    icon: "lucide:bar-chart-3",
    name: "For Executives & Finance",
    description:
      "Track margin, throughput, scrap and service level across plants. VPA turns operational noise into a clean KPI cockpit for board decks and everyday decisions.",
  },
  {
    icon: "lucide:hard-hat",
    name: "For Operators & Supervisors",
    description:
      "Give the floor simple, role-specific screens instead of cluttered ERP forms. Log production, downtime and comments in seconds without breaking rhythm.",
  },
  {
    icon: "lucide:server-cog",
    name: "For IT & Continuous Improvement",
    description:
      "API-friendly and cloud-hosted, VPA can pull data from your existing systems today and grow into your primary operational platform tomorrow—without another monster ERP project.",
  },
]

export const trendingTopics: TopicType[] = [
  {
    id: 1,
    title: "Single plant drowning in spreadsheets",
    description:
      "Items, batches, QC results and inventory all live in Excel. VPA gives the team one live system instead of chasing down versions on shared drives.",
    avatars: [avatar2, avatar1, avatar3],
  },
  {
    id: 2,
    title: "Multi-site visibility gap",
    description:
      "Leadership can’t see what is running, late or blocked across plants. VPA rolls up status, KPIs and exceptions without forcing everyone into a mega-ERP.",
    avatars: [avatar4, avatar5],
  },
  {
    id: 3,
    title: "Aging custom MES that can’t keep up",
    description:
      "An old in-house MES is hard to change and only one person can maintain it. VPA brings modern UI, APIs and analytics without starting from zero.",
    avatars: [avatar6, avatar7, avatar8, avatar5],
  },
  {
    id: 4,
    title: "ERP is too heavy for the plant floor",
    description:
      "Operators avoid ERP screens because they’re slow and confusing. VPA gives them simple, role-specific views while still capturing clean data.",
    avatars: [avatar8, avatar4, avatar6],
  },
  {
    id: 5,
    title: "High-mix, low-volume scheduling chaos",
    description:
      "Frequent changeovers and customer tweaks make planning a mess. VPA helps production, QC and logistics work from the same live schedule and constraints.",
    avatars: [avatar1],
  },
  {
    id: 6,
    title: "Customer promises slipping through the cracks",
    description:
      "Sales and customer service don’t have a clear picture of what’s ready, in-process or at risk. VPA ties orders to real plant status so promises match reality.",
    avatars: [avatar2, avatar6, avatar3],
  },
]
export const userTestimonialData: TestimonialType[] = [
  {
    name: 'Ryan Delk',
    avatar: avatar1,
    description:
      "I've tried other AI writing tools before, but this one is by far the best. The language is sophisticated and engaging, and it's helped me take my content to the next level.",
  },
  {
    name: 'Marsel Fischer',
    avatar: avatar2,
    description:
      "As a content marketer, I'm always looking for ways to streamline my workflow and create high-quality content. I don't know how I ever managed without it.",
  },
  {
    name: 'John Tayes',
    avatar: avatar3,
    description:
      'The solutions offered by your AI chatbots are truly impressive! We are able to communicate with our customers faster and more interactively.',
  },
  {
    name: 'Ryan Jonas',
    avatar: avatar4,
    description:
      "I've tried other AI writing tools before, but this one is by far the best. The language is sophisticated and engaging, and it's helped me take my content to the next level.",
  },
  {
    name: 'Randy Hilarski',
    avatar:avatar5,
    description:
      'I was surprised by the ease and speed of the video editing service based on AI technology from this site. The results are amazing and very satisfying.',
  },
  {
    name: 'Jonathan Simcoe',
    avatar: avatar6,
    description:
      'The solutions offered by your AI chatbots are truly impressive! We are able to communicate with our customers faster and more interactively.',
  },
]

export const pricingPlans: PricingType[] = [
  {
    name: 'Free',
    price: 0,
    features: ['1 user', 'Plan features', 'Product support'],
  },
  {
    name: 'Startup',
    price: 39,
    features: ['2 users', 'Plan features', 'Product support'],
  },
  {
    name: 'Team',
    price: 89,
    features: ['5 users', 'Plan features', 'Product support'],
  },
  {
    name: 'Enterprise',
    price: 149,
    features: ['10 users', 'Plan features', 'Product support'],
  },
]

export const faqs: FaqType[] = [
  {
    id: 1,
    question: "Is Vantage Pro Analytics a full ERP or just an add-on?",
    answer:
      "VPA is a full operational platform — ERP, MES, QC, and Analytics in one connected system. Teams can start with the modules that solve the biggest pain first, then expand — without a rip-and-replace project.",
  },
  {
    id: 2,
    question: "How long does it take to get up and running?",
    answer:
      "Most organizations can begin using core modules (items, customers, inventory, basic analytics) within weeks, not months. Rollout can be done plant-by-plant or module-by-module to avoid large, disruptive projects.",
  },
  {
    id: 3,
    question: "Do we need a big IT team to support this?",
    answer:
      "No. VPA is cloud-hosted and managed for you. Your IT team retains control over access, data and integrations, but they don’t need to maintain servers or manage a heavy on-prem footprint.",
  },
  {
    id: 4,
    question: "Can it handle multiple plants and product lines?",
    answer:
      "Yes. VPA is designed for multi-site manufacturers. Plants, lines and product families can each have their own views, while leadership gets a clean roll-up across the entire organization.",
  },
  {
    id: 5,
    question: "What about integrations and data ownership?",
    answer:
      "VPA provides modern APIs and import tools to connect with existing ERPs, lab systems or spreadsheets. Your company always owns its data — VPA simply makes it easier to use, analyze and act on.",
  },
  {
    id: 6,
    question: "How is pricing structured?",
    answer:
      "Pricing is subscription-based with tiers by modules and seats. This allows small teams to start affordably and expand over time without heavy upfront licenses or long-term lock-ins.",
  },
]



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
    label: 'Tools',
    link: '#tools',
  }, 
  {
    label: 'Why VPA',
    link: '#why-us',
  },
  {
    label: 'Faq',
    link: '#faq',
  },
  {
    label: 'Contact',
    link: '#contact',
  },
]