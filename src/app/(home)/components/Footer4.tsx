// src/app/pages/index-4/components/Footer4.tsx
import Image from "next/image"
import logo from "@/assets/images/logo.png"
import IconifyIcon from "@/components/wrappers/IconifyIcon"
import Footer from "@/components/Footer"

const Footer4 = () => {
  const socialLinks = [
    {
      icon: "lucide:linkedin",
      href: "https://www.linkedin.com/company/vantage-pro-analytics/",
      label: "LinkedIn",
    },
    {
      icon: "lucide:facebook",
      href: "https://www.facebook.com/profile.php?id=61581765101243",
      label: "Facebook",
    },
  ]

  return (
    <footer
      className="bg-default-950/40 backdrop-blur-3xl"
      data-aos="fade-down"
      data-aos-easing="ease"
      data-aos-duration={1000}
    >
      <div className="container lg:px-20 py-20 text-center space-y-6">
        {/* Logo */}
        <Image
          src={logo}
          width={179}
          height={56}
          className="h-14 mx-auto"
          alt="Vantage Pro Analytics"
        />

        {/* Tagline */}
        <p className="text-sm text-default-400 font-medium">
          Smart manufacturing tools for modern operations
        </p>

        {/* Social */}
        <div>
          <h6 className="text-sm font-semibold text-white mb-3">
            Follow us
          </h6>
          <ul className="flex items-center justify-center gap-3">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="h-10 w-10 inline-flex items-center justify-center border border-white/10 rounded-lg transition-all duration-300 hover:bg-primary"
                >
                  <IconifyIcon
                    icon={item.icon}
                    className="h-5 w-5 text-default-300 hover:text-white"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Legal + copyright */}
      <Footer />
    </footer>
  )
}

export default Footer4
