import IconifyIcon from "@/components/wrappers/IconifyIcon"
import artImg22 from '@/assets/images/nft/art/22.png'
import artImg18 from '@/assets/images/nft/art/18.png'
import artImg5 from '@/assets/images/nft/art/5.png'
import artImg6 from '@/assets/images/nft/art/6.png'
import Image from "next/image"

const Hero = () => {
  return (
    <section id="home" className="relative pt-[74px] overflow-hidden">
      <div className="container-fluid lg:px-10 md:px-3 relative overflow-hidden">
        <div className="lg:py-24 py-[74px] md:rounded-lg shadow bg-default-950/40 backdrop-blur-3xl">
          <div className="container relative">
            <div className="absolute top-0">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-lucide="badge" className="lucide lucide-badge animate-[spin_10s_linear_infinite] h-12 w-12 fill-primary/20 text-transparent"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /></svg>
            </div>
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
              <div className="md:col-span-7" data-aos="fade-right" data-aos-easing="ease" data-aos-duration={1000}>
                <div className="md:me-6">
                  <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-primary/20 text-primary mb-6">
                    <span className="w-2 h-2 inline-block bg-primary rounded-full" />
                    Collect NFTs
                  </span>
                  <h4 className="font-semibold text-4xl/tight lg:text-6xl/tight capitalize text-white mb-4"><span className="bg-gradient-to-l from-red-600 to-primary text-transparent bg-clip-text">Discover &amp; collect</span> the best NFTs digital art</h4>
                  <p className="text-lg max-w-xl text-default-200 mb-6">We are a huge marketplace dedicated to connecting great artists of all NFT with their fans and unique token collectors!</p>
                  <div>
                    <a href="#" className="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-hover transition-all duration-300 me-2 mt-2">Explore Now</a>
                    <a href="#" className="inline-flex items-center justify-center gap-2 py-2 px-6 transition-all duration-300 border bg-transparent border-white/20 text-white rounded-lg mt-2 hover:bg-primary hover:border-primary">Sell Now <IconifyIcon icon="mdi:arrow-top-right-thin" className="text-xl leading-[0]" /></a>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5" data-aos="fade-left" data-aos-easing="ease" data-aos-duration={1000}>
                <div className="flex gap-4 md:gap-6 tilt">
                  <div className="flex flex-col gap-4 md:gap-6 pt-10 md:pt-16 w-full">
                    <Image src={artImg22} className="w-full h-40 md:h-[278px] rounded-lg object-cover" alt="art" />
                    <Image src={artImg18} className="w-full h-40 md:h-[278px] rounded-lg object-cover" alt="art" />
                  </div>
                  <div className="flex flex-col gap-4 md:gap-6 pb-10 md:pb-16 w-full relative">
                    <div className="absolute bottom-0 end-0 -z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-lucide="triangle" className="lucide lucide-triangle animate-[spin_10s_linear_infinite] h-12 w-12 fill-primary/20 text-transparent"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /></svg>
                    </div>
                    <Image src={artImg5} className="w-full h-40 md:h-[278px] rounded-lg object-cover" alt="art" />
                    <Image src={artImg6} className="w-full h-40 md:h-[278px] rounded-lg object-cover" alt="art" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Hero