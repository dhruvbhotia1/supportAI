'use client'

import { motion } from "motion/react"

export const HomeClient = () => {





  return (
    <div className="min-h-screen bg-linear-to-br from-black/50 to-zinc-50 text-zinc-800 overflow-x-hidden">

      <motion.div className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-200" initial={{ y: -80 }} animate={{ y: 0 }} transition={{duration: 0.5}}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          <div className="text-lg font-semibold tracking-tight">Support<span className="text-zinc-600">AI</span></div>

          <motion.button className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-zinc-800 transition disabled:opacity-60 flex items-center gap-2">
            Get Started
          </motion.button>
        </div>
      </motion.div>


      Hello
    </div>
  )
}
