import IconifyIcon from "@/components/wrappers/IconifyIcon"

const ActionBox = () => {
  return (
    <section className="py-20" data-aos="fade-up" data-aos-easing="ease" data-aos-duration={1000}>
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-medium capitalize text-white mb-4">Supercharge your content generation process.</h2>
          <p className="text-sm text-default-200 font-medium">Start working with Tailwindcss It allows you to compose complex designs <br /> by combining and customizing utility classes..</p>
          <form className="space-y-2 mt-6">
            <div className="relative w-full">
              <input type="email" id="subcribe" className="py-4 ps-4 pe-32 w-full h-14 text-white rounded-lg bg-default-950/40 backdrop-blur-3xl border-white/10 focus:ring-0 focus:border-white/10" placeholder="Enter your email :" name="email" />
              <button type="submit" className="inline-flex items-center justify-center gap-2 px-6 absolute top-[8px] end-[8px] h-10 bg-primary hover:bg-primary-hover border-primary hover:border-primary-700 text-white rounded-md"><span className="text-base font-medium text-white hidden md:block">Start for free</span> <IconifyIcon icon="lucide:send" className="h-5 w-5 text-default-300 group-hover:text-white md:hidden block" /></button>
            </div>
          </form>
        </div>
      </div>
    </section>

  )
}

export default ActionBox