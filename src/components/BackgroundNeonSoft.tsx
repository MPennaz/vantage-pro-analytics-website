// src/components/BackgroundNeonSoft.tsx
const BackgroundNeonSoft = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />

      {/* top-left soft glow */}
      <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full
                      bg-cyan-300/45 blur-[170px]" />

      {/* top-right soft glow */}
      <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full
                      bg-sky-400/35 blur-[180px]" />

      {/* center wash */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 h-[520px] w-[520px]
                      rounded-full bg-cyan-200/18 blur-[220px]" />

      {/* bottom accent */}
      <div className="absolute -bottom-40 left-1/3 h-[380px] w-[380px] rounded-full
                      bg-sky-300/28 blur-[190px]" />
    </div>
  )
}

export default BackgroundNeonSoft
