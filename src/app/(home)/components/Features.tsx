// src/app/(home)/components/Features.tsx
"use client"

import * as React from "react"
import IconifyIcon from "@/components/wrappers/IconifyIcon"
import type { FeatureType } from "../types"
import { features } from "../data"

type FeatureDetails = {
  headline: string
  subhead?: string

  /**
   * Outcome-first (benefit). Keep these crisp.
   */
  bullets: string[]

  /**
   * Workflow-first (what it does). Keep this tight.
   */
  workflow: { label: string; desc: string; icon: string }[]

  /**
   * Optional “at-a-glance signals” section.
   * We’re intentionally NOT calling this “Executive Snapshot” (confusing / vague).
   */
  signals?: { label: string; value: string; tone?: "good" | "warn" | "bad" }[]

  example: { title: string; lines: string[] }

  /**
   * Short “what changes for you” outcomes.
   */
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

/**
 * NOTE ON THE “SURFACE” WORD:
 * We’re removing it everywhere. It reads vague.
 * Prefer: flag, highlight, pinpoint, identify, detect, expose risk.
 *
 * STRUCTURE STRATEGY:
 * - “What you get” = outcome-first (benefit)
 * - “How it works” = workflow-first (what it does)
 * - “At-a-glance signals” = optional; only show when useful
 */
const FEATURE_DETAILS: Record<string, FeatureDetails> = {
  "For Plant Managers": {
    headline: "See what's running, blocked, and at risk — without chasing down a dozen people.",
    subhead: "Batches, lines, and exceptions roll up into one live view instead of a whiteboard, a group chat, and a shared spreadsheet.",
    bullets: [
      "Live batch and line status without refreshing five different screens.",
      "Late orders and exceptions surface automatically — no morning standup needed to know what's on fire.",
      "Drill into the source of any delay in seconds.",
    ],
    workflow: [
      { label: "Track", desc: "Live state across all batches and lines.", icon: "lucide:activity" },
      { label: "Flag", desc: "Exceptions and delays surface without anyone having to look for them.", icon: "lucide:alert-triangle" },
      { label: "Prioritize", desc: "Focus the team on what actually needs attention right now.", icon: "lucide:list-ordered" },
      { label: "Close", desc: "Capture the resolution and keep the record clean.", icon: "lucide:check-circle-2" },
    ],
    signals: [
      { label: "Batches running", value: "6", tone: "good" },
      { label: "Behind schedule", value: "2", tone: "warn" },
      { label: "Open exceptions", value: "3", tone: "warn" },
      { label: "On-time outlook", value: "91%", tone: "good" },
    ],
    example: {
      title: 'Example: "What\'s running late right now?"',
      lines: [
        "3 batches behind schedule — 2 tied to the same RM shortage",
        "Line 2 downtime event logged 40 min ago, no resolution captured yet",
        "5 orders due today: 4 on track, 1 flagged for QC hold",
      ],
    },
    outcomes: ["Full shift visibility in one screen.", "Faster recovery when things go sideways.", "Less time chasing status — more time running the plant."],
  },

  "For QC & Lab": {
    headline: "Every test result tied to the batch, the spec, and the shipment — no more paper binders.",
    subhead: "Catch drift before it becomes a hold. Give ops and shipping the QC status they need without playing phone tag.",
    bullets: [
      "Spec limits and trend history for every property in one place.",
      "COA status visible to shipping and ops — no surprises at the dock.",
      "Hold/release decisions with standardized reasons and a full audit trail.",
    ],
    workflow: [
      { label: "Sample", desc: "Log test results with batch, lot, and method context.", icon: "lucide:flask-conical" },
      { label: "Compare", desc: "Auto-check against spec limits and trend baselines.", icon: "lucide:line-chart" },
      { label: "Decide", desc: "Hold or release with a documented reason — one click.", icon: "lucide:shield-check" },
      { label: "Trace", desc: "Pinpoint the likely driver when something's off.", icon: "lucide:git-branch" },
    ],
    signals: [
      { label: "Lots on hold", value: "1", tone: "warn" },
      { label: "Specs drifting", value: "2", tone: "warn" },
      { label: "COAs due today", value: "9", tone: "good" },
      { label: "Repeat failures", value: "0", tone: "good" },
    ],
    example: {
      title: 'Example: "Why is Lot 24-0019 on hold?"',
      lines: [
        "Viscosity out of spec — 3 consecutive samples trending up since RM lot change",
        "Hold applied; ops and shipping notified automatically",
        "Same RM lot tied to 2 other batches — both flagged for review",
      ],
    },
    outcomes: ["Audit-ready records, always.", "Faster disposition with less back-and-forth.", "QC catches problems before they reach the customer."],
  },

  "For Logistics & Customer Service": {
    headline: "Promise dates your customers can rely on — because you can see what's actually ready.",
    subhead: "Stop calling the floor to find out if an order can ship. Connect inventory, QC release, and production status in one view.",
    bullets: [
      "Real-time order and shipment status without calling the plant.",
      "Lot availability and QC release status visible at the time of promise.",
      "Exceptions flagged before they become missed commitments.",
    ],
    workflow: [
      { label: "Check", desc: "See current order status and what's blocking shipment.", icon: "lucide:search" },
      { label: "Confirm", desc: "Verify lot availability and QC release status in one place.", icon: "lucide:package-check" },
      { label: "Commit", desc: "Promise a ship date backed by actual plant data.", icon: "lucide:calendar-check" },
      { label: "Track", desc: "Monitor through to confirmed shipment.", icon: "lucide:truck" },
    ],
    signals: [
      { label: "Orders ready to ship", value: "12", tone: "good" },
      { label: "Awaiting QC release", value: "3", tone: "warn" },
      { label: "At risk (late)", value: "2", tone: "bad" },
      { label: "On-time rate (30d)", value: "94%", tone: "good" },
    ],
    example: {
      title: 'Example: "Can we ship Order 10492 tomorrow?"',
      lines: [
        "Product on hand: yes. Lot 24-0017 — released, COA available.",
        "Packaging in stock. No exceptions flagged.",
        "Answer: Yes. Ship date confirmed without calling the floor.",
      ],
    },
    outcomes: ["Fewer customer escalations.", "Ship dates backed by real data, not guesses.", "Less time playing telephone between the office and the floor."],
  },

  "For Executives & Finance": {
    headline: "The numbers you need for decisions — not a three-day data pull.",
    subhead: "Throughput, scrap, margin, and service level across all sites. Board-deck-ready summaries without asking ops to compile a report.",
    bullets: [
      "KPIs that update automatically across plants and product lines.",
      "Cost drivers and service-level risks surface before they appear in the financials.",
      "Export summaries in plain language — not raw data dumps.",
    ],
    workflow: [
      { label: "Connect", desc: "Pull live data from production, QC, and shipping.", icon: "lucide:plug-zap" },
      { label: "Normalize", desc: "Align metrics across sites and product lines.", icon: "lucide:shuffle" },
      { label: "Highlight", desc: "Surface what moved, what's at risk, and what's costing money.", icon: "lucide:radar" },
      { label: "Report", desc: "Plain-language summaries ready for ops reviews and board decks.", icon: "lucide:presentation" },
    ],
    signals: [
      { label: "Throughput vs target", value: "94%", tone: "good" },
      { label: "Scrap (vs last month)", value: "+22%", tone: "bad" },
      { label: "On-time delivery", value: "91%", tone: "warn" },
      { label: "Cost driver flagged", value: "Line 3 scrap", tone: "bad" },
    ],
    example: {
      title: 'Example: "How did we perform this month?"',
      lines: [
        "Throughput: 94% of target — Line 3 responsible for 60% of shortfall",
        "Scrap up 22% vs prior month — 3 SKUs driving 80% of the increase",
        "On-time delivery: 91% — 4 late shipments tied to same RM delay",
      ],
    },
    outcomes: ["Fewer surprises in ops reviews.", "Clearer accountability across plants.", "Decisions made on current data, not last week's."],
  },

  "For Operators & Supervisors": {
    headline: "Simple screens that match the job — not ERP forms designed by someone who's never been on a floor.",
    subhead: "Log production, downtime, and events in under 30 seconds. See only what's relevant to your station, batch, or shift.",
    bullets: [
      "Log production counts, downtime, and comments without breaking rhythm.",
      "Role-specific views — what the operator sees is different from what the supervisor sees.",
      "No training binders — the interface works the way the job does.",
    ],
    workflow: [
      { label: "Start", desc: "Open your shift view — your line, your batch, your tasks.", icon: "lucide:play-circle" },
      { label: "Log", desc: "Record production counts, events, and notes inline.", icon: "lucide:clipboard-list" },
      { label: "Flag", desc: "Escalate anything that needs supervisor or QC attention.", icon: "lucide:alert-circle" },
      { label: "Close", desc: "Confirm the shift record before signing off — no paper.", icon: "lucide:check-square" },
    ],
    example: {
      title: 'Example: "Line 2 just went down"',
      lines: [
        "Operator logs downtime in 15 seconds — reason code, start time, brief note",
        "Supervisor notified automatically; event visible to planning immediately",
        "Resolution logged when line restarts — full record, no paperwork",
      ],
    },
    outcomes: ["Less friction means more complete records.", "Floor teams actually use the system.", "Supervisors spend time on the floor, not on reports."],
  },

  "For IT & Continuous Improvement": {
    headline: "Cloud-native and API-first — connect what you have today and grow from there.",
    subhead: "No rip-and-replace required. VPA layers onto your existing stack, gives CI teams clean data to work with, and keeps IT in control.",
    bullets: [
      "API or file-based integration with your existing ERP, MES, or QC tools.",
      "Role-based access, audit logs, and data isolation by site.",
      "CI teams get consistent, traceable data to actually run improvement projects.",
    ],
    workflow: [
      { label: "Connect", desc: "API or scheduled export — plug in without tearing anything out.", icon: "lucide:plug-zap" },
      { label: "Validate", desc: "Data quality checks at the point of entry, not after the fact.", icon: "lucide:badge-check" },
      { label: "Govern", desc: "Role-based access and full audit trail by site.", icon: "lucide:shield" },
      { label: "Improve", desc: "Give CI teams clean operational data for real process analysis.", icon: "lucide:repeat-2" },
    ],
    example: {
      title: 'Example: "Can VPA work alongside our existing ERP?"',
      lines: [
        "Yes — connect via API or scheduled export. VPA layers on top, no cutover required.",
        "Start where the pain is: inventory accuracy, QC visibility, or production tracking.",
        "Expand to replace legacy modules on your timeline, not a consultant's.",
      ],
    },
    outcomes: ["No 18-month implementation.", "IT keeps control of access and data governance.", "CI teams get a system they can actually use for real projects."],
  },

  Analytics: {
    headline: "Instant clarity across the operation — without building dashboards.",
    subhead:
      "Turn messy signals into plain-English answers: what changed, why it matters, and what to do next.",
    bullets: [
      "Role-based KPIs that update automatically (no custom report requests).",
      "Detect trends + anomalies tied to orders, batches, QC, and shipments.",
      "Leadership-ready summaries you can share in 30 seconds.",
    ],
    workflow: [
      {
        label: "Connect",
        desc: "Bring in exports, spreadsheets, and system feeds (ERP/MES/QC).",
        icon: "lucide:plug-zap",
      },
      {
        label: "Normalize",
        desc: "Align items, orders, lots, and timestamps to a single truth.",
        icon: "lucide:shuffle",
      },
      {
        label: "Detect",
        desc: "Identify drift, delays, and cost spikes before they become fire drills.",
        icon: "lucide:radar",
      },
      {
        label: "Explain",
        desc: "Plain-language “why” + practical next steps.",
        icon: "lucide:messages-square",
      },
    ],
    signals: [
      { label: "Orders at risk", value: "5", tone: "warn" },
      { label: "On-time outlook", value: "92%", tone: "good" },
      { label: "Top cost driver", value: "Scrap (Line 3)", tone: "bad" },
      { label: "Quick win found", value: "Changeover ↓ 11%", tone: "good" },
    ],
    example: {
      title: "Example: “What changed this week?”",
      lines: [
        "Scrap ↑ 18% on Line 3 (2 SKUs drive 72% of the increase)",
        "5 orders now at risk due to RM shortage + delayed PO receipt",
        "Two properties trending toward spec limits in the last 24 hours",
      ],
    },
    outcomes: [
      "Less time hunting; more time deciding.",
      "Fewer surprises in standups and ops reviews.",
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
        desc: "Tie items → BOM → orders so downstream context is obvious.",
        icon: "lucide:link-2",
      },
      {
        label: "Validate",
        desc: "Flag missing fields and mismatches early.",
        icon: "lucide:badge-check",
      },
      {
        label: "Operate",
        desc: "Use the same truth across planning, QC, and shipping.",
        icon: "lucide:factory",
      },
    ],
    signals: [
      { label: "Open orders", value: "24", tone: "warn" },
      { label: "BOMs active", value: "312", tone: "good" },
      { label: "Data issues", value: "7", tone: "warn" },
      { label: "Lead-time risk", value: "2 items", tone: "bad" },
    ],
    example: {
      title: "Example: “What’s blocking shipment?”",
      lines: [
        "Order 10492: COA required → QC hold risk",
        "Order 10488: packaging spec mismatch vs BOM revision",
        "Order 10476: item status inactive → receiving exception",
      ],
    },
    outcomes: [
      "Cleaner masters = fewer downstream exceptions.",
      "Less tribal knowledge; more visible rules.",
      "Better handoffs between planning, floor, QC, and shipping.",
    ],
  },

  MES: {
    headline: "Real-time plant visibility — built for the floor, not just reporting.",
    subhead:
      "Know what’s running, what’s stuck, and what’s about to go sideways — with actions attached.",
    bullets: [
      "Live status for batches/lines/work cells with exceptions that matter.",
      "Early warnings tied to cycle time drift, downtime, and material constraints.",
      "A simple operator flow + supervisor view in the same system.",
    ],
    workflow: [
      { label: "Track", desc: "Live state across batches and lines.", icon: "lucide:activity" },
      { label: "Detect", desc: "Identify drift and delays in real time.", icon: "lucide:radar" },
      { label: "Respond", desc: "Assign an action and capture the outcome.", icon: "lucide:clipboard-list" },
      { label: "Improve", desc: "Feed learnings back into standards.", icon: "lucide:repeat-2" },
    ],
    signals: [
      { label: "Running batches", value: "6", tone: "good" },
      { label: "At risk (delay)", value: "2", tone: "warn" },
      { label: "Exceptions today", value: "3", tone: "warn" },
      { label: "Cycle vs target", value: "-7%", tone: "good" },
    ],
    example: {
      title: "Example: “Line falling behind”",
      lines: [
        "Cycle drift detected on Line 3 (trend accelerating)",
        "2 orders likely to miss ship date if trend continues",
        "Suggested action: adjust staffing / prioritize changeover + QC sampling",
      ],
    },
    outcomes: [
      "Fewer surprises late in the shift.",
      "Exceptions become decisions, not noise.",
      "Better throughput with less hero mode.",
    ],
  },

  QC: {
    headline: "QC signals that show up early — not after you’ve already shipped the problem.",
    subhead:
      "Watch specs, trends, and holds in one place — tied to batches and orders, with clear next steps.",
    bullets: [
      "Early warnings on spec drift across key properties.",
      "COA/hold status visible to ops (no surprises at shipping).",
      "Fast traceability: batch → raw materials → process → result.",
    ],
    workflow: [
      { label: "Sample", desc: "Capture tests with consistent context.", icon: "lucide:flask-conical" },
      { label: "Compare", desc: "Trend vs spec + historical baselines.", icon: "lucide:line-chart" },
      { label: "Decide", desc: "Hold/release with standardized reasons.", icon: "lucide:shield-check" },
      { label: "Trace", desc: "Pinpoint likely drivers quickly.", icon: "lucide:git-branch" },
    ],
    signals: [
      { label: "Lots on hold", value: "1", tone: "warn" },
      { label: "Specs drifting", value: "2", tone: "warn" },
      { label: "COAs due today", value: "9", tone: "good" },
      { label: "Repeat issues", value: "0", tone: "good" },
    ],
    example: {
      title: "Example: “Why did this batch fail?”",
      lines: [
        "Viscosity shifted after RM lot change (trend break vs baseline)",
        "Temperature variance increased mid-run window",
        "Suggested action: isolate RM lot + adjust target band for next run",
      ],
    },
    outcomes: [
      "Faster disposition decisions.",
      "Less rework + fewer customer escalations.",
      "QC becomes a leading indicator, not a postmortem.",
    ],
  },
}

function getDetails(feature: FeatureType): FeatureDetails {
  const hit = FEATURE_DETAILS[feature.name]
  if (hit) return hit

  // Generic defaults: no vague “surface” language.
  return {
    headline: feature.description,
    subhead: "A concise overview of what this capability unlocks when it’s wired into your operation.",
    bullets: [
      "Clear visibility and ownership for the team.",
      "Issues get flagged earlier (before small problems become big ones).",
      "Repeatable actions that reduce ad-hoc hero work.",
    ],
    workflow: [
      { label: "Capture", desc: "Bring the signal in with the right context.", icon: "lucide:inbox" },
      { label: "Connect", desc: "Tie it to orders, batches, people, and timestamps.", icon: "lucide:link" },
      { label: "Explain", desc: "Summarize what changed and why it matters.", icon: "lucide:message-square" },
      { label: "Act", desc: "Recommend and track next steps.", icon: "lucide:check-circle-2" },
    ],
    // Intentionally omit signals by default (keeps modals tighter and avoids “fake metrics”).
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
  const hasSignals = !!details.signals?.length

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-6"
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

      {/* modal card */}
      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-default-950/95 shadow-2xl">
        {/* top glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[720px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

        {/* header */}
        <div className="relative border-b border-white/10 p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-xl border border-white/10 bg-default-950/40 p-2.5">
                <IconifyIcon icon={feature.icon} className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-default-400">Capability</p>
                <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">{feature.name}</h3>
                <p className="mt-1 text-sm text-default-300 max-w-2xl">{details.headline}</p>
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

        {/* body — 2 columns, no scroll */}
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">

          {/* Left: what you get + how it works */}
          <div className="p-5 md:p-6 space-y-5">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-default-400 mb-3">What you get</p>
              <ul className="space-y-2">
                {details.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm text-default-200">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-default-400 mb-3">How it works</p>
              <div className="space-y-2">
                {details.workflow.map((s, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-white/5 bg-black/20 px-3 py-2.5">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary/10 text-[10px] font-bold text-primary mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-xs text-default-200 leading-relaxed">
                      <span className="font-semibold text-white">{s.label}</span>
                      {" — "}
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: signals (app-style KPI tiles) + example */}
          <div className="p-5 md:p-6 space-y-5">
            {hasSignals && (
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-default-400 mb-3">At a glance</p>
                <div className="grid grid-cols-2 gap-2">
                  {details.signals!.map((row, i) => (
                    <div key={i} className="rounded-xl border border-white/10 bg-black/30 px-3 py-3">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-medium uppercase tracking-wide text-default-400 leading-tight pr-1">{row.label}</span>
                        <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${toneDot(row.tone)}`} />
                      </div>
                      <p className="text-xl font-bold text-white">{row.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-default-400 mb-3">{details.example.title}</p>
              <div className="rounded-xl border border-white/10 bg-black/30 p-3 space-y-2">
                {details.example.lines.map((l, i) => (
                  <div key={i} className="flex gap-2 text-xs text-default-200">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-default-400" />
                    <span>{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="border-t border-white/10 px-5 py-4 md:px-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {details.outcomes.map((o, i) => (
              <span key={i} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-default-200">
                {o}
              </span>
            ))}
          </div>
          <div className="flex gap-2 ml-auto">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-default-100 hover:bg-white/10 hover:text-white transition"
            >
              Get in touch
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
            <h2 className="text-3xl font-medium text-white mb-4">
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
