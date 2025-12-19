"use client"
import Image from "next/image"
import type { CategoriesType } from "../types"
import Link from "next/link"
import IconifyIcon from "@/components/wrappers/IconifyIcon"
import { trendingCategories } from "../data"
import useCountdown from "@/hooks/useCountdown"

const CategoryCard = ({ category }: { category: CategoriesType }) => {
  const { days, hours, minutes, seconds } = useCountdown()

  const { avatar, currentBid, image, lastBid, name, username, hasTime } = category
  return (
    <div className="group relative overflow-hidden backdrop-blur-3xl bg-default-950/40 rounded-lg duration-500 ease-in-out" data-aos="zoom-in" data-aos-duration={800}>
      <div className="p-3">
        <div className="relative">
          <Image src={image} alt="" className="rounded-md" />
          <div className="absolute top-1/2 -trandefault-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 duration-500 ease-in-out">
            <button className="py-1.5 px-6 inline-flex items-center gap-2 font-semibold tracking-wide align-middle duration-500 text-base text-center border border-primary bg-primary text-white rounded-full hover:bg-primary-hover hover:border-primary-hover">Place Bid <IconifyIcon icon="lucide:navigation" className="h-4 w-4 fill-white" /></button>
          </div>
          {hasTime &&
            <div className="absolute top-0 start-0 p-2 transition-all duration-700">
              <div className="inline-flex justify-center w-full">
                <div className="bg-gradient-to-r from-rose-500 to-blue-600 py-1 px-2.5 rounded-full">
                  <p id="auction-item-1" className="flex flex-col text-white font-bold text-sm" >
                    {days} : {hours} : {minutes} : {seconds}
                  </p>
                </div>
              </div>
            </div>
          }
        </div>
        <div className="pt-3 relative">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Image src={avatar} className="rounded-full h-10 w-10" alt="avatar" />
              <span>
                <a href="#" className="text-sm font-medium text-default-100 hover:text-primary">{username}</a>
                <span className="text-xs text-default-100 block">{name}</span>
              </span>
            </div>
            <Link href="#" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center text-lg text-default-100 hover:text-red-600 focus:text-red-600"><IconifyIcon icon="mdi:heart" /></Link>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="block font-semibold text-default-100">Current Bid</span>
              <span className="inline-flex font-semibold text-primary"><IconifyIcon icon="mdi:ethereum" className="text-xl leading-none text-primary me-1" />{currentBid} ETH</span>
            </div>
            <div className="text-end">
              <span className="block font-semibold text-default-100">Last Bid</span>
              <span className="inline-flex font-semibold text-primary"><IconifyIcon icon="mdi:ethereum" className="text-xl leading-none text-primary me-1" />{lastBid} ETH</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TrendingCategories = () => {
  return (
    <section id="categories" className="py-24">
      <div className="container relative">
        <div className="flex flex-wrap items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-medium capitalize text-white mb-2">Trending Categories</h2>
            <p className="text-sm text-default-200 font-medium">Start working with Tailwindcss It allows you to compose complex designs <br /> by combining and customizing utility classes..</p>
          </div>
          <Link href="" className="inline-flex items-center justify-center gap-2 border border-white/10 text-sm text-white py-1.5 px-4 rounded-full hover:bg-primary-hover transition-all duration-300">See More <IconifyIcon icon="lucide:move-right" className="h-5 w-5" /></Link>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          {trendingCategories.map((category, idx) => (
            <CategoryCard category={category} key={idx} />
          ))}
        </div>
      </div>
    </section>

  )
}

export default TrendingCategories