// src/components/BackgroundNeon.tsx
const BackgroundNeon = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base dark backdrop (keeps it from looking muddy) */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* top-left cyan glow */}
      <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full 
                      bg-cyan-400/55 blur-[140px]" />

      {/* top-right cyan/sky blend */}
      <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full 
                      bg-gradient-to-bl from-cyan-300/60 via-sky-400/50 to-cyan-500/40 
                      blur-[150px]" />

      {/* center subtle wash so hero doesn’t go black */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 h-[520px] w-[520px] 
                      rounded-full bg-cyan-300/25 blur-[180px]" />

      {/* bottom-left softer glow */}
      <div className="absolute -bottom-40 -left-32 h-[380px] w-[380px] rounded-full 
                      bg-sky-400/35 blur-[150px]" />

      {/* tiny magenta accent for a bit of pop (optional – remove if you want pure cyan) */}
      <div className="absolute -bottom-32 -right-24 h-[260px] w-[260px] rounded-full 
                      bg-fuchsia-500/25 blur-[150px]" />
    </div>
  )
}

export default BackgroundNeon
