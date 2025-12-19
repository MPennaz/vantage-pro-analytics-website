import IconifyIcon from "@/components/wrappers/IconifyIcon"

const ActionBox = () => {
  return (
    <section className="pb-24">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-medium capitalize text-white mb-4">Supercharge your content generation process.</h2>
            <p className="w-2/3 mx-auto text-base text-default-200 font-medium">Join us today and experience the power of AI-powered text creation for yourself!</p>
            <div className="mt-8">
              <button className="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300">Get start free
                <IconifyIcon icon="lucide:move-right" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default ActionBox