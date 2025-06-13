// All references to Image, AppStoreButton, PlayStoreButton, and heroDetails have been removed to prevent build errors.

import React from 'react';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]">
            </div>

            <div className="text-center">
                <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">
                  GetHooked: Instantly Generate Viral Video Hooks with AI
                </h1>
                <p className="mt-4 text-foreground max-w-lg mx-auto">
                  AI-powered video analysis that transcribes your content and generates viral hooks tailored for YouTube Shorts, TikTok, and Instagram Reels. Join the waitlist to get early access!
                </p>
                <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto">
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
                <div className="relative mt-12 md:mt-16 mx-auto z-10">
                  <div className="w-[384px] h-[220px] bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 text-lg border-2 border-gray-700">
                    App Screenshot Here
                  </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
