"use client"

import { useEffect, useRef, useState } from "react"
import ThreeBox from "@/components/ThreeBox"

export default function TimerPage() {
  const [elapsedTime, setElapsedTime] = useState(0)
  const [currentLapTime, setCurrentLapTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [laps, setLaps] = useState<number[]>([])

  const startTimeRef = useRef<number | null>(null)
  const lapStartTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isRunning) return

    const now = Date.now()

    setElapsedTime((prevElapsedTime) => {
      startTimeRef.current = now - prevElapsedTime
      return prevElapsedTime
    })

    setCurrentLapTime((prevCurrentLapTime) => {
      lapStartTimeRef.current = now - prevCurrentLapTime
      return prevCurrentLapTime
    })

    const intervalId = setInterval(() => {
      const currentTime = Date.now()

      if (startTimeRef.current !== null) {
        setElapsedTime(currentTime - startTimeRef.current)
      }

      if (lapStartTimeRef.current !== null) {
        setCurrentLapTime(currentTime - lapStartTimeRef.current)
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [isRunning])

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600000)
    const minutes = Math.floor((time % 3600000) / 60000)
    const seconds = Math.floor((time % 60000) / 1000)

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0",
    )}:${String(seconds).padStart(2, "0")}`
  }

  const handleStartStop = () => {
    setIsRunning((prev) => !prev)
  }

  const handleReset = () => {
    setIsRunning(false)
    setElapsedTime(0)
    setCurrentLapTime(0)
    setLaps([])
    startTimeRef.current = null
    lapStartTimeRef.current = null
  }

  const handleLap = () => {
    if (!isRunning) return

    setLaps((prev) => [currentLapTime, ...prev])
    setCurrentLapTime(0)
    lapStartTimeRef.current = Date.now()
  }

  return (
    <>
      <ThreeBox />

      <main className="relative z-10 flex min-h-dvh flex-col items-center justify-start gap-5 px-4 pt-8 pb-28 sm:gap-6 sm:pt-10 md:pb-32">
        <div className="rounded-2xl border border-black bg-white/70 px-6 py-4 shadow-[4px_5px_2px_rgba(0,0,0,0.8)] sm:px-10 md:px-30">
          <p className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {formatTime(elapsedTime)}
          </p>
        </div>

        <div className="flex w-full max-w-[340px] items-center justify-between px-6 sm:max-w-md sm:px-10 md:max-w-xl">
          {isRunning ? (
            <button
              onClick={handleLap}
              className="h-16 w-16 rounded-full border bg-yellow-200 text-sm font-bold shadow sm:h-18 sm:w-18 md:h-20 md:w-20 md:text-base"
            >
              ラップ
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="h-16 w-16 rounded-full border bg-yellow-200 text-sm font-bold shadow sm:h-18 sm:w-18 md:h-20 md:w-20 md:text-base"
            >
              リセット
            </button>
          )}

          <button
            onClick={handleStartStop}
            className={`h-16 w-16 rounded-full border text-sm font-bold shadow sm:h-18 sm:w-18 md:h-20 md:w-20 md:text-base ${
              isRunning ? "bg-red-300" : "bg-green-300"
            }`}
          >
            {isRunning ? "ストップ" : "スタート"}
          </button>
        </div>

        <div className="w-full max-w-[320px] border-b border-gray-500 sm:max-w-96"></div>

        <ul className="w-full max-w-[300px] rounded-xl bg-white/50 px-3 sm:max-w-80">
          {elapsedTime > 0 && (
            <li className="flex justify-between border-b py-2 text-sm sm:text-base">
              <span>ラップ {laps.length + 1}</span>
              <span>{formatTime(currentLapTime)}</span>
            </li>
          )}

          {laps.map((lap, index) => (
            <li
              key={`${lap}-${index}`}
              className="flex justify-between border-b py-2 text-sm sm:text-base"
            >
              <span>ラップ {laps.length - index}</span>
              <span>{formatTime(lap)}</span>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}