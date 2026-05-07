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
    <main className="relative z-10 flex min-h-screen flex-col items-center justify-start gap-6 pt-10">
      <div className="rounded-2xl border border-black px-30 py-4 shadow-[5px_6px_2px_rgba(0,0,0,0.8)]">
        <p className="text-6xl font-bold">{formatTime(elapsedTime)}</p>
      </div>

      <div className="flex gap-50">
        {isRunning ? (
          <button
            onClick={handleLap}
            className="h-20 w-20 rounded-full border bg-yellow-200"
          >
            ラップ
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="h-20 w-20 rounded-full border bg-yellow-200"
          >
            リセット
          </button>
        )}

        <button
          onClick={handleStartStop}
          className={`h-20 w-20 rounded-full border ${
            isRunning ? "bg-red-300" : "bg-green-300"
          }`}
        >
          {isRunning ? "ストップ" : "スタート"}
        </button>
      </div>

      <div className="w-96 border-b border-gray-500"></div>

      <ul className="w-64">
        {elapsedTime > 0 && (
          <li className="flex justify-between border-b py-2">
            <span>ラップ {laps.length + 1}</span>
            <span>{formatTime(currentLapTime)}</span>
          </li>
        )}

        {laps.map((lap, index) => (
          <li
            key={`${lap}-${index}`}
            className="flex justify-between border-b py-2"
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