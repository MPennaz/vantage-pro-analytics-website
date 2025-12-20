// src/app/(home)/components/Hero.tsx

import vpaHero from '@/assets/images/vpa/Hero.png'
import BetaSignupModal from "@/components/BetaSignupModal"


const Hero = () => {
const marqueeGroup1 = [
  "Advanced analytics",
  "Adaptive learning",
  "Smart workflows",
  "One platform",
]

const marqueeGroup2 = [
  "Missed deliveries",
  "Scrap you can’t explain",
  "Inventory surprises",
  "Late purchase orders",
  "Recurring quality issues",
]



  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden pt-[72px] pb-14"
        data-aos="zoom-out"
        data-aos-easing="ease"
        data-aos-duration={1000}
      >
        <div className="px-10">
          <div
            className="rounded-2xl overflow-hidden bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${vpaHero.src})` }}
          >
            <div className="bg-default-950/70 rounded-2xl">
              <div className="container">
                <div className="p-6 relative">
                  

                  <div className="flex h-full items-center justify-center py-36">
                    <div className="text-center max-w-3xl mx-auto relative">
                      <span className="py-1 px-3 rounded-md text-sm font-medium uppercase tracking-wider text-white/80 bg-white/10">
                        Smart tools for modern manufacturing
                      </span>

                      <h1 className="md:text-5xl/snug text-3xl font-semibold text-white mt-10">
                        All operations. One platform.
                      </h1>

                      <p className="w-3/4 mx-auto text-base font-normal text-default-200 mt-5">
                        Vantage Pro brings ERP, MES, Quality, and AI analytics into one platform—built from the ground up to simplify manufacturing. Each role sees exactly what matters, the moment they log in.
                      </p>

                      <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
                        <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
                          <BetaSignupModal />
                        </div>                        
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="pb-20"
        data-aos="zoom-in"
        data-aos-easing="ease"
        data-aos-duration={1000}
      >
        <div>
          <div className="relative gap-8 m-auto flex overflow-hidden">
            <div className="marquee__group gap-8 flex items-center justify-around flex-shrink-0 min-w-full">
              {marqueeGroup1.map((item, idx) => (
                <div className="py-3" key={idx}>
                  <h2 className="text-5xl font-medium text-white">{item}</h2>
                </div>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="marquee__group gap-8 flex items-center justify-around flex-shrink-0 min-w-full"
            >
              {marqueeGroup1.map((item, idx) => (
                <div className="py-3" key={idx}>
                  <h2 className="text-5xl font-medium text-white">{item}</h2>
                </div>
              ))}
            </div>
          </div>

          <div className="marquee--reverse gap-8 m-auto flex overflow-hidden mt-7">
            <div className="marquee__group gap-8 delay-[31s] flex items-center justify-around flex-shrink-0 min-w-full">
              {marqueeGroup2.map((item, idx) => (
                <div className="py-3" key={idx}>
                  <h2 className="text-5xl font-medium text-white">{item}</h2>
                </div>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="marquee__group delay-[31s] gap-8 flex items-center justify-around flex-shrink-0 min-w-full"
            >
              {marqueeGroup2.map((item, idx) => (
                <div className="py-3" key={idx}>
                  <h2 className="text-5xl font-medium text-white">{item}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
