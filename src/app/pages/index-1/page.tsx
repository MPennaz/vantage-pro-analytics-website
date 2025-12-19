import TopNavbar from "@/components/TopNavbar"
import { navLinks } from "./data"
import Hero from "./components/Hero"
import TrendingCategories from "./components/TrendingCategories"
import Sellers from "./components/Sellers"
import Showcase from "./components/Showcase"
import Faqs from "./components/Faqs"
import Blogs from "./components/Blogs"
import Footer1 from "./components/Footer1"
import Background1 from "@/components/Background1"

const Index1 = () => {
  return (
    <>
      <Background1 />
      <TopNavbar navLinks={navLinks} />
      <Hero />
      <TrendingCategories />
      <Sellers />
      <Showcase />
      <Faqs />
      <Blogs />
      <Footer1 />
    </>
  )
}

export default Index1