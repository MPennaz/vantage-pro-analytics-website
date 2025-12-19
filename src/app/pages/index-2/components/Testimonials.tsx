import aiImg10 from '@/assets/images/ai/img-10.jpg'
import aiImg11 from '@/assets/images/ai/img-11.jpg'
import aiImg12 from '@/assets/images/ai/img-12.jpg'
import aiImg13 from '@/assets/images/ai/img-13.jpg'
import aiImg14 from '@/assets/images/ai/img-14.jpg'
import aiImg21 from '@/assets/images/ai/img-21.jpg'
import aiImg22 from '@/assets/images/ai/img-22.jpg'
import aiImg6 from '@/assets/images/ai/img-6.jpg'
import aiImg9 from '@/assets/images/ai/img-9.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'

const Testimonials = () => {
  const aiImages = [aiImg9, aiImg14, aiImg21, aiImg22, aiImg10]
  const aiImages2 = [aiImg6, aiImg10, aiImg11, aiImg12, aiImg13]
  return (
    <section id="testimonials" className="pb-24">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-medium text-white mb-4">Our AI-made Images</h2>
              <p className="text-sm text-default-200 font-medium">I am blown away by the AI-generated artwork. Each piece is a masterpiece in its own right, and I love how it combines the creativity of human artists with the innovation of AI.</p>
            </div>
          </div>
          <div>
            <a href="#" className="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-md bg-primary hover:bg-primary-hover transition-all duration-300">Generate AI Images</a>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <div className="relative gap-8 m-auto flex overflow-hidden" data-aos="fade-up" data-aos-easing="ease" data-aos-duration={1000}>
          <div className="marquee__group gap-8 flex items-center justify-around flex-shrink-0 min-w-full">
            {aiImages.map((image, idx) => (
              <Image className="aspect-1 object-cover rounded-xl w-full h-60" src={image} alt="ai-image" key={idx} />
            ))}

          </div>
          <div aria-hidden="true" className="marquee__group gap-8 flex items-center justify-around flex-shrink-0 min-w-full">
            {aiImages.map((image, idx) => (
              <Image className="aspect-1 object-cover rounded-xl w-full h-60" src={image} alt="ai-image" key={idx} />
            ))}
          </div>
        </div>
        <div className="marquee--reverse gap-8 m-auto flex overflow-hidden mt-7" data-aos="fade-up" data-aos-easing="ease" data-aos-duration={1000}>
          <div className="marquee__group gap-8 delay-[31s] flex items-center justify-around flex-shrink-0 min-w-full">
            {aiImages2.map((image, idx) => (
              <Image className="aspect-1 object-cover rounded-xl w-full h-60" src={image} alt="ai-image" key={idx} />
            ))}
          </div>
          <div aria-hidden="true" className="marquee__group delay-[31s] gap-8 flex items-center justify-around flex-shrink-0 min-w-full">
            {aiImages2.map((image, idx) => (
              <Image className="aspect-1 object-cover rounded-xl w-full h-60" src={image} alt="ai-image" key={idx} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-12">
        <button className="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300">More Tools
          <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
        </button>
      </div>
    </section>

  )
}

export default Testimonials