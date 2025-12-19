'use client'
const GlightBox = dynamic(() => import("@/components/GlightBox"),{ssr:false})
import Image from "next/image"
import { browseByCategoryData, showcaseImages } from "../data"
import IconifyIcon from "@/components/wrappers/IconifyIcon"
import Link from "next/link"
import dynamic from "next/dynamic"

const Showcase = () => {
  const diamondIcon = <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-lucide="diamond" className="lucide lucide-diamond h-24 w-24 fill-primary/10 group-hover:fill-white/20"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" /></svg>

  return (
    <>
      <section id="showcase" className="pb-24" data-aos="zoom-out" data-aos-duration={800}>
        <div className="container">
          <div className="flex flex-wrap items-center justify-between mb-10">
            <div>
              <h2 className="text-4xl font-medium capitalize text-white mb-2">The Best showcase</h2>
              <p className="text-sm text-default-200 font-medium">Start working with Tailwindcss It allows you to compose complex designs <br /> by combining and customizing utility classes..</p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 border border-white/10 text-sm text-white py-1.5 px-4 rounded-full hover:bg-primary-hover transition-all duration-300">See More <IconifyIcon icon="lucide:move-right" className="h-5 w-5" /></button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 rounded-xl overflow-hidden">
            {showcaseImages.map((image, idx) => (
              <GlightBox href={image.src} className="glightbox overflow-hidden" key={idx}>
                <Image src={image} className="w-full rounded-lg md:rounded-none object-cover hover:scale-110 transition-all duration-1000" alt="art-image" />
              </GlightBox>
            ))}

          </div>
        </div>
      </section>

      <section className="pb-24" data-aos="zoom-out" data-aos-easing="ease" data-aos-duration={1000}>
        <div className="container">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-px rounded-xl overflow-hidden">
            <div className="group relative bg-slate-950/40 backdrop-blur-3xl transition-all duration-500 hover:bg-primary/40 overflow-hidden">
              <div className="p-6">
                <div className="relative h-24 w-24 overflow-hidden text-transparent">
                  {diamondIcon}
                  <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-primary rounded-xl group-hover:text-white duration-500 inline-flex justify-center items-center">
                    <IconifyIcon icon="lucide:wallet" className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="" className="text-xl font-medium text-white duration-500">Set up your wallet</Link>
                  <p className="text-default-300 group-hover:text-white/80 duration-500 mt-3">Use Trust Wallet, Metamask or any wallet to connect to the app.</p>
                  <p className="text-default-300 group-hover:text-white/80 duration-500 mt-2">You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.</p>
                </div>
              </div>
            </div>
            <div className="group relative bg-slate-950/40 backdrop-blur-3xl transition-all duration-500 hover:bg-primary/40 overflow-hidden">
              <div className="p-6">
                <div className="relative inline-block overflow-hidden text-transparent">
                  {diamondIcon}
                  <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-primary rounded-xl group-hover:text-white duration-500 inline-flex justify-center items-center">
                    <IconifyIcon icon="lucide:shapes" className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="" className="text-xl font-medium text-white duration-500">Create your collection</Link>
                  <p className="text-default-300 group-hover:text-white/80 duration-500 mt-3">Upload your NFTs and set a title, description and price.</p>
                  <p className="text-default-300 group-hover:text-white/80 duration-500 mt-2">You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24" data-aos="zoom-out" data-aos-duration={800}>
        <div className="container">
          <div className="flex flex-wrap items-center justify-between mb-10">
            <div>
              <h2 className="text-4xl font-medium capitalize text-white mb-2">Browse by categories</h2>
              <p className="text-sm text-default-200 font-medium">Start working with Tailwindcss It allows you to compose complex designs <br /> by combining and customizing utility classes..</p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 border border-white/10 text-sm text-white py-1.5 px-4 rounded-full hover:bg-primary-hover transition-all duration-300">See All <IconifyIcon icon="lucide:move-right" className="h-5 w-5" /></button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {browseByCategoryData.map((category, idx) => (
              <div className="relative rounded-xl overflow-hidden" key={idx}>
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute top-0 start-0 p-4">
                  <Link href="" className="inline-flex items-center justify-center gap-2 border border-primary text-base bg-primary text-white py-1.5 px-6 rounded-full hover:bg-primary-hover transition-all duration-300">{category.category}</Link>
                </div>
                <Image src={category.image} alt="art" />
              </div>
            ))}
          </div>
        </div>
      </section>


    </>

  )
}

export default Showcase