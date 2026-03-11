"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import IconifyIcon from "@/components/wrappers/IconifyIcon"

type Props = {
  /** Extra classes for the trigger button (mobile vs desktop) */
  className?: string
}

/**
 * RequestDemoButton
 *
 * Renders a "Request a Demo" button + a modal form.
 * The modal is portaled to document.body so it works from anywhere
 * (navbar, hero, etc.) without being clipped by sections.
 */
const RequestDemoButton: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [company, setCompany] = React.useState("")
  const [role, setRole] = React.useState("")
  const [plants, setPlants] = React.useState("")
  const [goals, setGoals] = React.useState("")
  const [timeline, setTimeline] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [success, setSuccess] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open])

  const resetForm = () => {
    setName("")
    setEmail("")
    setCompany("")
    setRole("")
    setPlants("")
    setGoals("")
    setTimeline("")
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)

    if (!email || !name || !company || !goals) {
      setError("Name, email, company, and what you’d like to see are required.")
      return
    }

    try {
      setLoading(true)
      const res = await fetch("/api/request-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          role,
          plants,
          goals,
          timeline,
        }),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null
        throw new Error(
          data?.error || "There was an issue sending your request.",
        )
      }

      setSuccess(true)
      resetForm()
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "There was an issue sending your request."
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  const triggerClasses =
    className ??
    "inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300"

  return (
    <>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={triggerClasses}
      >
        <IconifyIcon icon="lucide:calendar-clock" className="h-5 w-5 me-2" />
        Request a Demo
      </button>

      {/* Modal */}
      {mounted && open
        ? createPortal(
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-8"
              role="dialog"
              aria-modal="true"
              aria-label="Request a Demo"
            >
              {/* overlay */}
              <button
                aria-label="Close"
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={() => setOpen(false)}
              />

              {/* card */}
              <div className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-default-950/95 shadow-2xl overflow-hidden">
                {/* header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary mb-2">
                        Schedule a Demo
                      </p>
                      <h3 className="text-xl md:text-2xl font-semibold text-white">
                        See VPA running in your operation
                      </h3>
                      <p className="mt-2 text-sm text-default-200">
                        Tell us what you’d like to see. We’ll tailor the walkthrough to your process — inventory, lot traceability, QC, or wherever the pain is sharpest.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="shrink-0 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs md:text-sm text-default-200 hover:bg-white/10 hover:text-white transition"
                    >
                      Close
                    </button>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "30-min focused walkthrough",
                      "Tailored to your process",
                      "Live in 4–8 weeks",
                    ].map((label) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-default-300"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* body / form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wide text-default-400 mb-1">
                        Name<span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary/70"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wide text-default-400 mb-1">
                        Work email<span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary/70"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wide text-default-400 mb-1">
                        Company<span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary/70"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wide text-default-400 mb-1">
                        Role / title
                      </label>
                      <input
                        type="text"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary/70"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wide text-default-400 mb-1">
                        Plants / sites
                      </label>
                      <div className="relative">
                        <select
                          value={plants}
                          onChange={(e) => setPlants(e.target.value)}
                          className="w-full appearance-none rounded-xl border border-white/10 bg-[#0D1B2A] px-3 py-2 pr-8 text-sm text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary/70 cursor-pointer"
                        >
                          <option value="" className="bg-[#0D1B2A]">Select…</option>
                          <option value="1" className="bg-[#0D1B2A]">1 plant</option>
                          <option value="2-4" className="bg-[#0D1B2A]">2–4 plants</option>
                          <option value="5-9" className="bg-[#0D1B2A]">5–9 plants</option>
                          <option value="10+" className="bg-[#0D1B2A]">10+ plants</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                          <svg className="h-4 w-4 text-default-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wide text-default-400 mb-1">
                        Timeline
                      </label>
                      <div className="relative">
                        <select
                          value={timeline}
                          onChange={(e) => setTimeline(e.target.value)}
                          className="w-full appearance-none rounded-xl border border-white/10 bg-[#0D1B2A] px-3 py-2 pr-8 text-sm text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary/70 cursor-pointer"
                        >
                          <option value="" className="bg-[#0D1B2A]">Just exploring</option>
                          <option value="this-quarter" className="bg-[#0D1B2A]">This quarter</option>
                          <option value="3-6-months" className="bg-[#0D1B2A]">3–6 months</option>
                          <option value="asap" className="bg-[#0D1B2A]">ASAP / active project</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                          <svg className="h-4 w-4 text-default-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wide text-default-400 mb-1">
                      What would you like us to focus on?
                      <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      value={goals}
                      onChange={(e) => setGoals(e.target.value)}
                      rows={4}
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary/70"
                      placeholder="E.g. multi-site visibility, scheduling chaos, QC signals, ERP clean-up…"
                    />
                  </div>

                  {error && <p className="text-xs text-rose-400">{error}</p>}
                  {success && (
                    <p className="text-xs text-emerald-400">
                      Thanks — your request is in. We’ll follow up shortly with
                      some time options.
                    </p>
                  )}

                  <div className="pt-2 flex items-center justify-between gap-4">
                    <p className="text-[11px] text-default-400">
                      No spam, ever. Just a focused demo and a few follow-up
                      notes if helpful.
                    </p>
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-black hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed transition"
                    >
                      {loading ? "Sending…" : "Send request"}
                    </button>
                  </div>
                </form>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  )
}

export default RequestDemoButton
