"use client"

import { useEffect } from "react"

export default function SwRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return

    const basePath =
      process.env.NODE_ENV === "production" ? "/Next-Rails-Timer-v3" : ""

    window.addEventListener("load", () => {
      navigator.serviceWorker.register(`${basePath}/sw.js`)
    })
  }, [])

  return null
}