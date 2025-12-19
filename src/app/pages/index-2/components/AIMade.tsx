import Image from "next/image"
import aiImg7 from '@/assets/images/ai/img-7.jpg'
import aiImg8 from '@/assets/images/ai/img-8.jpg'
import IconifyIcon from "@/components/wrappers/IconifyIcon"
const AIMade = () => {
  return (
    <section id="ai_made" className="pb-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="relative" data-aos="fade-right" data-aos-easing="ease" data-aos-duration={1000}>
            <Image src={aiImg7} className="rounded-xl" alt="ai-image" />
            <div className="absolute inset-0 bg-default-950/50 rounded-xl" />
            <div className="hidden lg:block">
              <div className="absolute top-10 -end-52">
                <div className="inline-block">
                  <div className="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg">
                    <div className="max-w-sm text-center p-6">
                      <p className="text-base font-medium text-default-300">The image is original and not copied or borroweb from someone else&apos;s work</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-auto bottom-20 -start-20">
                <div className="inline-block">
                  <div className="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg">
                    <div className="py-4 px-6 ">
                      <h5>Detailed Work</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-easing="ease" data-aos-duration={1000}>
            <div className="max-w-md text-end ms-auto">
              <span className="py-1 px-3 rounded-md text-sm font-medium uppercase tracking-wider text-primary bg-primary/10">Unique Images</span>
              <h2 className="text-3xl font-medium capitalize text-default-200 mt-4">Unique Images means no copyright issues</h2>
              <p className="text-base font-medium text-default-300 mt-5 mb-8">The image is original and not copied or borrowed from someone else&apos;s work, which ensures that there are no legal restrictions on its use or distribution.</p>
              <button className="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full bg-primary hover:bg-primary-hover transition-all duration-300">Read More
                <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 items-center mt-12">
          <div data-aos="fade-right" data-aos-easing="ease" data-aos-duration={1000}>
            <div className="max-w-md p-3">
              <span className="py-1 px-3 rounded-md text-sm font-medium uppercase tracking-wider text-primary bg-primary/10">custom Images</span>
              <h2 className="text-3xl font-medium capitalize text-default-200 mt-4">Create images your custom AI mode</h2>
              <p className="text-base font-medium text-default-300 mt-5 mb-8">Every element in this image, from the smallest brushstroke to the grandest panorama, is a product of AI&apos;s creative prowess.</p>
              <button className="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full bg-primary hover:bg-primary-hover transition-all duration-300">Read More
                <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="relative" data-aos="fade-left" data-aos-easing="ease" data-aos-duration={1000}>
            <Image src={aiImg8} className="rounded-xl" alt="ai-image" />
            <div className="absolute inset-0 bg-default-950/50 rounded-xl" />
            <div className="hidden lg:block">
              <div className="absolute top-10 -start-52">
                <div className="inline-block">
                  <div className="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg">
                    <div className="max-w-sm text-center p-6">
                      <p className="text-base font-medium text-default-300">The image is original and not copied or borroweb from someone else&apos;s work</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-auto bottom-20 -end-20">
                <div className="inline-block">
                  <div className="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg">
                    <div className="py-4 px-6 ">
                      <h5>High Quality</h5>
                    </div>
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

export default AIMade