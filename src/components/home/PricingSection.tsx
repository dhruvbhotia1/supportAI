import {Check} from "lucide-react";
import {Button} from "@/components/ui/button";

export function PricingSection() {

    return (

        <section className={"py-20 px-6 mx-auto text-center max-w-7xl"}>

            <h2 className={"text-3xl md:text-4xl font-medium text-white tracking-tight  mb-4"}>

                Fair, usage-based pricing

            </h2>

            <p className={"text-zinc-500 font-medium mb-16"}>
                Start free, pay as you go.
            </p>

            <div className={"grid lg:grid-cols-3 gap-6 mx-auto"}>

                <div className={"p-8 rounded-3xl border-white/5 backdrop-blur-xs flex flex-col items-start text-left hover:bg-zinc-900/10 transition-colors"}>

                    <div className={"text-sm font-medium text-zinc-400 mb-2"}>
                        Starter
                    </div>

                    <div className={"text-4xl font-medium text-white tracking-tight mb-6"}>

                        $0 <span className={"text-lg text-zinc-600 font-light"}>/mo</span>

                    </div>

                    <ul className={"space-y-3 b-8 text-sm text-zinc-300 font-light w-full"}>

                        <li className={"flex items-center gap-3"}>
                            <Check className={"w-4 h-4 text-zinc-600"}/> 100 conversation/month
                        </li>

                        <li className={"flex items-center gap-3"}>
                            <Check className={"w-4 h-4 text-zinc-600"}/> 1 Knowledge source
                        </li>

                        <li className={"flex items-center gap-3"}>
                            <Check className={"w-4 h-4 text-zinc-600"}/> Community support
                        </li>

                    </ul>

                    <Button variant={"ghost"} className={"mt-6 w-full py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium cursor-pointer"}>
                        Start free
                    </Button>

                </div>

                <div className={"p-8 rounded-3xl border-white/5 backdrop-blur-xs flex flex-col items-start text-left hover:bg-zinc-900/10 transition-colors"}>

                    <div className={"text-sm font-medium text-zinc-400 mb-2"}>
                        Pro
                    </div>

                    <div className={"text-4xl font-medium text-white tracking-tight mb-6"}>

                        $10 <span className={"text-lg text-zinc-600 font-light"}>/mo</span>

                    </div>

                    <ul className={"space-y-3 b-8 text-sm text-zinc-300 font-light w-full"}>

                        <li className={"flex items-center gap-3"}>
                            <Check className={"w-4 h-4 text-zinc-600"}/> 1000 conversation/month
                        </li>

                        <li className={"flex items-center gap-3"}>
                            <Check className={"w-4 h-4 text-zinc-600"}/> 3 Knowledge source
                        </li>

                        <li className={"flex items-center gap-3"}>
                            <Check className={"w-4 h-4 text-zinc-600"}/> Community support
                        </li>

                    </ul>

                    <Button variant={"ghost"} className={"mt-6 w-full py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium cursor-pointer"}>
                        Choose Pro
                    </Button>

                </div>

                <div className={"p-8 rounded-3xl border-white/5 backdrop-blur-xs flex flex-col items-start text-left hover:bg-zinc-900/10 transition-colors"}>

                    <div className={"text-sm font-medium text-zinc-400 mb-2"}>
                        Enterprise
                    </div>

                    <div className={"text-4xl font-medium text-white tracking-tight mb-6"}>

                        $100 <span className={"text-lg text-zinc-600 font-light"}>/mo</span>

                    </div>

                    <ul className={"space-y-3 b-8 text-sm text-zinc-300 font-light w-full"}>

                        <li className={"flex items-center gap-3"}>
                            <Check className={"w-4 h-4 text-zinc-600"}/> 10000 conversation/month
                        </li>

                        <li className={"flex items-center gap-3"}>
                            <Check className={"w-4 h-4 text-zinc-600"}/> 5 Knowledge source
                        </li>

                        <li className={"flex items-center gap-3"}>
                            <Check className={"w-4 h-4 text-zinc-600"}/> Community support
                        </li>

                    </ul>

                    <Button variant={"ghost"} className={"mt-6 w-full py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium cursor-pointer"}>
                        Choose Enterprise
                    </Button>

                </div>

            </div>

        </section>
    )
}