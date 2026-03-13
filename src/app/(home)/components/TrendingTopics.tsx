// src/app/(home)/components/TrendingTopics.tsx
"use client"

import IconifyIcon from "@/components/wrappers/IconifyIcon"

type Differentiator = {
  icon: string
  headline: string
  body: string
  contrast: string
}

const differentiators: Differentiator[] = [
  {
    icon: "lucide:hard-hat",
    headline: "Built by manufacturers, for manufacturers.",
    body: "Our founder spent 10+ years as Lead Software Architect inside a billion-dollar chemical manufacturer — building the MES, QC, and ERP systems that kept production running every day. VPA wasn't designed from a textbook. It was designed from the plant floor.",
    contrast: "Not by consultants who learned manufacturing from a slide deck.",
  },
  {
    icon: "lucide:sparkles",
    headline: "AI built in from day one. Not bolted on.",
    body: "Ask questions in plain English and get answers tied to real batches, orders, and QC results. Natural-language queries, document intelligence, and role-aware insights are core to the platform — not an upsell or an afterthought.",
    contrast: "Not AI retrofitted onto 20-year-old architecture.",
  },
  {
    icon: "lucide:timer",
    headline: "Live in 4\u20138 weeks. Not 18 months.",
    body: "Cloud-native and designed for fast deployment. Most customers are running production data within weeks. No consultants required to go live. No multi-year project. You don't need to pause operations to get started.",
    contrast: "Not a $500K implementation that takes two years and three consultants.",
  },
  {
    icon: "lucide:layers",
    headline: "One platform. Every department.",
    body: "Inventory, purchasing, orders, shipping, BOM, MES, QC, and analytics — all in one system. No toggling between a spreadsheet, a separate QC tool, a legacy ERP, and a BI dashboard that's always three days behind.",
    contrast: "Not five systems that almost-but-don't-quite talk to each other.",
  },
  {
    icon: "lucide:shield-check",
    headline: "Audit-ready in seconds, not weeks.",
    body: "Full lot traceability from receipt to shipment is built into the core — not a reporting add-on. When the auditor shows up, you're ready. When a customer calls about a batch, you have the answer in seconds.",
    contrast: "Not two weeks of spreadsheet archaeology before you can respond.",
  },
  {
    icon: "lucide:monitor-check",
    headline: "The ERP your team will actually use.",
    body: "Modern, clean, and role-aware. The operator sees what matters to them. The plant manager sees something different. The QC tech sees their queues. The right interface for the right person — all from the same system.",
    contrast: "Not ERP forms designed in 2005 that your floor team avoids at all costs.",
  },
]

const DiffCard = ({ icon, headline, body, contrast }: Differentiator) => (
  <div
    className="rounded-2xl border border-white/10 bg-default-950/40 p-6 flex flex-col gap-4"
    data-aos="fade-up"
    data-aos-easing="ease"
    data-aos-duration={1000}
  >
    <div className="flex items-start gap-4">
      <div className="shrink-0 rounded-xl border border-white/10 bg-primary/10 p-3">
        <IconifyIcon icon={icon} className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-white leading-snug pt-1">{headline}</h3>
    </div>
    <p className="text-sm font-medium text-default-200 leading-relaxed">{body}</p>
    <div className="mt-auto flex items-start gap-2 border-t border-white/5 pt-4">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
      <p className="text-xs text-default-400 italic leading-relaxed">{contrast}</p>
    </div>
  </div>
)

const WhyVPA = () => {
  return (
    <section id="why-us" className="py-20">
      <div className="container">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Why VPA
          </p>
          <h2 className="text-3xl font-medium text-white mb-4">
            The tools Fortune 500 companies take for granted —
            <br className="hidden md:block" /> built for operations like yours.
          </h2>
          <p className="text-sm text-default-200 font-medium">
            No $500K implementation. No 18-month timeline. No ERP that only a consultant can run.
          </p>
        </div>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {differentiators.map((d, idx) => (
            <DiffCard key={idx} {...d} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyVPA
