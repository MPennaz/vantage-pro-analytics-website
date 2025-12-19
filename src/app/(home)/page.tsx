import Background2 from "@/components/Background2"
import TopNavbar from "@/components/TopNavbar"
import Hero from "./components/Hero"
import { navLinks } from "./data"
import Tools from "./components/Tools"
import Tools2 from "./components/Tools2"
import Features from "./components/Features"
import TrendingTopics from "./components/TrendingTopics"

import PricingPlans from "./components/PricingPlans"
import ActionBox from "./components/ActionBox"
import Footer4 from "./components/Footer4"
import Faqs from "./components/Faqs"
import BackgroundNeon from "@/components/BackgroundNeon"
import BackgroundNeonSoft from "@/components/BackgroundNeonSoft"
import BackgroundNeonTron from "@/components/BackgroundNeonTron"
import BackgroundNeonPureCyan from "@/components/BackgroundNeonPureCyan"

const Index4 = () => {
  return (
    <>
      <BackgroundNeonPureCyan />
      <TopNavbar navLinks={navLinks} />
      <Hero />
      <Features />
      <Tools />    
      <TrendingTopics />    

      <Faqs />
      <ActionBox />
      <Footer4 />
    </>
  )
}

export default Index4