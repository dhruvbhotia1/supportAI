import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";

export function Footer() {

    const router = useRouter();

    return (

        <footer className={"border-t border-white/5"}>
            <div className={"max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 mb-10"}>
                <div className={"flex items-center gap-2"}>

                    <Link href={"/"}>

                        <div className="text-lg font-semibold tracking-tight flex items-center cursor-pointer" onClick={() => router.push("/")}>
                            <Image src="./logo.svg" height={35} width={35} alt="logo" className="mr-2"/>
                            <span className="font-bold">Support</span><span>AI</span>
                        </div>

                    </Link>



                </div>

                <div className={"flex gap-8 text-sm text-zinc-600 font-light"}>

                    <Link href={"#"} className={"hover:text-zinc-400 transition-colors"}>
                        Privacy
                    </Link>


                    <Link href={"#"} className={"hover:text-zinc-400 transition-colors"}>
                        Terms
                    </Link>

                    <Link href={"#"} className={"hover:text-zinc-400 transition-colors"}>
                        Twitter
                    </Link>

                </div>

                <div className={"text-xs text-zinc-700"}>

                    © 2026. All rights reserved.

                </div>
            </div>
        </footer>
    )
}