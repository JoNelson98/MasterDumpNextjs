import NextLink from 'next/link'

export default function DmstrdetailCard() {
  return (
    <>
      <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-l from-red-500 to-sky-500 bg-clip-text text-transparent sm:text-6xl">
        Our Dumpster Sizes
      </h2>

      {/* <!-- Component Start --> */}
      <div className="flex flex-wrap items-center justify-center w-full max-w-4xl mt-8">
        <div className="flex flex-col flex-grow mt-8 overflow-hidden bg-white rounded-lg shadow-lg">
          <div className="flex flex-col items-center p-10 bg-gray-200">
            <span className="font-semibold">10 Yards</span>
            <div className="flex items-center">
              <span className="text-3xl">$</span>
              <span className="text-5xl font-bold">300</span>
            </div>
          </div>
          <div className="p-10">
            <ul>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-sky-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2">Rental time up to 10 days</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-sky-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2">Total Tonnage: 2</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-sky-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2">Additional days: 10$/day</span>
              </li>
            </ul>
          </div>
          <div className="flex px-10 pb-10 justfy-center">
            <NextLink href="/booking">
              <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg">
                Book now
              </button>
            </NextLink>
          </div>
        </div>

        {/* <!-- Tile 2 --> */}
        <div className="z-10 flex flex-col flex-grow mt-8 overflow-hidden transform bg-white rounded-lg shadow-lg md:scale-110">
          <div className="flex flex-col items-center p-10 bg-gray-200">
            <span className="font-semibold">15 Yards</span>
            <div className="flex items-center">
              <span className="text-3xl">$</span>
              <span className="text-6xl font-bold">350</span>
              {/* <span className="text-2xl text-gray-500">/mo</span> */}
            </div>
          </div>
          <div className="p-10">
            <ul>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-sky-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2 italic">Rental time up to 10 days</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-sky-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2">Total Tonnage: 2</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-sky-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2">Additional days: 10$/day</span>
              </li>
            </ul>
          </div>
          <div className="flex px-10 pb-10 justfy-center">
            <NextLink href="/booking">
              <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg">
                Book now
              </button>
            </NextLink>
          </div>
        </div>

        {/* <!-- Tile 3 --> */}
        <div className="flex flex-col flex-grow overflow-hidden bg-white rounded-lg shadow-lg mt-8">
          <div className="flex flex-col items-center p-10 bg-gray-200">
            <span className="font-semibold">20 Yards</span>
            <div className="flex items-center">
              <span className="text-3xl">$</span>
              <span className="text-5xl font-bold">400</span>
              {/* <span className="text-2xl text-gray-500">/mo</span> */}
            </div>
          </div>
          <div className="p-10">
            <ul>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-sky-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2 italic">Rental time up to 10 days</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-sky-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2">Total Tonnage: 2</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-sky-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2">Additional days: 10$/day</span>
              </li>
            </ul>
          </div>
          <div className="flex px-10 pb-10 justfy-center">
            <NextLink href="/booking">
              <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg">
                Book now
              </button>
            </NextLink>
          </div>
        </div>
      </div>
    </>
  )
}
