import aiImg6 from '@/assets/images/ai/img-6.jpg'
import aiImg8 from '@/assets/images/ai/img-8.jpg'
import aiImg9 from '@/assets/images/ai/img-9.jpg'
import aiImg14 from '@/assets/images/ai/img-14.jpg'
import aiImg21 from '@/assets/images/ai/img-21.jpg'
import aiImg22 from '@/assets/images/ai/img-22.jpg'
import aiImg10 from '@/assets/images/ai/img-10.jpg'
import aiImg11 from '@/assets/images/ai/img-11.jpg'
import aiImg12 from '@/assets/images/ai/img-12.jpg'
import aiImg13 from '@/assets/images/ai/img-13.jpg'
import Image from 'next/image'
import IconifyIcon from '@/components/wrappers/IconifyIcon'

const Hero = () => {
  const aiImages = [aiImg9, aiImg14, aiImg21, aiImg22, aiImg10]
  const aiImages2 = [aiImg6, aiImg10, aiImg11, aiImg12, aiImg13]
  return (
    <>
      <section id="home" className="relative overflow-hidden pt-[72px] pb-20">
        <div className="px-6 py-4">
          <div className="bg-default-950/40 rounded-2xl">
            <div className="container">
              <div className="p-6">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center relative">
                  <div className="absolute h-14 w-14 bg-primary/10 top-0 start-0 -z-1 rounded-2xl rounded-tl-none rounded-br-none animate-[spin_10s_linear_infinite]" />
                  <div className="absolute h-14 w-14 bg-primary/20 bottom-0 end-0 -z-1 rounded-full animate-ping" />
                  <div data-aos="fade-right" data-aos-easing="ease" data-aos-duration={1000}>
                    <span className="py-1 px-3 rounded-md text-sm font-medium uppercase tracking-wider text-primary bg-primary/20">MEET YOUR CO-PILOT</span>
                    <h1 className="md:text-5xl/tight text-4xl font-medium text-white max-w-lg my-4">Image generate with our ai instantly.</h1>
                    <p className="md:text-lg text-default-300">Get AI generated images from text straight from your <br /> browser very easily.</p>
                    <a href="#" className="group mt-10 inline-flex items-center justify-center gap-2 border border-white/10 text-white py-1 px-1 pe-4 rounded-full hover:bg-primary-hover transition-all duration-300">
                      <span className="h-11 w-11 rounded-full bg-primary/20 group-hover:bg-white/10 text-primary group-hover:text-white flex items-center justify-center me-2">
                        <IconifyIcon icon="lucide:image" className="h-5 w-5" />
                      </span>
                      Generate Images
                    </a>
                  </div>
                  <div className="mx-auto h-[595px] overflow-hidden" data-aos="zoom-in" data-aos-easing="ease" data-aos-duration={1000}>
                    <div className="marquee grid grid-cols-2 gap-6">
                      <div className="relative gap-6 m-auto flex flex-col overflow-hidden">
                        <div className="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full">
                          {aiImages.map((image, idx) => (
                            <Image className="aspect-1 object-cover rounded-xl h-full w-60" src={image} alt="ai-image" key={idx} />
                          ))}
                        </div>
                        <div aria-hidden="true" className="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full">
                          {aiImages.map((image, idx) => (
                            <Image className="aspect-1 object-cover rounded-xl h-full w-60" src={image} alt="ai-image" key={idx} />
                          ))}
                        </div>
                      </div>
                      <div className="marquee-reverse gap-6 m-auto flex flex-col overflow-hidden">
                        <div className="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full">
                          {aiImages2.map((image, idx) => (
                            <Image className="aspect-1 object-cover rounded-xl h-full w-60" src={image} alt="ai-image" key={idx} />
                          ))}
                        </div>
                        <div aria-hidden="true" className="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full">
                          {aiImages2.map((image, idx) => (
                            <Image className="aspect-1 object-cover rounded-xl h-full w-60" src={image} alt="ai-image" key={idx} />
                          ))}
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

      <section className="pb-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="relative rounded-lg overflow-hidden" data-aos="fade-right" data-aos-easing="ease" data-aos-duration={1000}>
              <Image className="mx-auto h-full w-full object-cover object-top ransition duration-500 group-hover:scale-105" src={aiImg10} alt="woman" loading="lazy" width={640} height={805} />
              <div className="absolute inset-0">
                <div className="h-full w-full">
                  <div className="flex items-end h-full w-full p-5">
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded w-full">
                      <h2 className="text-lg font-normal text-center text-default-300">Gaze upon the awe-inspiring creation of artificial intelligence, a majestic dragon of epic proportions. </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6" data-aos="fade-left" data-aos-easing="ease" data-aos-duration={1000}>
              <div className="relative rounded-lg overflow-hidden">
                <Image className="mx-auto h-full w-full object-cover object-top ransition duration-500 group-hover:scale-105" src={aiImg13} alt="woman" loading="lazy" width={640} height={805} />
                <div className="absolute inset-0">
                  <div className="h-full w-full">
                    <div className="flex items-end h-full w-full p-5">
                      <div className="bg-white/10 backdrop-blur-md p-6 rounded w-full">
                        <h3 className="text-lg font-normal text-center text-default-200">An enchanting ice dragon born from the algorithms of AI</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <Image className="mx-auto h-full w-full object-cover object-top ransition duration-500 group-hover:scale-105" src={aiImg8} alt="woman" loading="lazy" width={640} height={805} />
                <div className="absolute inset-0">
                  <div className="h-full w-full">
                    <div className="flex items-end h-full w-full p-5">
                      <div className="bg-white/10 backdrop-blur-md p-6 rounded w-full">
                        <h3 className="text-lg font-normal text-center text-default-200">A marvel of mechanical artistry and AI ingenuity</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden" data-aos="fade-right" data-aos-easing="ease" data-aos-duration={1000}>
              <Image className="mx-auto h-full w-full object-cover object-top ransition duration-500 group-hover:scale-105" src={aiImg11} alt="woman" loading="lazy" width={640} height={805} />
              <div className="absolute inset-0">
                <div className="h-full w-full">
                  <div className="flex items-end h-full w-full p-5">
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded w-full">
                      <h3 className="text-lg font-normal text-center text-default-200">In the heart of an enchanted forest, an AI-born dragon stands as a guardian of the woods</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden" data-aos="fade-left" data-aos-easing="ease" data-aos-duration={1000}>
              <Image className="mx-auto h-full w-full object-cover object-top ransition duration-500 group-hover:scale-105" src={aiImg12} alt="woman" loading="lazy" width={640} height={805} />
              <div className="absolute inset-0">
                <div className="h-full w-full">
                  <div className="flex items-end justify-end h-full w-full p-5">
                    <button className="py-2 px-3 flex items-center gap-6 rounded-full text-default-300 bg-white/10 backdrop-blur-md">Explore more
                      <IconifyIcon icon="lucide:send" className="h-5 w-5 stroke-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default Hero