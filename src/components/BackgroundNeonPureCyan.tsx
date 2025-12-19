// src/components/BackgroundNeonPureCyan.tsx
const BackgroundNeonPureCyan = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />

      {/* diagonal band of cyan glows */}
      <div className="absolute -top-44 -left-32 h-[420px] w-[420px] rounded-full
                      bg-cyan-400/70 blur-[140px]" />

      <div className="absolute top-1/3 -right-40 h-[420px] w-[420px] rounded-full
                      bg-cyan-300/55 blur-[150px]" />

      <div className="absolute bottom-[-140px] left-1/4 h-[420px] w-[420px] rounded-full
                      bg-cyan-500/45 blur-[170px]" />

      {/* faint center wash */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 h-[520px] w-[520px]
                      rounded-full bg-cyan-200/18 blur-[210px]" />
    </div>
  )
}

export default BackgroundNeonPureCyan
