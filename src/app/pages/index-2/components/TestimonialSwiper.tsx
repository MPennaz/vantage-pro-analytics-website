"use client"
import Image from "next/image"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import IconifyIcon from "@/components/wrappers/IconifyIcon"

import avatar1 from '@/assets/images/avatars/img-1.png'
import avatar2 from '@/assets/images/avatars/img-2.png'
import avatar3 from '@/assets/images/avatars/img-3.png'
import avatar4 from '@/assets/images/avatars/img-4.png'
import avatar5 from '@/assets/images/avatars/img-5.png'
import avatar6 from '@/assets/images/avatars/img-6.png'

import { testimonialData } from "../data"

import 'swiper/css'
import 'swiper/css/pagination'

const TestimonialSwiper = () => {
  return (
    <section className="pb-24" data-aos="fade-up" data-aos-easing="ease" data-aos-duration={1000}>
      <div className="container">
        <div className="bg-default-950/20 backdrop-blur-sm rounded-xl relative md:p-20 p-6">
          <div className="hidden lg:block">
            <div className="absolute h-14 w-14 top-10 start-32 -z-1">
              <Image src={avatar1}  className="rounded-full" alt="avatar-1" />
            </div>
            <div className="absolute h-14 w-14 top-64 start-10 -z-1">
              <Image src={avatar2} className="rounded-full" alt="avatar-2" />
            </div>
            <div className="absolute h-14 w-14 bottom-10 start-32 -z-1">
              <Image src={avatar3} className="rounded-full" alt="avatar-3" />
            </div>
            <div className="absolute h-14 w-14 top-10 end-32 -z-1">
              <Image src={avatar4} className="rounded-full" alt="avatar-4" />
            </div>
            <div className="absolute h-14 w-14 top-64 end-10 -z-1">
              <Image src={avatar5} className="rounded-full" alt="avatar-5" />
            </div>
            <div className="absolute h-14 w-14 bottom-10 end-32 -z-1">
              <Image src={avatar6} className="rounded-full" alt="avatar-6" />
            </div>
          </div>
          {/* Swiper */}
          <Swiper
            modules={[Autoplay, Pagination]}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            className="testimonial-swiper">
            {testimonialData.map((item, idx) => (
              <SwiperSlide key={idx} className="pb-20">
                <div className="max-w-2xl mx-auto text-center">
                  <IconifyIcon icon="lucide:quote" className="w-8 h-8 mx-auto fill-primary text-primary" />
                  <p className="text-lg font-medium text-default-200 mt-7">{item.description}</p>
                  <Image src={item.avatar} width={64} height={64}  className="h-16 rounded-full mx-auto my-8" alt="" />
                  <h2 className="text-xl font-medium text-default-200">{item.name}</h2>
                  <p className="text-sm font-normal text-default-400 mt-1">{item.role}</p>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <IconifyIcon icon="lucide:star" className="h-4 w-4 text-yellow-300" />
                    <IconifyIcon icon="lucide:star" className="h-4 w-4 text-yellow-300" />
                    <IconifyIcon icon="lucide:star" className="h-4 w-4 text-yellow-300" />
                    <IconifyIcon icon="lucide:star" className="h-4 w-4 text-yellow-300" />
                    <IconifyIcon icon="lucide:star" className="h-4 w-4 text-yellow-300" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination pt-5" />
          </Swiper>
        </div>
      </div>
    </section >

  )
}

export default TestimonialSwiper