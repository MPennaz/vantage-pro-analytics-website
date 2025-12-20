// src/components/BetaSignupModal.tsx
"use client"

import { useState, FormEvent } from "react"
import clsx from "clsx"

type BetaSignupModalProps = {
  triggerLabel?: string
  triggerClassName?: string
}

type ToastState = {
  type: "success" | "error"
  message: string
} | null

const BetaSignupModal = ({
  triggerLabel = "Request beta access",
  triggerClassName,
}: BetaSignupModalProps) => {
  const [open, setOpen] = useState(false)

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [role, setRole] = useState("")
  const [manufacturingType, setManufacturingType] = useState("")
  const [currentSystems, setCurrentSystems] = useState("")
  const [biggestPain, setBiggestPain] = useState("")
  const [notes, setNotes] = useState("")

  const [submitting, setSubmitting] = useState(false)
  const [toast, setToast] = useState<ToastState>(null)

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message })
    // auto-hide after 5 seconds
    setTimeout(() => {
      setToast((current) => (current?.message === message ? null : current))
    }, 5000)
  }

  const resetForm = () => {
    setFullName("")
    setEmail("")
    setCompany("")
    setRole("")
    setManufacturingType("")
    setCurrentSystems("")
    setBiggestPain("")
    setNotes("")
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!fullName || !email || !company || !manufacturingType || !biggestPain) {
      showToast("error", "Please fill in all required fields (*) before submitting.")
      return
    }

    try {
      setSubmitting(true)

      const res = await fetch("/api/beta-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          company,
          role,
          manufacturingType,
          currentSystems,
          biggestPain,
          notes,
        }),
      })

      if (!res.ok) {
        let msg = "Something went wrong sending your request. Please try again."
        try {
          const data = await res.json()
          if (data?.error) msg = data.error
        } catch {
          // ignore JSON parse error
        }
        showToast("error", msg)
        return
      }

      showToast(
        "success",
        "Thanks! Your beta request has been sent. We’ll be in touch soon."
      )
      setOpen(false)
      resetForm()
    } catch (err) {
      console.error("Beta signup error:", err)
      showToast("error", "Unexpected error. Please try again in a minute.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={clsx(
          "inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300 text-sm md:text-base",
          triggerClassName,
        )}
      >
        {triggerLabel}
      </button>

      {/* Toast (global-ish, above modal) */}
      {toast && (
        <div className="pointer-events-none fixed inset-x-0 top-4 z-[9999] flex justify-center px-4">
          <div
            className={clsx(
              "pointer-events-auto max-w-md rounded-2xl border px-4 py-3 text-sm shadow-lg backdrop-blur",
              "flex items-start gap-3",
              toast.type === "success"
                ? "border-emerald-500/60 bg-emerald-900/80 text-emerald-50"
                : "border-red-500/60 bg-red-900/80 text-red-50",
            )}
          >
            <div className="mt-0.5">
              {toast.type === "success" ? "✅" : "⚠️"}
            </div>
            <div className="flex-1">
              <p className="font-medium">
                {toast.type === "success" ? "Request sent" : "Something went wrong"}
              </p>
              <p className="mt-0.5 text-xs text-emerald-100/90">
                {toast.message}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setToast(null)}
              className="ml-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/30 text-[11px] hover:bg-black/50 transition"
              aria-label="Close notification"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-xl rounded-2xl bg-default-950 border border-default-800 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-default-800">
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-white">
                  Join the VPA Beta
                </h2>
                <p className="text-xs md:text-sm text-default-300 mt-1">
                  Tell us a bit about your operation so we can prioritize the right
                  manufacturers for early access.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-default-900 text-default-300 hover:text-white hover:bg-default-800 transition"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Body */}
            <form onSubmit={handleSubmit} className="px-6 pb-6 pt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-default-300 mb-1">
                    Full name<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-default-800 bg-default-950/80 px-3 py-2 text-sm text-default-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-default-300 mb-1">
                    Work email<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-default-800 bg-default-950/80 px-3 py-2 text-sm text-default-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-default-300 mb-1">
                    Company<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-default-800 bg-default-950/80 px-3 py-2 text-sm text-default-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-default-300 mb-1">
                    Role / title
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-default-800 bg-default-950/80 px-3 py-2 text-sm text-default-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-default-300 mb-1">
                    Manufacturing type<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <select
                    className="w-full rounded-lg border border-default-800 bg-default-950/80 px-3 py-2 text-sm text-default-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={manufacturingType}
                    onChange={(e) => setManufacturingType(e.target.value)}
                  >
                    <option value="">Select one…</option>
                    <option value="Batch / Process )">
                      Batch / Process 
                    </option>
                    <option value="Discrete ">
                      Discrete 
                    </option>
                    <option value="Plastics / Composites">Plastics / Composites</option>
                    <option value="Food & Beverage">Food & Beverage</option>
                    <option value="Other / Mixed">Other / Mixed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-default-300 mb-1">
                    Current systems (ERP / MES / QC / etc.)
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="w-full rounded-lg border border-default-800 bg-default-950/80 px-3 py-2 text-sm text-default-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={currentSystems}
                    onChange={(e) => setCurrentSystems(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-default-300 mb-1">
                  Biggest operational pain point
                  <span className="text-red-500 ml-0.5">*</span>
                </label>
                <textarea
                  rows={3}
                  className="w-full rounded-lg border border-default-800 bg-default-950/80 px-3 py-2 text-sm text-default-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y"
                  placeholder="Where do things break down today? (e.g. scheduling, quality visibility, inventory accuracy, tribal knowledge, etc.)"
                  value={biggestPain}
                  onChange={(e) => setBiggestPain(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-default-300 mb-1">
                  Anything else we should know?{" "}
                  <span className="text-default-500">(optional)</span>
                </label>
                <textarea
                  rows={2}
                  className="w-full rounded-lg border border-default-800 bg-default-950/80 px-3 py-2 text-sm text-default-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y"
                  placeholder="Number of sites, key KPIs, timelines, or modules you’re most interested in."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between pt-2 gap-4 flex-wrap">
                <p className="text-[11px] text-default-500 max-w-xs">
                  Your details will be securely sent to{" "}
                  <span className="text-default-200">
                    info@vantageproanalytics.com
                  </span>{" "}
                  so we can follow up about beta access.
                </p>
                <div className="flex gap-3 ml-auto">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 rounded-full text-sm text-default-300 bg-default-900 hover:bg-default-800 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-5 py-2 rounded-full text-sm font-medium bg-primary text-white hover:bg-primary-hover disabled:opacity-60 disabled:cursor-not-allowed transition"
                  >
                    {submitting ? "Sending..." : "Request beta access"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default BetaSignupModal
