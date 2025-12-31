// src/app/(home)/components/Contact.tsx
"use client"

import * as React from "react"

type Status = "idle" | "sending" | "sent" | "error"

export default function Contact() {
  const [status, setStatus] = React.useState<Status>("idle")
  const [error, setError] = React.useState<string | null>(null)

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const onChange =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((s) => ({ ...s, [key]: e.target.value }))

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setStatus("sending")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = (await res.json().catch(
        () => ({}) as { error?: string }
      )) as { error?: string }

      if (!res.ok) {
        setStatus("error")
        setError(data?.error ?? "Something went wrong.")
        return
      }

      setStatus("sent")
      setForm({ name: "", email: "", company: "", message: "" })
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong."
      setStatus("error")
      setError(message)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium text-white">Contact</h2>
          <p className="mt-3 text-default-200">
            Have a question or want to talk through your setup? Send a note and
            we’ll reply fast.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/10 bg-default-950/40 p-6 md:p-10">
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Name" required>
                <input
                  value={form.name}
                  onChange={onChange("name")}
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-default-500 outline-none focus:border-primary/60"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </Field>

              <Field label="Email" required>
                <input
                  value={form.email}
                  onChange={onChange("email")}
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-default-500 outline-none focus:border-primary/60"
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </Field>
            </div>

            <Field label="Company">
              <input
                value={form.company}
                onChange={onChange("company")}
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-default-500 outline-none focus:border-primary/60"
                placeholder="Company (optional)"
                autoComplete="organization"
              />
            </Field>

            <Field label="Message" required>
              <textarea
                value={form.message}
                onChange={onChange("message")}
                className="min-h-[140px] w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-default-500 outline-none focus:border-primary/60"
                placeholder="What would you like to talk about?"
              />
            </Field>

            {status === "error" && error ? (
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
                {error}
              </div>
            ) : null}

            {status === "sent" ? (
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                Message sent. We’ll get back to you shortly.
              </div>
            ) : null}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-default-400">
                By submitting, you agree we can email you back.
              </p>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block text-left">
      <div className="mb-2 flex items-center gap-2 text-sm font-medium text-white">
        <span>{label}</span>
        {required ? <span className="text-primary">*</span> : null}
      </div>
      {children}
    </label>
  )
}

