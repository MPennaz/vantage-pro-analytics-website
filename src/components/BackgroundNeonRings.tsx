// src/components/BackgroundNeonRings.tsx
const BackgroundNeonRings = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />

      {/* corner glows */}
      <div className="absolute -top-40 -left-40 h-[360px] w-[360px] rounded-full
                      bg-cyan-400/55 blur-[150px]" />
      <div className="absolute -bottom-40 -right-40 h-[360px] w-[360px] rounded-full
                      bg-sky-400/45 blur-[150px]" />

      {/* concentric center rings */}
      <div className="absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2
                      rounded-full bg-cyan-300/10 blur-[200px]" />
      <div className="absolute top-1/2 left-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2
                      rounded-full border border-cyan-400/15" />
      <div className="absolute top-1/2 left-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2
                      rounded-full border border-cyan-300/20" />
    </div>
  )
}

export default BackgroundNeonRings
