import IconifyIcon from "@/components/wrappers/IconifyIcon"
import Link from "next/link"
import { features } from "../data"
import type { FeatureType } from "../types"

const FeatureCard = ({ description, icon, name }: FeatureType) => {
  return (
    <div className="p-10 rounded-lg bg-default-950/40" data-aos="fade-up" data-aos-easing="ease" data-aos-duration={1000}>
      <div className="text-center">
        <IconifyIcon icon={icon} className="h-10 w-10 text-primary mx-auto" />
        <h2 className="text-2xl font-medium text-default-200 mt-4">{name}</h2>
        <p className="text-base font-normal text-default-300 mt-4">{description}</p>
        <Link href="#" className="inline-flex gap-2 items-center relative text-primary group mt-5">
          <span className="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0" />
          Lead more <IconifyIcon icon="lucide:move-right" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section id="features" className="pb-24">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-medium capitalize text-white mb-4">The AI Generator that helps you Create amazing image taster.</h2>
          </div>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard {...feature} key={idx} />
          ))}
        </div>
      </div>
    </section>

  )
}

export default Features