import Background2 from "@/components/Background2"
import TopNavbar from "@/components/TopNavbar"
import { navLinks } from "./data"
import Hero from "./components/Hero"
import BusinessTools from "./components/BusinessTools"
import PostGenerator from "./components/PostGenerator"
import Features from "./components/Features"
import Pricing from "./components/Pricing"
import Faqs from "./components/Faqs"
import Footer5 from "./components/Footer5"

const Index5 = () => {
  return (
    <>
      <Background2 />
      <TopNavbar navLinks={navLinks} />
      <Hero />
      <BusinessTools />
      <PostGenerator />
      <Features />
      <Pricing />
      <Faqs />
      <Footer5 />
    </>
  )
}

export default Index5