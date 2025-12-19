import Link from 'next/link'
import React from 'react'
import logo from '@/assets/images/logo.png'
import Image from 'next/image'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Footer from '@/components/Footer'
import { footerLinks } from '../data'

const Footer1 = () => {
  const socialIcons = ['lucide:facebook', 'lucide:instagram', 'lucide:twitter', 'lucide:linkedin']

  return (
    <footer className="bg-default-950/40 backdrop-blur-3xl">
      <div className="container lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between gap-14 py-24">
          <div className="lg:w-3/12">
            <Link href="/" className="flex items-center gap-2 logo">
              <Image src={logo} className="w-36" alt="logo" />
            </Link>
            <p className="text-default-200 text-sm font-medium max-w-xs mt-6">Start working with Tailwindcss It allows you to compose complex designs by combining and customizing utility classes.</p>
            <h5 className="text-default-200 text-base font-semibold mb-4 mt-6">Follow Us :</h5>
            <ul className="flex flex-wrap items-center gap-1">
              {socialIcons.map((icon, idx) => (
                <li key={idx}>
                  <Link href="" className="h-8 w-8 inline-flex items-center justify-center border border-white/10 rounded-md transition-all duration-500 group hover:bg-primary"><IconifyIcon icon={icon} className="h-4 w-4 text-default-300 group-hover:text-white" /></Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-8/12">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
              {footerLinks.map((item, idx) => (
                <div key={idx}>
                  <ul className="flex flex-col gap-3">
                    <h5 className="xl:text-xl lg:text-lg font-semibold text-default-200 mb-2">{item.title}</h5>
                    {item.links.map((link, idx) => (
                      <li key={idx}>
                        <Link href="" className="inline-flex items-center gap-2 text-base font-semibold text-default-100 hover:text-primary transition-all"><IconifyIcon icon="lucide:circle-slash" className="inline-block h-4 w-4" />{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </footer>

  )
}

export default Footer1