// src/components/QuestionModal.tsx

"use client"

import { useState, FormEvent } from "react"
import clsx from "clsx"
import IconifyIcon from "@/components/wrappers/IconifyIcon"

type QuestionModalProps = {
  triggerLabel?: string
  triggerClassName?: string
  subject?: string
}

type ToastState =
  | {
      type: "success" | "error"
      message: string
    }
  | null

const QuestionModal = ({
  triggerLabel = "Still have questions?",
  triggerClassName,
  subject = "Website question",
}: QuestionModalProps) => {
  const [open, setOpen] = useState(false)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [question, setQuestion] = useState("")

  const [submitting, setSubmitting] = useState(false)
  const [toast, setToast] = useState<ToastState>(null)

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message })
    setTimeout(() => {
      setToast((current) => (current?.message === message ? null : current))
    }, 5000)
  }

  const resetForm = () => {
    setName("")
    setEmail("")
    setCompany("")
    setQuestion("")
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!email || !question) {
      showToast("error", "Please fill in required fields (*) before submitting.")
      return
    }

    try {
      setSubmitting(true)

      const res = await fetch("/api/question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject,
          name,
          email,
          company,
          question,
        }),
      })

      if (!res.ok) {
        let msg = "Something went wrong sending your question. Please try again."
        try {
          const data = await res.json()
          if (data?.error) msg = data.error
        } catch {
          // ignore
        }
        showToast("error", msg)
        return
      }

      showToast("success", "Thanks! Your question has been sent. We’ll reply soon.")
      setOpen(false)
      resetForm()
    } catch (err) {
      console.error("Question submit error:", err)
      showToast("error", "Unexpected error. Please try again in a minute.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={clsx(
          "mt-10 inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300",
          triggerClassName,
        )}
      >
        {triggerLabel}
        <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
      </button>

      {/* Toast */}
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
            <div className="mt-0.5">{toast.type === "success" ? "✅" : "⚠️"}</div>
            <div className="flex-1">
              <p className="font-medium">
                {toast.type === "success" ? "Sent" : "Something went wrong"}
              </p>
              <p className="mt-0.5 text-xs text-emerald-100/90">{toast.message}</p>
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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-xl rounded-2xl bg-default-950 border border-default-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-default-800">
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-white">
                  Ask a question
                </h2>
                <p className="text-xs md:text-sm text-default-300 mt-1">
                  Send us a quick note and we&apos;ll get back to you.
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
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-default-800 bg-default-950/80 px-3 py-2 text-sm text-default-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-default-300 mb-1">
                    Email<span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-default-800 bg-default-950/80 px-3 py-2 text-sm text-default-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-default-300 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-default-800 bg-default-950/80 px-3 py-2 text-sm text-default-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-default-300 mb-1">
                  Question<span className="text-red-500 ml-0.5">*</span>
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-default-800 bg-default-950/80 px-3 py-2 text-sm text-default-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y"
                  placeholder="What would you like to know?"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between pt-2 gap-4 flex-wrap">
                <p className="text-[11px] text-default-500 max-w-xs">
                  Your message will be sent to{" "}
                  <span className="text-default-200">info@vantageproanalytics.com</span>.
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
                    {submitting ? "Sending..." : "Send question"}
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

export default QuestionModal
