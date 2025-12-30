"use client"

import * as React from "react"
import IconifyIcon from "@/components/wrappers/IconifyIcon"
import type { FeatureType } from "../types"
import { features } from "../data"

type FeatureDetails = {
  headline: string
  subhead?: string
  bullets: string[]
  workflow: { label: string; desc: string; icon: string }[]
  snapshot: { label: string; value: string; tone?: "good" | "warn" | "bad" }[]
  example: { title: string; lines: string[] }
  outcomes: string[]
}

const toneDot = (tone?: "good" | "warn" | "bad") => {
  switch (tone) {
    case "good":
      return "bg-emerald-400"
    case "warn":
      return "bg-amber-400"
    case "bad":
      return "bg-rose-400"
    default:
      return "bg-sky-400"
  }
}

const FEATURE_DETAILS: Record<string, FeatureDetails> = {
  Analytics: {
    headline: "Instant clarity across the operation — without building dashboards.",
    subhead:
      "Turn messy signals into plain-English answers: what changed, why it matters, and what to do next.",
    bullets: [
      "Role-based KPIs that update automatically (no custom report requests).",
      "Trend + anomaly detection tied to orders, batches, QC, and shipments.",
      "Executive-ready summaries you can share in 30 seconds.",
    ],
    workflow: [
      {
        label: "Ingest",
        desc: "Connect exports, spreadsheets, and system feeds (ERP/MES/QC).",
        icon: "lucide:plug-zap",
      },
      {
        label: "Normalize",
        desc: "Auto-align items, orders, lots, and timestamps to a single truth.",
        icon: "lucide:shuffle",
      },
      {
        label: "Detect",
        desc: "Spot drift, delays, and cost spikes before they become fire drills.",
        icon: "lucide:radar",
      },
      {
        label: "Explain",
        desc: "Plain-language “why” + next-step recommendations.",
        icon: "lucide:messages-square",
      },
    ],
    snapshot: [
      { label: "Orders at risk", value: "5", tone: "warn" },
      { label: "On-time outlook", value: "92%", tone: "good" },
      { label: "Top cost driver", value: "scrap (Line 3)", tone: "bad" },
      { label: "Biggest win", value: "changeover ↓ 11%", tone: "good" },
    ],
    example: {
      title: "Example: “What changed this week?”",
      lines: [
        "Scrap ↑ 18% on Line 3 (2 SKUs driving 72% of the increase)",
        "5 orders now at risk due to RM shortage + delayed PO receipt",
        "Two properties drifting toward spec limits in the last 24 hours",
      ],
    },
    outcomes: [
      "Less time hunting; more time deciding.",
      "Fewer surprises in daily standups and ops reviews.",
      "A shared narrative: what happened → why → what’s next.",
    ],
  },

  ERP: {
    headline: "A lightweight ERP layer that connects the dots — not a full rip-and-replace.",
    subhead:
      "Centralize the essentials (items, BOM, customers, orders) so everyone works from the same truth.",
    bullets: [
      "Fast search + clean, consistent masters (Item, Customer, Vendor).",
      "BOM + order context that supports planning and execution conversations.",
      "Designed for SMB speed: fewer screens, fewer clicks, clearer ownership.",
    ],
    workflow: [
      {
        label: "Capture",
        desc: "Create/clean master data with guardrails.",
        icon: "lucide:clipboard-check",
      },
      {
        label: "Link",
        desc: "Tie items → BOM → orders so downstream makes sense.",
        icon: "lucide:link-2",
      },
      {
        label: "Validate",
        desc: "Catch missing fields and mismatches early.",
        icon: "lucide:badge-check",
      },
      {
        label: "Operate",
        desc: "Use the same data for planning, shipping, and QC.",
        icon: "lucide:factory",
      },
    ],
    snapshot: [
      { label: "Open orders", value: "24", tone: "warn" },
      { label: "BOMs active", value: "312", tone: "good" },
      { label: "Data issues", value: "7", tone: "warn" },
      { label: "Lead-time risk", value: "2 items", tone: "bad" },
    ],
    example: {
      title: "Example: “What’s blocking shipment?”",
      lines: [
        "Order 10492: missing COA requirement flag (QC hold)",
        "Order 10488: packaging spec mismatch vs BOM revision",
        "Order 10476: item status inactive (receiving exception)",
      ],
    },
    outcomes: [
      "Cleaner masters = fewer downstream exceptions.",
      "Less tribal knowledge; more visible rules.",
      "Better handoffs between planning, floor, QC, shipping.",
    ],
  },

  MES: {
    headline: "Real-time plant visibility — built for the floor, not just reporting.",
    subhead:
      "Know what’s running, what’s stuck, and what’s about to go sideways — with actions attached.",
    bullets: [
      "Live status for batches/lines/cells with exceptions that are actually useful.",
      "Early warnings tied to cycle time drift, downtime, and material constraints.",
      "A simple operator flow + manager view in the same system.",
    ],
    workflow: [
      { label: "Track", desc: "Live state across batches and lines.", icon: "lucide:activity" },
      { label: "Alert", desc: "Detect drift and delays in real time.", icon: "lucide:bell-ring" },
      { label: "Resolve", desc: "Assign an action and capture outcome.", icon: "lucide:clipboard-list" },
      { label: "Learn", desc: "Feed improvements back into standards.", icon: "lucide:repeat-2" },
    ],
    snapshot: [
      { label: "Running batches", value: "6", tone: "good" },
      { label: "At risk (delay)", value: "2", tone: "warn" },
      { label: "Exceptions today", value: "3", tone: "warn" },
      { label: "Avg cycle vs target", value: "-7%", tone: "good" },
    ],
    example: {
      title: "Example: “Line falling behind”",
      lines: [
        "Cycle time drift detected on Line 3 (trend accelerating)",
        "Predicted ship-risk on 2 orders if trend continues",
        "Suggested action: adjust staffing / prioritize changeover + QC sampling",
      ],
    },
    outcomes: ["Fewer surprises late in the shift.", "Exceptions become decisions, not noise.", "Better throughput with less hero mode."],
  },

  QC: {
    headline: "QC signals that show up early — not after you’ve already shipped the problem.",
    subhead:
      "Watch specs, trends, and holds in one place — tied to batches and orders, with clear next steps.",
    bullets: [
      "Spec drift + early warnings across key properties.",
      "COA/hold status visible to ops (no surprises at shipping).",
      "Root-cause breadcrumbs: batch → raw materials → process → result.",
    ],
    workflow: [
      { label: "Sample", desc: "Capture tests with consistent context.", icon: "lucide:flask-conical" },
      { label: "Compare", desc: "Trend vs spec + historical baselines.", icon: "lucide:line-chart" },
      { label: "Decide", desc: "Hold/release with standardized reasons.", icon: "lucide:shield-check" },
      { label: "Trace", desc: "Backtrack to likely drivers quickly.", icon: "lucide:git-branch" },
    ],
    snapshot: [
      { label: "Lots in hold", value: "1", tone: "warn" },
      { label: "Specs drifting", value: "2", tone: "warn" },
      { label: "COAs due today", value: "9", tone: "good" },
      { label: "Repeat issues", value: "0", tone: "good" },
    ],
    example: {
      title: "Example: “Why did this batch fail?”",
      lines: [
        "Viscosity trend crossed baseline after RM lot change",
        "Temperature variance increased during mid-run window",
        "Suggested action: isolate RM lot + adjust target band for next run",
      ],
    },
    outcomes: ["Faster disposition decisions.", "Less rework + fewer customer escalations.", "QC becomes a leading indicator, not a postmortem."],
  },
}

function getDetails(feature: FeatureType): FeatureDetails {
  const hit = FEATURE_DETAILS[feature.name]
  if (hit) return hit

  // No placeholder language; clean generic defaults.
  return {
    headline: feature.description,
    subhead: "A concise overview of what this capability unlocks when it’s wired into your operation.",
    bullets: [
      "Clear ownership and visibility for the team.",
      "Signals that surface earlier (before small issues become big ones).",
      "Consistent actions that reduce ad-hoc hero work.",
    ],
    workflow: [
      { label: "Capture", desc: "Bring the signal in with the right context.", icon: "lucide:inbox" },
      { label: "Connect", desc: "Tie it to orders, batches, people, and timestamps.", icon: "lucide:link" },
      { label: "Explain", desc: "Summarize what changed and why it matters.", icon: "lucide:message-square" },
      { label: "Act", desc: "Recommend and track next steps.", icon: "lucide:check-circle-2" },
    ],
    snapshot: [
      { label: "Signal", value: "Live", tone: "good" },
      { label: "Risk", value: "Low", tone: "good" },
      { label: "Exceptions", value: "—", tone: "warn" },
      { label: "Next step", value: "Defined", tone: "good" },
    ],
    example: {
      title: "Example",
      lines: ["A concrete scenario will appear here once this card is mapped."],
    },
    outcomes: ["More clarity.", "Faster decisions.", "Less noise."],
  }
}

function FeatureModal({
  open,
  onClose,
  feature,
}: {
  open: boolean
  onClose: () => void
  feature: FeatureType | null
}) {
  React.useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open, onClose])

  // Lock body scroll while open (prevents background scroll/hover weirdness)
  React.useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  if (!open || !feature) return null

  const details = getDetails(feature)

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center px-4 py-6 md:py-10"
      role="dialog"
      aria-modal="true"
      aria-label={`${feature.name} details`}
    >
      {/* overlay */}
      <button
        aria-label="Close modal"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        type="button"
      />

      {/* modal shell */}
      <div className="relative w-full max-w-5xl">
        {/* modal */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-default-950/95 shadow-2xl">
          {/* top glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[720px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

          {/* header (sticky inside scroll) */}
          <div className="relative border-b border-white/10">
            <div className="flex items-start justify-between gap-4 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-2xl border border-white/10 bg-default-950/40 p-3">
                  <IconifyIcon icon={feature.icon} className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-default-400">
                    Capability
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white">
                    {feature.name}
                  </h3>
                  <p className="mt-3 max-w-3xl text-default-200">
                    <span className="font-medium text-white">{details.headline}</span>
                    {details.subhead ? (
                      <span className="text-default-300"> {" — "}{details.subhead}</span>
                    ) : null}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="shrink-0 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-default-200 hover:bg-white/10 hover:text-white transition"
                type="button"
              >
                Close
              </button>
            </div>
          </div>

          {/* content area: scrolls instead of pushing off screen */}
          <div className="max-h-[calc(100vh-10rem)] overflow-y-auto">
            <div className="relative grid gap-6 p-6 md:grid-cols-2 md:p-8">
              {/* Left column */}
              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-default-950/40 p-6">
                  <h4 className="text-lg font-semibold text-white">What you get</h4>
                  <ul className="mt-4 space-y-3">
                    {details.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 text-default-200">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-white/10 bg-default-950/40 p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-white">How it works</h4>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-default-200">
                      simple flow
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    {details.workflow.map((s, i) => (
                      <div
                        key={i}
                        className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-4"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                          <IconifyIcon icon={s.icon} className="h-5 w-5 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-white">{s.label}</p>
                          <p className="text-sm text-default-200">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-default-950/40 p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-white">Executive snapshot</h4>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-default-200">
                      live signal
                    </span>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {details.snapshot.map((row, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <span className={`h-2.5 w-2.5 rounded-full ${toneDot(row.tone)}`} />
                          <span className="text-sm font-medium text-default-100">{row.label}</span>
                        </div>
                        <span className="text-sm font-semibold text-white">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-default-950/40 p-6">
                  <h4 className="text-lg font-semibold text-white">{details.example.title}</h4>
                  <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <ul className="space-y-2 text-default-200">
                      {details.example.lines.map((l, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-default-300" />
                          <span className="text-sm">{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5">
                    <h5 className="text-sm font-semibold text-white">Outcome</h5>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {details.outcomes.map((o, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-default-200"
                        >
                          {o}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* footer */}
            <div className="border-t border-white/10 p-6 md:px-8 md:py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="text-sm text-default-200">
                Tip: keep each modal <span className="text-white font-medium">one scroll</span>. Clarity wins.
              </div>
              <div className="flex gap-3">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-default-100 hover:bg-white/10 hover:text-white transition"
                >
                  View pricing
                  <IconifyIcon icon="lucide:arrow-right" className="ml-2 h-4 w-4 text-primary" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
                >
                  Request beta access
                  <IconifyIcon icon="lucide:sparkles" className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const FeatureCard = ({
  description,
  icon,
  name,
  onOpen,
}: FeatureType & { onOpen: () => void }) => {
  return (
    <div
      className="group border border-white/10 bg-default-950/40 overflow-hidden rounded-3xl p-10 cursor-pointer"
      data-aos="fade-up"
      data-aos-easing="ease"
      data-aos-duration={1000}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onOpen()
      }}
    >
      <div className="transition-all duration-700">
        <div className="flex flex-col">
          <div className="relative">
            <div className="opacity-100">
              <div className="group-hover:w-10 pb-12 group-hover:pb-8 transition-all duration-700">
                <IconifyIcon
                  icon={icon}
                  className="h-12 w-12 group-hover:h-8 group-hover:w-8 text-primary transition-all duration-700"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-medium text-white">{name}</h4>
            <p className="text-default-200 mt-3">{description}</p>

            {/* Read more row (no extra hover helper text) */}
            <div className="h-3 transition-all duration-700 group-hover:pt-6 overflow-hidden -mb-3">
              <div className="opacity-0 transition-all duration-500 group-hover:opacity-100">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    onOpen()
                  }}
                  className="text-base text-default-200 pb-5 flex items-center hover:text-white transition"
                >
                  Read more{" "}
                  <IconifyIcon
                    icon="lucide:chevron-right"
                    className="h-5 w-5 text-primary"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Features = () => {
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<FeatureType | null>(null)

  const openFor = (f: FeatureType) => {
    setSelected(f)
    setOpen(true)
  }

  const close = () => {
    setOpen(false)
    setTimeout(() => setSelected(null), 50)
  }

  return (
    <section id="features" className="py-20">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-medium capitalize text-white mb-4">
              What can Vantage Pro do for your team?
            </h2>
          </div>
        </div>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard {...feature} key={idx} onOpen={() => openFor(feature)} />
          ))}
        </div>
      </div>

      <FeatureModal open={open} onClose={close} feature={selected} />
    </section>
  )
}

export default Features
