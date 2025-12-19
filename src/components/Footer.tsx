// src/components/Footer.tsx

import { currentYear } from "@/common/constants"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="border-t border-white/10 py-6">
      <div className="container lg:px-20 flex flex-wrap items-center justify-center gap-4 md:justify-between text-center md:text-left">
        <p className="text-sm font-medium text-default-400">
          © {currentYear} Vantage Pro Analytics
        </p>

        <div className="flex gap-4 text-sm font-medium text-default-400">
          <Link
            href="/privacy"
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-white transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
