// src/components/BackgroundNeonTron.tsx
const BackgroundNeonTron = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />

      {/* cyan blast */}
      <div className="absolute -top-48 -left-40 h-[460px] w-[460px] rounded-full
                      bg-cyan-400/80 blur-[130px]" />

      {/* magenta blast */}
      <div className="absolute -top-40 -right-40 h-[460px] w-[460px] rounded-full
                      bg-fuchsia-500/70 blur-[140px]" />

      {/* center fusion */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 h-[540px] w-[540px]
                      rounded-full bg-gradient-to-br from-cyan-300/45 via-sky-400/40 to-fuchsia-400/40
                      blur-[170px]" />

      {/* bottom cyan streak */}
      <div className="absolute -bottom-52 left-1/4 h-[420px] w-[420px] rounded-full
                      bg-cyan-300/60 blur-[160px]" />

      {/* bottom-right purple accent */}
      <div className="absolute -bottom-40 -right-32 h-[320px] w-[320px] rounded-full
                      bg-violet-500/50 blur-[150px]" />
    </div>
  )
}

export default BackgroundNeonTron
