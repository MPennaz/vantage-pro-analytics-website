import TopNavbar from "@/components/TopNavbar"
import { navLinks } from "./data"
import Hero from "./components/Hero"
import Features from "./components/Features"
import AIMade from "./components/AIMade"
import Testimonials from "./components/Testimonials"
import TestimonialSwiper from "./components/TestimonialSwiper"
import ActionBox from "./components/ActionBox"
import Footer2 from "./components/Footer2"
import Background2 from "@/components/Background2"

const Index2 = () => {
  return (
    <>
      <Background2 />
      <TopNavbar navLinks={navLinks} />
      <Hero />
      <Features />
      <AIMade />
      <Testimonials />
      <TestimonialSwiper />
      <ActionBox />
      <Footer2 />
    </>
  )
}

export default Index2