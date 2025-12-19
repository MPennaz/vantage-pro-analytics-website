import { splitArray } from "@/utils/array"
import { faqData } from "../data"
import IconifyIcon from "@/components/wrappers/IconifyIcon"
import { cn } from "@/helpers/cn"

const Faqs = () => {
  const faqChunks = splitArray(faqData, 3)
  return (
    <section id="faq" className="pb-24">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-medium capitalize text-white mb-2">Faqs</h2>
            <p className="text-sm text-default-200 font-medium">Start working with Tailwindcss It allows you to compose complex designs <br /> by combining and customizing utility classes..</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {faqChunks.map((chunk, idx) => (
            <div className="hs-accordion-group space-y-4" data-aos="fade-right" data-aos-easing="ease" data-aos-duration={1000} key={idx}>
              {chunk.map((faq, idx) => (
                <div className={cn("hs-accordion border border-white/10 bg-default-950/40 backdrop-blur-3xl rounded-lg overflow-hidden", { 'active': idx === 0 })} id={`faq-${faq.id}`} key={idx}>
                  <button className="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-white transition-all active" aria-controls={`faq-${faq.id}`}>
                    <h5 className="text-base font-semibold flex">
                      <IconifyIcon icon="lucide:circle-help" className="h-5 w-5 stroke-white me-3" />
                      {faq.question}
                    </h5>
                    <IconifyIcon icon="lucide:chevron-up" className="h-4 w-4 transition-all duration-500 hs-accordion-active:-rotate-180" />
                  </button>
                  <div id={`faq-${faq.id}`} className={cn("hs-accordion-content w-full overflow-hidden transition-[height] duration-300", { 'hidden': idx != 0 })} aria-labelledby={`faq-${faq.id}`}>
                    <div className="px-6 pb-4 pt-0">
                      <p className="text-default-300 text-sm font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default Faqs