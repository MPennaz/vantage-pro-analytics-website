// src/components/Background1.tsx
const Background1 = () => {
  return (
    <div>
      <div className="fixed top-0 -z-10">
        <div className="blur-[200px] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-cyan-500/20 to-sky-500/5" />
      </div>
      <div className="fixed top-0 end-0 -z-10">
        <div className="blur-[200px] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-cyan-500/20 to-sky-500/5" />
      </div>
      <div className="fixed inset-0 flex items-center justify-center -z-10">
        <div className="blur-[200px] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-cyan-500/20 to-sky-500/5" />
      </div>
      <div className="fixed bottom-0 start-0 -z-10">
        <div className="blur-[200px] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-cyan-500/20 to-sky-500/5" />
      </div>
      <div className="fixed bottom-0 end-0 -z-10">
        <div className="blur-[200px] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-cyan-500/20 to-sky-500/5" />
      </div>
    </div>
  )
}

export default Background1
