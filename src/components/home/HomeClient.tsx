'use client'
import { motion } from "motion/react"
import {useRouter} from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import {NavUser} from "@/components/home/NavUserButton";

interface Props {

    user: typeof authClient.$Infer.Session.user | undefined;

}

export const HomeClient = ({user}: Props) => {

    const router = useRouter();

  return (
    <div className="overflow-x-hidden">

        <motion.div className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b" initial={{ y: -80 }} animate={{ y: 0 }} transition={{duration: 0.5}}>
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between bg-transparent">

                <Link href={"/"}>

                    <div className="text-lg font-semibold tracking-tight flex items-center cursor-pointer" onClick={() => router.push("/")}>
                        <Image src="./logo.svg" height={35} width={35} alt="logo" className="mr-2"/>
                        <span className="font-bold">Support</span><span>AI</span>
                    </div>

                </Link>

                <div className={"flex items-center gap-4"}>
                    {
                        user ? (

                            <NavUser user={user}/>

                        ) : (
                            <motion.button className="px-5 py-2 rounded-full text-white text-sm font-medium hover:bg-zinc-800 transition disabled:opacity-60 flex items-center gap-2 cursor-pointer" onClick={() => router.push("/sign-in")}>
                                Get Started
                            </motion.button>
                        )
                    }
                </div>
            </div>
        </motion.div>
    </div>
  )
}
