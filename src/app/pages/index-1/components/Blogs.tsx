import IconifyIcon from "@/components/wrappers/IconifyIcon"
import type { BlogType } from "../types"
import Image from "next/image"
import { blogs } from "../data"

const BlogCard = ({ date, description, image, title }: BlogType) => {
  return (
    <div className="bg-default-950/40 backdrop-blur-3xl group rounded-lg space-y-6 overflow-hidden p-3" data-aos="fade-right" data-aos-easing="ease" data-aos-duration={1000}>
      <div className="relative rounded-lg overflow-hidden">
        <Image className="mx-auto h-full max-w-full object-cover object-top ransition duration-500 group-hover:scale-105" src={image} alt="image" />
        <div className="absolute inset-0">
          <div className="bg-black/60 h-full w-full rounded">
            <div className="flex items-end h-full p-4">
              <div>
                <p className="mb-2 text-white font-semibold">{date}</p>
                <h5 className="text-3xl font-bold text-white mb-4">{title}</h5>
                <p className="text-base font-semibold text-default-100 mb-6 whitespace-nowrap md:whitespace-normal truncate"> {description}</p>
                <a href="#" className="text-white border-b border-dashed border-default-200 pb-1">Read More <IconifyIcon icon="lucide:move-right" className="inline h-4 w-4 ms-2" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Blogs = () => {
  return (
    <section id="blog" className="pb-24">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-medium capitalize text-white mb-2">Resources Blog &amp; news</h2>
            <p className="text-sm text-default-200 font-medium">Start working with Tailwindcss It allows you to compose complex designs <br /> by combining and customizing utility classes..</p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 border border-white/10 text-sm text-white py-1.5 px-4 rounded-full hover:bg-primary-hover transition-all duration-300">See All <IconifyIcon icon="lucide:move-right" className="h-5 w-5" /></button>
        </div>
        <div className="grid gap-4 px-4 sm:px-0 lg:grid-cols-2">
          {blogs.map((blog, idx) => (
            <BlogCard {...blog} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blogs