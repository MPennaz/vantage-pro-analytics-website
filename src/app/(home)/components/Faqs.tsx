// src/app/(home)/components/Faqs.tsx
import { cn } from "@/helpers/cn"
import { faqs } from "../data"
import IconifyIcon from "@/components/wrappers/IconifyIcon"

const Faqs = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container">
        <div className="grid xl:grid-cols-2 gap-6">
          {/* Left side: intro + CTA */}
          <div
            className="xl:text-start text-center"
            data-aos="fade-right"
            data-aos-easing="ease"
            data-aos-duration={1000}
          >
            <h2 className="text-3xl font-medium capitalize text-white mb-4">
              Frequently asked questions
            </h2>
            <p className="text-sm text-default-200 font-medium">
              Straight answers to the most common questions manufacturers ask
              about Vantage Pro Analytics.
            </p>
            <button
              className="mt-10 inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300"
            >
              Still have questions?
              <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
            </button>
          </div>

          {/* Right side: accordion */}
          <div
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-duration={1000}
          >
            <div className="hs-accordion-group space-y-4">
              {faqs.map((faq, idx) => {
                const accordionId = `faq-${faq.id}`
                const panelId = `faq-panel-${faq.id}`
                const isFirst = idx === 0

                return (
                  <div
                    key={faq.id}
                    className={cn(
                      "hs-accordion border border-white/10 bg-default-950/40 backdrop-blur-3xl rounded-lg overflow-hidden",
                      { active: isFirst }
                    )}
                    id={accordionId}
                  >
                    <button
                      className="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-white transition-all"
                      aria-controls={panelId}
                    >
                      <h5 className="text-base font-semibold flex">
                        <IconifyIcon
                          icon="lucide:circle-help"
                          className="h-5 w-5 stroke-white align-middle me-3"
                        />
                        {faq.question}
                      </h5>
                      <IconifyIcon
                        icon="lucide:chevron-up"
                        className="h-4 w-4 transition-all duration-500 hs-accordion-active:-rotate-180"
                      />
                    </button>
                    <div
                      id={panelId}
                      className={cn(
                        "hs-accordion-content w-full overflow-hidden transition-[height] duration-300",
                        { hidden: !isFirst }
                      )}
                      aria-labelledby={accordionId}
                    >
                      <div className="px-6 pb-4 pt-0">
                        <p className="text-default-300 text-sm font-medium mb-2">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faqs
