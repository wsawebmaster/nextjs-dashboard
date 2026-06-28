'use client'

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string },
  reset: () => void
}) {
  useEffect(() => {
    console.log(error);
  })

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Algo de errado!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={() => reset()}
      >
        Tentar novamente
      </button>
    </main>
  )
}
