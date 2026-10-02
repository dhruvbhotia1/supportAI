import Image from "next/image";

export function SocialProof() {

    return (
        <section className={"py-12 border-y border-white/5 bg-black/20"}>

            <div className={"max-w-6xl mx-auto px-6 text-center"}>

                <p className={"text-xs font-medium text-zinc-600 uppercase tracking-widest mb-8"}>
                    
                    Trusted by modern product teams
                </p>

                <div className={"flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale"}>

                    <div className={"flex items-center justify-between gap-x-2"}>

                        <Image src={"./acme_logo.svg"} alt={"acme logo"} width={32} height={32} />
                        <span className={"text-lg font-bold tracking-light text-white"}>

                        ACME
                    </span>
                    </div>

                    <div className={"flex items-center justify-between gap-x-2"}>

                        <Image src={"./sphere_logo.svg"} alt={"acme logo"} width={32} height={32} />
                        <span className={"text-lg font-bold tracking-light text-white"}>

                        SPHERE
                    </span>
                    </div>

                    <div className={"flex items-center justify-between gap-x-2"}>

                        <Image src={"./nexus_logo.svg"} alt={"acme logo"} width={32} height={32} />
                        <span className={"text-lg font-bold tracking-light text-white"}>

                        NEXUS
                    </span>
                    </div>

                    <div className={"flex items-center justify-between gap-x-2"}>

                        <Image src={"./vantage_logo.svg"} alt={"acme logo"} width={32} height={32} />
                        <span className={"text-lg font-bold tracking-light text-white"}>

                        VANTAGE
                    </span>
                    </div>

                    <div className={"flex items-center justify-between gap-x-1"}>

                        <Image src={"./horizontal_logo.svg"} alt={"acme logo"} width={32} height={32} />
                        <span className={"text-lg font-bold tracking-light text-white"}>

                        HORIZON
                    </span>
                    </div>

                </div>
            </div>
        </section>
    )
}