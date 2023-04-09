import React from 'react'

export default function ResetContainer({ children }) {
  return (
    <div className="z-40  flex absolute w-full h-screen top-0 bg-gradient-to-r from-neutral-300 to-stone-400 dark:bg-slate-500 items-center justify-center flex-row ">
      {children}
    </div>
  )
}
