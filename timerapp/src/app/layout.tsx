import "./globals.css"
import type { Metadata } from "next"
import Image from "next/image"
import SwRegister from "./sw-register"

const basePath =
  process.env.NODE_ENV === "production" ? "/Next-Rails-Timer-v3" : ""

export const metadata: Metadata = {
  title: "dev",
  description: "dev page",
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <SwRegister />
        {children}

        <footer className="fixed bottom-0 left-0 z-50 w-full bg-white">
          <div className="border-t border-gray-300 px-2 py-3 sm:px-4 sm:py-4">
            <div className="flex items-center justify-center gap-2 min-[390px]:gap-3 sm:gap-5 md:gap-10">
              <button className="flex h-11 w-11 items-center justify-center rounded-full bg-green-200 min-[390px]:h-12 min-[390px]:w-12 sm:h-14 sm:w-14 md:h-16 md:w-16">
                <Image
                  src={`${basePath}/view.svg`}
                  alt="viewLogo"
                  width={30}
                  height={30}
                  className="h-5 w-5 min-[390px]:h-6 min-[390px]:w-6 sm:h-7 sm:w-7 md:h-[30px] md:w-[30px]"
                />
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-full bg-green-200 min-[390px]:h-12 min-[390px]:w-12 sm:h-14 sm:w-14 md:h-16 md:w-16">
                <Image
                  src={`${basePath}/database.svg`}
                  alt="databaseLogo"
                  width={30}
                  height={30}
                  className="h-5 w-5 min-[390px]:h-6 min-[390px]:w-6 sm:h-7 sm:w-7 md:h-[30px] md:w-[30px]"
                />
              </button>

              <button className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 min-[390px]:h-16 min-[390px]:w-16 sm:h-18 sm:w-18 md:h-20 md:w-20">
                <Image
                  src={`${basePath}/coffee.svg`}
                  alt="coffeeLogo"
                  width={50}
                  height={50}
                  className="h-9 w-9 min-[390px]:h-10 min-[390px]:w-10 sm:h-11 sm:w-11 md:h-[50px] md:w-[50px]"
                />
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-full bg-green-200 min-[390px]:h-12 min-[390px]:w-12 sm:h-14 sm:w-14 md:h-16 md:w-16">
                <Image
                  src={`${basePath}/search-alert.svg`}
                  alt="searchAlertLogo"
                  width={30}
                  height={30}
                  className="h-5 w-5 min-[390px]:h-6 min-[390px]:w-6 sm:h-7 sm:w-7 md:h-[30px] md:w-[30px]"
                />
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-full bg-green-200 min-[390px]:h-12 min-[390px]:w-12 sm:h-14 sm:w-14 md:h-16 md:w-16">
                <Image
                  src={`${basePath}/user-pen.svg`}
                  alt="userPenLogo"
                  width={30}
                  height={30}
                  className="h-5 w-5 min-[390px]:h-6 min-[390px]:w-6 sm:h-7 sm:w-7 md:h-[30px] md:w-[30px]"
                />
              </button>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}