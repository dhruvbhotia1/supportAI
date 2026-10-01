'use client'

import { motion } from "motion/react"
import {useRouter} from "next/navigation";
import {ThemeToggle} from "@/components/theme-toggle";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

interface Props {

    userId: string | undefined;
}

export const HomeClient = ({userId} : Props) => {

  const router = useRouter();

  return (
    <div className="min-h-screen overflow-x-hidden">

      <motion.div className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b" initial={{ y: -80 }} animate={{ y: 0 }} transition={{duration: 0.5}}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between bg-transparent">

          <div className="text-lg font-semibold tracking-tight flex items-center cursor-pointer" onClick={() => router.push("/")}>
            <Image src="./logo.svg" height={35} width={35} alt="logo" className="mr-2"/>
            <span className="font-bold">Support</span><span>AI</span>
          </div>

          <div className={"flex items-center gap-4"}>
              {
                  userId ? (

                    <motion.button className="px-5 py-2 rounded-full bg-zinc-800 text-white text-sm font-semibold hover:bg-zinc-800 transition disabled:opacity-60 flex items-center gap-2 cursor-pointer" onClick={() => authClient.signOut()}>
                        Sign Out
                    </motion.button>

                  ) : (
                      <motion.button className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-zinc-800 transition disabled:opacity-60 flex items-center gap-2 cursor-pointer" onClick={() => router.push("/sign-in")}>
                          Get Started
                      </motion.button>
                  )

              }

              <ThemeToggle />
          </div>
        </div>
      </motion.div>

    </div>
  )
}
