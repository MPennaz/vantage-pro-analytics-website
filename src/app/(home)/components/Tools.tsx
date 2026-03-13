// src/app/(home)/components/Tools.tsx
"use client"

import { useEffect, useState } from "react"

type TabKey = "analytics" | "erp" | "mes" | "qc"

type Bullet = {
  label: string
  value: string
  tone?: "ok" | "warn" | "good"
}

type Callout = {
  title: string
  bullets: string[]
}

const Tools = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("analytics")

  const tabButtonBase =
    "py-5 px-10 rounded-lg items-center gap-2 border border-white/10 -mb-px transition-all text-lg font-medium whitespace-nowrap"
  const inactiveButton =
    tabButtonBase + " text-white/70 hover:text-white hover:bg-white/5"
  const activeButton =
    tabButtonBase + " text-white bg-primary hs-tab-active:-semibold"

  const isActive = (key: TabKey) => activeTab === key

  // Optional: deep-link support (#tools?tab=mes)
  useEffect(() => {
    if (typeof window === "undefined") return
    const url = new URL(window.location.href)
    const tab = url.searchParams.get("tab") as TabKey | null
    if (tab && ["analytics", "erp", "mes", "qc"].includes(tab)) setActiveTab(tab)
  }, [])

  const InsightCard = ({
    title,
    subtitle,
    items,
  }: {
    title: string
    subtitle?: string
    items: Bullet[]
  }) => (
    <div className="rounded-xl border border-white/10 bg-default-950/20 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          {subtitle && (
            <p className="mt-1 text-sm font-medium text-default-200">
              {subtitle}
            </p>
          )}
        </div>
        <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] font-medium text-white/70">
          live signal
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {items.map((b) => (
          <div
            key={b.label}
            className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-black/20 px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <span
                className={[
                  "h-2 w-2 rounded-full",
                  b.tone === "good"
                    ? "bg-emerald-400"
                    : b.tone === "warn"
                      ? "bg-amber-400"
                      : "bg-sky-400",
                ].join(" ")}
              />
              <span className="text-sm font-medium text-white/90">
                {b.label}
              </span>
            </div>
            <span className="text-sm font-semibold text-default-200">
              {b.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )

  const CalloutCard = ({ title, bullets }: Callout) => (
    <div className="rounded-xl border border-white/10 bg-default-900/30 p-5">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm font-medium text-default-200">
        {bullets.map((t) => (
          <li key={t} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <section id="tools" className="py-20">
      <div className="container">
        {/* Top heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-medium capitalize text-white mb-3">
            Connected tools for modern manufacturing
          </h2>
          <p className="text-sm text-default-200 font-medium max-w-2xl mx-auto">
            One platform where production, quality, inventory, and leadership all
            see the same story — and the next best action.
          </p>
        </div>

        {/* Tabs + panels */}
        <div
          className="border rounded-2xl border-white/10 bg-slate-950/40"
          data-aos="zoom-in"
          data-aos-easing="ease"
          data-aos-duration={1000}
        >
          <div className="p-6">
            {/* Tabs */}
            <nav
              className="flex flex-wrap 2xl:flex-nowrap items-center gap-6 justify-evenly rounded-md p-2"
              aria-label="VPA tools tabs"
            >
              <button
                type="button"
                className={isActive("analytics") ? activeButton : inactiveButton}
                onClick={() => setActiveTab("analytics")}
              >
                Analytics
              </button>
              <button
                type="button"
                className={isActive("erp") ? activeButton : inactiveButton}
                onClick={() => setActiveTab("erp")}
              >
                ERP
              </button>
              <button
                type="button"
                className={isActive("mes") ? activeButton : inactiveButton}
                onClick={() => setActiveTab("mes")}
              >
                MES
              </button>
              <button
                type="button"
                className={isActive("qc") ? activeButton : inactiveButton}
                onClick={() => setActiveTab("qc")}
              >
                QC
              </button>
            </nav>

            {/* Panels */}
            <div className="mt-10 overflow-hidden">
              {/* Analytics */}
              {isActive("analytics") && (
                <div
                  className="transition-all duration-300 transform opacity-100 translate-y-0"
                  role="tabpanel"
                  aria-label="Analytics"
                >
                  <div className="grid xl:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10">
                      <h2 className="text-3xl font-medium text-white">
                        Analytics — instant clarity across the operation.
                      </h2>
                      <p className="text-base font-medium text-default-200 mt-5">
                        No dashboard building. No hunting through spreadsheets. Open VPA
                        and it tells each role what matters right now — risks, trends,
                        and next actions — tied back to real orders, batches, and QC.
                      </p>

                      <div className="mt-6 grid gap-3">
                        <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                          <p className="text-sm font-semibold text-white">
                            Example "What changed this week?"
                          </p>
                          <p className="mt-1 text-sm font-medium text-default-200">
                            • Scrap up <span className="text-white">+18%</span> on
                            Line 3 (2 SKUs driving 72% of the increase)
                            <br />
                            • 5 orders at risk due to RM shortage
                            <br />
                            • Two properties drifting toward spec limits in the last
                            24 hours
                          </p>
                        </div>

                        <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                          <p className="text-sm font-semibold text-white">
                            What you get
                          </p>
                          <p className="mt-1 text-sm font-medium text-default-200">
                            Role-based KPIs, trend shifts, hidden cost drivers — without
                            queries, exports, or custom reports.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-6">
                      <InsightCard
                        title="At-a-glance signals"
                        subtitle="The few numbers you actually need today"
                        items={[
                          { label: "Orders at risk", value: "5", tone: "warn" },
                          { label: "On-time outlook", value: "92%", tone: "ok" },
                          {
                            label: "Top cost driver",
                            value: "scrap (Line 3)",
                            tone: "warn",
                          },
                          {
                            label: "Biggest win",
                            value: "changeover down 11%",
                            tone: "good",
                          },
                        ]}
                      />
                      <CalloutCard
                        title="Why teams stick with VPA"
                        bullets={[
                          "Everyone sees the same truth — order → batch → QC → shipment.",
                          "Signals show up early (before the fire drill).",
                          "Actions are explicit: what happened, why it matters, what to do next.",
                        ]}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* ERP */}
              {isActive("erp") && (
                <div
                  className="transition-all duration-300 transform opacity-100 translate-y-0"
                  role="tabpanel"
                  aria-label="ERP"
                >
                  <div className="grid xl:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10">
                      <h2 className="text-3xl font-medium text-white">
                        ERP — the full operational backbone, built for manufacturers.
                      </h2>
                      <p className="text-base font-medium text-default-200 mt-5">
                        Item Master, inventory, purchasing, orders, BOM, and shipping — all
                        connected in one place. Full lot traceability from receipt to
                        shipment, without the setup cost or complexity of legacy ERP.
                      </p>
                      <p className="text-base font-medium text-default-200 mt-4">
                        Every department works from the same source of truth. When
                        production starts a batch, QC can track it. When shipping picks an
                        order, inventory updates. No manual handoffs.
                      </p>

                      <div className="mt-6 rounded-lg border border-white/10 bg-black/20 p-4">
                        <p className="text-sm font-semibold text-white">
                          Example: order goes sideways
                        </p>
                        <p className="mt-1 text-sm font-medium text-default-200">
                          • Customer PO accepted
                          <br />
                          • RM shortage detected automatically
                          <br />
                          • Suggested substitutions + earliest ship date
                          <br />
                          • Production, purchasing, and customer service all see the same status
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-6">
                      <InsightCard
                        title="Order risk radar"
                        subtitle="No more surprises at ship time"
                        items={[
                          { label: "Open orders", value: "128", tone: "ok" },
                          { label: "At risk (RM)", value: "5", tone: "warn" },
                          { label: "At risk (capacity)", value: "3", tone: "warn" },
                          { label: "Auto-resolved", value: "9 today", tone: "good" },
                        ]}
                      />

                      <CalloutCard
                        title="Built for real operations"
                        bullets={[
                          "Full lot traceability from receipt to shipment — no manual tracking.",
                          "Shortage and promise-date visibility without building reports.",
                          "BOM, customers, suppliers, and orders — one connected record.",
                        ]}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* MES */}
              {isActive("mes") && (
                <div
                  className="transition-all duration-300 transform opacity-100 translate-y-0"
                  role="tabpanel"
                  aria-label="MES"
                >
                  <div className="grid xl:grid-cols-2 gap-6">
                    {/* Left: narrative */}
                    <div className="p-6 rounded-xl border border-white/10">
                      <h2 className="text-3xl font-medium text-white">
                        MES — production intelligence that keeps you ahead of the floor.
                      </h2>

                      <p className="text-base font-medium text-default-200 mt-5">
                        Batch management, formula execution, raw material issuance, and
                        yield tracking — tied to real orders and QC results. VPA tracks run
                        state, cycle drift, downtime, and material constraints so you know
                        what&apos;s happening while there&apos;s still time to act.
                      </p>

                      <p className="text-base font-medium text-default-200 mt-4">
                        Operators get simple, role-specific screens. Supervisors get early
                        warnings. Management gets the full picture — all from the same system.
                      </p>

                      <div className="mt-6 rounded-lg border border-white/10 bg-black/20 p-4">
                        <p className="text-sm font-semibold text-white">
                          Example: the line didn&apos;t fall behind
                        </p>
                        <p className="mt-1 text-sm font-medium text-default-200">
                          • Cycle time drift detected early on Line 3 (trend accelerating)
                          <br />
                          • Supervisor alerted with likely causes + next best actions
                          <br />
                          • Batch plan adjusted before the schedule slipped
                        </p>
                      </div>

                      <div className="mt-4 rounded-lg border border-white/10 bg-black/20 p-4">
                        <p className="text-sm font-semibold text-white">
                          Built for process and discrete manufacturing
                        </p>
                        <p className="mt-1 text-sm font-medium text-default-200">
                          Chemical, food, coatings, plastics, or assembly — VPA handles batch
                          and formula-based production today, with discrete work orders and
                          routings available for mixed operations.
                        </p>
                      </div>
                    </div>

                    {/* Right: Insight + Callout */}
                    <div className="grid gap-6">
                      <InsightCard
                        title="Production pulse"
                        subtitle="Live status across lines, batch units, and work cells"
                        items={[
                          { label: "Running batches", value: "6", tone: "ok" },
                          { label: "At risk (delay)", value: "2", tone: "warn" },
                          { label: "Cycle drift alerts", value: "3", tone: "warn" },
                          { label: "Avg cycle vs target", value: "-7%", tone: "good" },
                        ]}
                      />

                      <CalloutCard
                        title="Why it&apos;s different"
                        bullets={[
                          "Detect early, correct fast — not a postmortem after the shift.",
                          "Operator-first screens + supervisor-level visibility in one system.",
                          "Every batch tied to orders, QC results, and inventory movements.",
                        ]}
                      />

                      <CalloutCard
                        title="What you get from day one"
                        bullets={[
                          "Batch execution with formula management and RM issuance.",
                          "Yield tracking and finished goods output against planned targets.",
                          "A single production record — no paper logs, no manual reconciliation.",
                        ]}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* QC */}
              {isActive("qc") && (
                <div
                  className="transition-all duration-300 transform opacity-100 translate-y-0"
                  role="tabpanel"
                  aria-label="QC & Lab"
                >
                  <div className="grid xl:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10">
                      <h2 className="text-3xl font-medium text-white">
                        QC & Lab — results that never get lost.
                      </h2>
                      <p className="text-base font-medium text-default-200 mt-5">
                        Capture results, specs, adjustments, and trends with full batch
                        traceability. QC and production share one view of what&apos;s in spec,
                        drifting, or out of bounds — before it becomes scrap or rework.
                      </p>

                      <div className="mt-6 rounded-lg border border-white/10 bg-black/20 p-4">
                        <p className="text-sm font-semibold text-white">
                          Example: drift caught early
                        </p>
                        <p className="mt-1 text-sm font-medium text-default-200">
                          • Viscosity trending toward lower limit over last 3 batches
                          <br />
                          • Recommend adjustment + tighter sampling window
                          <br />
                          • Auto-flag affected orders + notify production lead
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-6">
                      <InsightCard
                        title="Quality risk board"
                        subtitle="Spot issues before customers do"
                        items={[
                          { label: "Batches in hold", value: "2", tone: "warn" },
                          { label: "Trending toward limit", value: "4", tone: "warn" },
                          { label: "In-spec streak", value: "19", tone: "good" },
                          { label: "Top driver", value: "temp variance", tone: "ok" },
                        ]}
                      />

                      <CalloutCard
                        title="What teams love"
                        bullets={[
                          "One place for specs, results, and adjustments — tied to the batch.",
                          "Trends are automatic — no spreadsheets to maintain.",
                          "Clear handoff: QC → production → inventory → shipping.",
                        ]}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* end panels */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tools
