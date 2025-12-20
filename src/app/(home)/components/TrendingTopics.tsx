// src/app/(home)/components/TrendingTopics.tsx

import type { TopicType } from "../types"
import { trendingTopics } from "../data"


const TopicCard = ({  description, title, id }: TopicType) => {
  return (
    <div
      className="rounded-lg border border-white/10 bg-default-950/40 p-6"
      data-aos="fade-up"
      data-aos-easing="ease"
      data-aos-duration={1000}
    >
      <div className="flex gap-5">
        <div>
          <div className="mt-2 h-8 w-8 text-xl font-semibold text-primary rounded-md bg-primary/20 flex items-center justify-center">
            {id}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-medium text-white">{title}</h2>
          <p className="text-base font-medium text-default-200 mt-1">
            {description}
          </p>         
          
        </div>
      </div>
    </div>
  )
}

const UseCases = () => {
  return (
    <section id="why-us" className="py-20">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-medium capitalize text-white mb-4">
              Where VPA fits in your operation
            </h2>
            <p className="text-sm text-default-200 font-medium">
              Vantage Pro Analytics is built for manufacturers who are ready to
              move beyond spreadsheets, tribal knowledge and rigid ERP screens.
              Here are example scenarios where VPA is designed to make the most
              impact.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {trendingTopics.map((topic, idx) => (
            <TopicCard {...topic} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases
