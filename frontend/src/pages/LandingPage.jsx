import React, { useState } from "react";

function LandingPage() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-50">
      <header className="relative z-10 p-4 md:py-6">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="flex-shrink-0">
              <a href="#" title="Logo" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg" alt="Logo" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button type="button" className="text-gray-900" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
                {expanded ? (
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:justify-center md:space-x-10 md:absolute md:inset-y-0 md:left-1/2 md:-translate-x-1/2 lg:space-x-16">
              {["Features", "Pricing", "Support"].map((item) => (
                <a key={item} href="#" className="text-base font-medium text-gray-900 hover:text-opacity-50 transition-all">
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden md:flex">
              <a href="/review" className="px-6 py-3 text-base font-bold text-white bg-gray-900 rounded hover:bg-gray-600">
                Try for free
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {expanded && (
            <nav className="mt-4 bg-white shadow-lg rounded-lg">
              <div className="px-4 py-6 space-y-4">
                {["Features", "Pricing", "Support"].map((item) => (
                  <a key={item} href="#" className="block text-base font-medium text-gray-900 hover:bg-gray-100 px-4 py-2 rounded">
                    {item}
                  </a>
                ))}
                <a href="/review" className="block text-center bg-gray-900 text-white font-bold py-3 rounded hover:bg-gray-700">
                  Try for free
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="relative py-12 sm:py-16 lg:pb-40">
          <div className="absolute bottom-0 right-0 overflow-hidden">
            <img
              className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
              alt=""
            />
          </div>

          <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
              <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                  An editor that helps you write clean codes.
                </h1>
                <p className="mt-2 text-lg text-gray-600 sm:mt-6 font-inter">
                Instantly analyze and improve your code with AI-driven insights.
                </p>

                <a
                  href="/review"
                  title=""
                  className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded sm:mt-10 font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Try our free Code Review
                </a>

                <div className="mt-8 sm:mt-16">
                  <div className="flex items-center justify-center lg:justify-start">
                    <svg
                      className="w-5 h-5 text-[#FDB241]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-[#FDB241]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-[#FDB241]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-[#FDB241]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-[#FDB241]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  <blockquote className="mt-6">
                    <p className="text-lg font-bold text-gray-900 font-pj">
                      Best code editor in market!
                    </p>
                    <p className="mt-3 text-base leading-7 text-gray-600 font-inter">
                      Consectetur adipiscing elit. Vehicula massa in enim
                      luctus. Rutrum arcu, aliquam nulla tincidunt gravida.
                      Cursus convallis dolor semper pretium ornare.
                    </p>
                  </blockquote>

                  <div className="flex items-center justify-center mt-3 lg:justify-start">
                    <img
                      className="flex-shrink-0 object-cover w-6 h-6 overflow-hidden rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/avatar-female.png"
                      alt=""
                    />
                    <p className="ml-2 text-base font-bold text-gray-900 font-pj">
                      Denny Jones
                    </p>
                  </div>
                </div>
              </div>

              <div className="xl:col-span-1">
                <img
                  className="w-full mx-auto"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default LandingPage;
