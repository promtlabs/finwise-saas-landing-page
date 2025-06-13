const CTA: React.FC = () => {
    return (
        <section id="cta" className="mt-10 mb-5 lg:my-20">
            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                <div className="h-full w-full">
                    <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
                        <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
                    </div>

                    <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">
                          Get Early Access to GetHooked
                        </h2>

                        <p className="mx-auto max-w-xl md:px-5">
                          Be the first to try AI-powered viral video hook generation. Join our waitlist and get notified when we launch!
                        </p>

                        <form className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto">
                          <input
                            type="email"
                            placeholder="Enter your email to join the waitlist"
                            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                            required
                          />
                          <button
                            type="submit"
                            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold shadow-md hover:from-blue-600 hover:to-green-500 transition-colors w-full sm:w-auto"
                          >
                            Join Waitlist
                          </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA