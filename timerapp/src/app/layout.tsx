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
          <div className="border-t border-gray-300 p-4">
            <div className="flex items-center justify-center gap-10">
              <button className="flex h-16 w-16 items-center justify-center rounded-full bg-green-200">
                <Image
                  src={`${basePath}/view.svg`}
                  alt="viewLogo"
                  width={30}
                  height={30}
                />
              </button>

              <button className="flex h-16 w-16 items-center justify-center rounded-full bg-green-200">
                <Image
                  src={`${basePath}/database.svg`}
                  alt="databaseLogo"
                  width={30}
                  height={30}
                />
              </button>

              <button className="flex h-20 w-20 items-center justify-center rounded-full bg-sky-500">
                <Image
                  src={`${basePath}/coffee.svg`}
                  alt="coffeeLogo"
                  width={50}
                  height={50}
                />
              </button>

              <button className="flex h-16 w-16 items-center justify-center rounded-full bg-green-200">
                <Image
                  src={`${basePath}/search-alert.svg`}
                  alt="searchAlertLogo"
                  width={30}
                  height={30}
                />
              </button>

              <button className="flex h-16 w-16 items-center justify-center rounded-full bg-green-200">
                <Image
                  src={`${basePath}/user-pen.svg`}
                  alt="userPenLogo"
                  width={30}
                  height={30}
                />
              </button>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}