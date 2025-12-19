// src/app/(home)/components/Tools.tsx
"use client"

import { useState } from "react"
import Image, { StaticImageData } from "next/image"

import aiImg6 from "@/assets/images/ai/img-6.jpg"
import aiImg9 from "@/assets/images/ai/img-9.jpg"
import aiImg22 from "@/assets/images/ai/img-22.jpg"
import aiImg14 from "@/assets/images/ai/img-14.jpg"
import aiImg21 from "@/assets/images/ai/img-21.jpg"
import aiImg10 from "@/assets/images/ai/img-10.jpg"
import aiImg2 from "@/assets/images/ai/img-2.jpg"

import erpWorkspaceFull from "@/assets/images/vpa/ERP_WORKSPACE.png"

import erpItemMasterThumb from "@/assets/images/vpa/VPA_IM_THUMB.png"
import erpPurchasingThumb from "@/assets/images/vpa/VPA_PUR_THUMB.png"
import erpCustomerThumb from "@/assets/images/vpa/VPA_CUST_THUMB.png"
import erpSuppliersThumb from "@/assets/images/vpa/VPA_SUP_THUMB.png"
import erpOrdersThumb from "@/assets/images/vpa/VPA_ORD_THUMB.png"
import erpInventoryThumb from "@/assets/images/vpa/VPA_INV_THUMB.png"

import vpaAnalytics from "@/assets/images/vpa/ALT.png"

type TabKey = "analytics" | "erp" | "mes" | "qc"

type LightboxImage = {
  thumb: StaticImageData
  full: StaticImageData
  alt: string
  label?: string
}

// 🔹 First entry uses the thumb/full pair as example
const erpScreens: LightboxImage[] = [
  {
    thumb: erpItemMasterThumb,
    full: erpWorkspaceFull,
    alt: "Item grid",
    label: "Item Master",
  },
  {
    thumb: erpPurchasingThumb,
    full: erpWorkspaceFull,
    alt: "Inventory overview",
    label: "Purchasing",
  },
  {
    thumb: erpOrdersThumb,
    full: erpWorkspaceFull,
    alt: "Order list",
    label: "Orders",
  },
  {
    thumb: erpSuppliersThumb,
    full: erpWorkspaceFull,
    alt: "Supplier records",
    label: "Suppliers",
  },
  {
    thumb: erpCustomerThumb,
    full: erpWorkspaceFull,
    alt: "Customer accounts",
    label: "Customers",
  },
  {
    thumb: erpInventoryThumb,
    full: erpWorkspaceFull,
    alt: "Item detail view",
    label: "Invetory",
  },
]

const Tools = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("analytics")
  const [lightbox, setLightbox] = useState<LightboxImage | null>(null)

  const tabButtonBase =
    "py-5 px-10 rounded-lg items-center gap-2 border border-white/10 -mb-px transition-all text-lg font-medium whitespace-nowrap"
  const inactiveButton =
    tabButtonBase + " text-white/70 hover:text-white hover:bg-white/5"
  const activeButton =
    tabButtonBase + " text-white bg-primary hs-tab-active:-semibold"

  const isActive = (key: TabKey) => activeTab === key

  return (
    <>
      <section id="tools" className="py-20">
        <div className="container">
          {/* Top heading */}
          <div className="flex items-end justify-between mb-10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-medium capitalize text-white mb-4">
                Connected tools for modern manufacturing
              </h2>
              <p className="text-sm text-default-200 font-medium">
                Explore the four core building blocks of Vantage Pro Analytics—
                ERP Lite, MES Lite, QC, and Analytics—designed to work together
                so every team sees the same story from order to shipment.
              </p>
            </div>
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
                    aria-label="Analytics & AI"
                  >
                    <div className="grid xl:grid-cols-2 gap-6">
                      <div className="p-6 rounded-xl border border-white/10">
                        <h2 className="text-3xl font-medium text-white">
                          Analytics & AI — clarity across your operation.
                        </h2>
                        <p className="text-base font-medium text-default-200 mt-5">
                          Bring orders, batches, QC results and inventory together
                          in a single view. Run ad-hoc questions, surface trends and
                          share role-specific dashboards with production, quality
                          and leadership in seconds.
                        </p>
                      </div>
                      <div className="p-6 rounded-xl border border-white/10">
                        <div className="relative w-full aspect-[16/9]">
                          <Image
                            src={vpaAnalytics}
                            alt="VPA analytics dashboard"
                            fill
                            className="rounded-md object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ERP */}
                {isActive("erp") && (
                  <div
                    className="transition-all duration-300 transform opacity-100 translate-y-0"
                    role="tabpanel"
                    aria-label="ERP Lite"
                  >
                    <div className="grid xl:grid-cols-2 gap-6">
                      <div className="p-6 rounded-xl border border-white/10">
                        <h2 className="text-3xl font-medium text-white">
                          ERP Lite — the operational backbone.
                        </h2>
                        <p className="text-base font-medium text-default-200 mt-5">
                          Keep Item Master, customers, suppliers, inventory and
                          orders in one clean, modern system. Designed for
                          manufacturers who need structure and traceability without
                          the cost and complexity of a huge ERP.
                        </p>
                        <p className="text-base font-medium text-default-200 mt-4">
                          Start small and layer on more modules over time, without
                          disrupting day-to-day operations.
                        </p>
                      </div>
                      <div className="p-6 rounded-xl border border-white/10">
                        <h2 className="text-lg font-medium text-white mb-8">
                          Example ERP views
                        </h2>
                        <div className="grid grid-cols-3 gap-6">
                          {erpScreens.map((shot) => (
                            <button
                              key={shot.alt}
                              type="button"
                              onClick={() => setLightbox(shot)}
                              className="group relative rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary cursor-zoom-in"
                              aria-label={`Open larger view: ${shot.alt}`}
                            >
                              <Image
                                src={shot.thumb}
                                alt={shot.alt}
                                className="rounded-md object-cover"
                              />
                              {/* hover overlay */}
                              <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-200" />
                              {/* label pill */}
                              {shot.label && (
                                <span className="pointer-events-none absolute bottom-2 left-2 rounded-full bg-black/70 text-[11px] px-2 py-1 text-white/80 flex items-center gap-1">
                                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                  {shot.label}
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* MES */}
                {isActive("mes") && (
                  <div
                    className="transition-all duration-300 transform opacity-100 translate-y-0"
                    role="tabpanel"
                    aria-label="MES Lite"
                  >
                    <div className="grid xl:grid-cols-2 gap-6">
                      <div className="p-6 rounded-xl border border-white/10">
                        <h2 className="text-3xl font-medium text-white">
                          MES Lite — real-time view of the plant.
                        </h2>
                        <p className="text-base font-medium text-default-200 mt-5">
                          Track batches, work orders, cycle times and exceptions as
                          they happen. Give operators a simple interface, while
                          production managers get live status across lines, kettles
                          or cells.
                        </p>
                        <p className="text-base font-medium text-default-200 mt-4">
                          Built from real plant experience, not generic templates.
                        </p>
                      </div>
                      <div className="p-6 rounded-xl border border-white/10">
                        <div className="bg-default-900/50 p-3 rounded-lg">
                          <h2 className="text-lg font-medium text-white">
                            Example batch timeline
                          </h2>
                          <p className="text-base font-medium text-default-200 py-5">
                            • Batch 24-0715 started at 07:42
                            <br />
                            • Mix complete at 08:31
                            <br />
                            • QC approved at 09:05
                            <br />
                            • Packed to drums at 10:12
                          </p>
                          <p className="text-base font-medium text-default-200">
                            Every step is timestamped, operator-tagged and linked
                            back to QC and inventory movements.
                          </p>
                        </div>
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
                          Capture test results, specs and adjustments with full batch
                          traceability. Trend key properties over time and give both
                          QC and production a shared view of what&apos;s in spec, at
                          risk or out of bounds.
                        </p>
                      </div>
                      <div className="p-6 rounded-xl border border-white/10">
                        <Image
                          src={aiImg2}
                          className="rounded-md mx-auto"
                          alt="QC trends"
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

      {/* Lightbox modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute -top-3 -right-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-default-900 text-default-200 hover:bg-default-800 hover:text-white transition"
              aria-label="Close large view"
            >
              ×
            </button>
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black/60">
              <Image
                src={lightbox.full}
                alt={lightbox.alt}
                fill
                className="object-contain"
              />
            </div>
            {lightbox.label && (
              <p className="mt-3 text-sm text-default-200 text-center">
                {lightbox.label}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Tools
