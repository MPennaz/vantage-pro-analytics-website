import Image from "next/image"
import type { SellerType } from "../types"
import { currency } from "@/common/constants"
import { sellersData } from "../data"
import IconifyIcon from "@/components/wrappers/IconifyIcon"
import Link from "next/link"

const SellerCard = ({ seller }: { seller: SellerType }) => {
  const { amount, avatar, images, name, id } = seller
  return (
    <div className="bg-default-950/40 rounded-xl backdrop-blur-3xl" data-aos="zoom-in-up" data-aos-duration={800}>
      <div className="flex items-center border-b border-dashed border-white/20 p-4">
        {images.map((image, idx) => (
          <div className="w-1/2 p-1" key={idx}>
            <Image src={image} className="rounded-md" alt="image" />
          </div>
        ))}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between w-full mb-6">
          <Image alt="avatar" src={avatar} className="w-14 h-14 rounded-full" />
          <h3 className="text-3xl font-semibold text-default-100/60">0{id}</h3>
        </div>
        <div className="flex items-end justify-between mb-4">
          <div>
            <h5 className="font-medium text-xl flex items-center text-white mb-2">{name}</h5>
            <p className="text-xs text-default-200"> Total earnings: <span className="font-medium text-white">{currency}{amount} </span></p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 border border-white/10 text-sm text-white py-1.5 px-4 rounded-full hover:bg-primary-hover transition-all duration-300">View Detail</button>
        </div>
      </div>
    </div>
  )
}

const Sellers = () => {
  return (
    <section id="sellers" className="pb-24">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-medium capitalize text-white mb-2">Top Sellers</h2>
            <p className="text-sm text-default-200 font-medium">Start working with Tailwindcss It allows you to compose complex designs <br /> by combining and customizing utility classes..</p>
          </div>
          <Link href="" className="inline-flex items-center justify-center gap-2 border border-white/10 text-sm text-white py-1.5 px-4 rounded-full hover:bg-primary-hover transition-all duration-300">View All <IconifyIcon icon="lucide:move-right" className="h-5 w-5" /></Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {sellersData.map((seller, idx) => (
            <SellerCard seller={seller} key={idx} />
          ))}
        </div>
      </div>
    </section>

  )
}

export default Sellers