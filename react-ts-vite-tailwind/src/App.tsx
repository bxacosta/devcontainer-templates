import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen w-screen items-center justify-center p-6 dark:bg-black">
      <main className="relative mb-16 overflow-hidden rounded-xl border-2 border-b-0 border-cyan-200/50 px-20 py-16 shadow-lg shadow-cyan-600/30">
        <div className="flex flex-col items-center gap-12">
          <div className="flex items-center justify-center gap-4 ps-1">
            <img
              className="size-28 drop-shadow-xl transition hover:drop-shadow-[0_0_30px_rgba(56,189,248,0.30)]"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="vite-logo"
            />
            <span className="px-4 text-4xl text-gray-600 dark:text-gray-100">+</span>
            <img
              className="size-24 drop-shadow-xl transition hover:drop-shadow-[0_0_25px_rgba(49,120,198,0.45)]"
              src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg"
              alt="ts-logo"
            />
            <span className="px-4 text-4xl text-gray-600 dark:text-gray-100">+</span>
            <img
              className="size-28 drop-shadow-xl transition hover:drop-shadow-[0_0_25px_rgba(56,189,248,0.25)]"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              alt="tailwind-logo"
            />
          </div>
          <div className="text-center">
            <button
              type="button"
              onClick={() => setCount(count => count + 1)}
              className="rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 px-6 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/50 hover:bg-gradient-to-l"
            >
              count is {count}
            </button>
            <p className="my-4 text-sm text-gray-700 dark:text-gray-100">
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute left-[7%] top-0 opacity-50">
          <svg width="1237" height="405" viewBox="0 0 1237 405" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter1)">
              <ellipse cx="618.5" cy="-213" rx="268.5" ry="268" fill="#48DCFF"></ellipse>
            </g>
            <defs>
              <filter
                id="filter1"
                x="0"
                y="-831"
                width="1237"
                height="1236"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="175" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="pointer-events-none absolute right-[7%] top-0 opacity-50">
          <svg width="1237" height="405" viewBox="0 0 1237 405" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter2)">
              <ellipse cx="618.5" cy="-213" rx="268.5" ry="268" fill="#3935FB"></ellipse>
            </g>
            <defs>
              <filter
                id="filter2"
                x="0"
                y="-831"
                width="1237"
                height="1236"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="175" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2">
          <svg width="702" height="2" viewBox="0 0 702 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter3)">
              <rect width="700" height="2" transform="matrix(-1 0 0 1 701 1)" fill="url(#gradient1)" />
            </g>
            <defs>
              <filter
                id="filter3"
                x="0"
                y="0"
                width="702"
                height="4"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" />
                <feGaussianBlur stdDeviation="0.5" />
              </filter>
              <linearGradient id="gradient1" x1="0" y1="1" x2="700" y2="1" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38BDF8" stopOpacity="0"></stop>
                <stop offset="0.3229" stopColor="#48DCFF"></stop>
                <stop offset="0.6719" stopColor="#EC4899" stopOpacity="0.3"></stop>
                <stop offset="1" stopColor="#EC4899" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2">
          <svg width="708" height="5" viewBox="0 0 708 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter4)">
              <rect width="700" height="2" transform="matrix(-1 0 0 1 704 4)" fill="url(#gradient2)" />
            </g>
            <defs>
              <filter
                id="filter4"
                x="0"
                y="0"
                width="708"
                height="10"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" />
                <feGaussianBlur stdDeviation="2" />
              </filter>
              <linearGradient id="gradient2" x1="0" y1="1" x2="700" y2="1" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38BDF8" stopOpacity="0"></stop>
                <stop offset="0.3229" stopColor="#48DCFF"></stop>
                <stop offset="0.6719" stopColor="#EC4899" stopOpacity="0.3"></stop>
                <stop offset="1" stopColor="#EC4899" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </main>

      <div className="pointer-events-none absolute top-0 h-full w-full rotate-180 transform opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 1008" className="h-full w-full">
          <g filter="url(#filter5)">
            <path
              transform="rotate(5.378 -555.062 600)"
              fill="url(#gradient3)"
              d="M-555.062 600h2166.28v1045h-2166.28z"
            />
          </g>
          <defs>
            <linearGradient
              id="gradient3"
              x1="446.248"
              y1="2186"
              x2="1151.32"
              y2="235.034"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4FC3F7" />
              <stop offset=".898" stopColor="#81D4FA" stopOpacity=".64" />
              <stop offset="1" stopColor="#fff" />
            </linearGradient>
            <filter
              id="filter5"
              x="-1253"
              y="0"
              width="3454.68"
              height="2443.42"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" />
              <feGaussianBlur stdDeviation="300" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default App;
