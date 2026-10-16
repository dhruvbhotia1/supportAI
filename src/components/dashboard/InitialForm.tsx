'use client'

import {ArrowRight, Building2Icon, ChevronLeftIcon, Command, Globe2Icon, Link2Icon, Sparkles} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button"
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";
import {createMetadata} from "@/lib/metadata/create-metadata";
import {authClient} from "@/lib/auth-client";
import {toast} from "sonner";

interface InitialData {

    businessName: string,
    websiteUrl: string,
    externalLinks: string,
}

interface Props {

    user: typeof authClient.$Infer.Session.user
}


const STEPS =  [

    {
        id: "name",
        label: "business name",
        question: "what is the name of your business?",
        description: "This will be the identity of your AI assistant",
        icon: Building2Icon,
        placeholder: "e.g. ACME corp",
        type: "text",
        field: "businessName" as keyof InitialData
    }, {
        id: "website",
        label: "website",
        question: "what is your website URL?",
        description: "We will scrape data from here to train your chatbot.",
        icon: Globe2Icon,
        placeholder: "https://acme.com",
        type: "text",
        field: "websiteUrl" as keyof InitialData
    }, {
        id: "links",
        label: "Extra Content",
        question: "Any other links to add",
        description: "Add external links Notion pages or help docs to improve the chat experience.",
        icon: Link2Icon,
        placeholder: "https://notion.so/docs,..",
        type: "textarea",
        field: "externalLinks" as keyof InitialData
    },
]

export function InitialForm({user}: Props) {

    const email = user.email as string;

    const [currentStep, setCurrentStep] = useState<number>(0)
    const [isAnimating, setIsAnimating] = useState<boolean>(false)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [formData, setFormData] = useState<InitialData>({
        businessName: "",
        websiteUrl: "",
        externalLinks: "",
    });

    const stepData = STEPS[currentStep];

    const Icon = stepData.icon;

    const isStepValid = currentStep >= 2 || (formData[stepData.field] && formData[stepData.field].trim() != "");


    const progress = ((currentStep+1)/STEPS.length)*100;

    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);


    useEffect(() => {
        setTimeout(() => {
            if(inputRef.current) {
                inputRef.current.focus();
            }
        }, 300)
    }, [currentStep]);

    async function handleNext() {

        if(!isStepValid) {return;}

        const currentField = STEPS[currentStep].field;

        const value = formData[currentField];

        if(currentStep > 2 && (!value || value.trim() === "")) return;

        if(currentStep < STEPS.length - 1) {

            setIsAnimating(true);
            setTimeout(() => {
                setCurrentStep((prev) => prev+1);
                setIsAnimating(false);
            }, 300)
        } else {
            handleSubmit()
        }
    }

    function handleBack() {
        if(currentStep > 0) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentStep((prev) => prev-1)
                setIsAnimating(false);
            }, 300);
        }
    }

    function handleKeyDown(e: React.KeyboardEvent) {

        if(STEPS[currentStep].type === "textarea") {
            if((e.metaKey || e.ctrlKey) && e.key === "Enter") {
                e.preventDefault();
                handleNext();
            }

            return;
        }

        if(e.key === "Enter" && !e.shiftKey) {

            e.preventDefault();
            handleNext()

        }


    }

    async function handleSubmit() {

        setIsSubmitting(true);

        const data = await createMetadata({
            email,
            business_name: formData.businessName,
            website_url: formData.websiteUrl,
            externalLinks: formData.externalLinks
        })

        if(data.status === "success") {



            toast.success("Successfully submitted!");
        }else {

            toast.error(data.errorMessage )
        }

    }



    return (
        <div className={"w-full max-w-xl mx-auto min-w-100 flex flex-col justify-center"}>

            <div className={"fixed top-0 left-0 w-full h-1 bg-white/5"} >
                 <div className={"h-full bg-[#FF3902] transition-all duration-500 ease-out"} style={{width: `${progress}%`}}/>

            </div>

            <div className={"fixed top-6 right-6 md:top-8 md:right-8 text-xs font-medium text-zinc-600 uppercase tracking-widest pointer-events-none fade-in"}>

                Setup your account
            </div>

            {isSubmitting ? (
                <div className={"flex flex-col items-center justify-center text-center animate-in fade-in duration-700"}>

                    <div className={"relative mb-8"}>

                        <div className={"absolute inset-0 bg-indigo-500/2 blur-xl rounded-full animate-pulse"}/>

                        <div className={"relative w-16 h-16 bg-linear-to-tr from-[#FF3902] to-[#FF3909] rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20"}>
                            <Sparkles className={"w-8 h-8 text-white animate-bounce"}/>
                        </div>
                    </div>
                    <h2 className={"text-2xl font-medium text-white mb-2"}>
                        Storing your organization info!
                    </h2>

                    <p className={"text-zinc-500"}>Scanning {formData.websiteUrl}...</p>
                </div>
            ) : (

                <div className={cn("transition-all duration-300 ease-in-out transform", isAnimating ? "opacity-0 translate-y-4 scale-95" : "opacity-100 translate-y-0 scale-100")}>
                    <div className={"flex items-center justify-between mb-8"}>

                        <div className={"flex items-center gap-2"}>

                            {currentStep > 0 && (
                                <Button variant={"ghost"} size={"icon"} onClick={handleBack} className={"text-zinc-500 hover:text-zinc-300 hover: bg-white/5 rounded-full -ml-2 w-8 h-8"}>
                                    <ChevronLeftIcon className={"w-5 h-5"}/>
                                </Button>
                            )}

                            <span className={"text-xs font-medium text-[#FF3902] uppercase tracking-wider border border-white/10 p-3"}>

                                Step {currentStep+1} of {STEPS.length}

                            </span>

                        </div>

                    </div>

                    <div className={"space-y-6"}>
                        <div className={"space-y-2"}>

                            <h1 className={"text-3xl md:text-4xl font-medium text-white leading-tight"}>
                                {stepData.question}
                            </h1>

                            <p className={"text-lg text-zinc-500 font-light"}>
                                {stepData.description}
                            </p>

                        </div>

                        <div className={"relative group"}>

                            {stepData.type === "textarea" ? (
                                <Textarea ref={inputRef as any} value={formData[stepData.field] as string} onChange={(e) => setFormData({...formData, [stepData.field]: e.target.value})} onKeyDown={handleKeyDown} placeholder={stepData.placeholder} className={"w-full bg-transparent border-0 border-b text-xl md:text-2xl py-4 pr-12 text-white focus-visible:ring-0 focus-visible:border-[#FF3902] rounded-none h-auto resize-none min-h-30 shadow-none transition-colors"} autoFocus={true}/>
                            ) : (

                                <Input ref={inputRef as any} value={formData[stepData.field] as string} onChange={(e) => setFormData({...formData, [stepData.field]: e.target.value})} onKeyDown={handleKeyDown} placeholder={stepData.placeholder} className={"w-full bg-transparent border-0 border-b text-xl md:text-2xl py-4 pr-12 text-white focus-visible:ring-0 focus-visible:border-[#FF3902] rounded-none h-auto shadow-none transition-colors"} autoFocus={true}/>
                            )}

                            <div className={"absolute right-0 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none"}>

                                <Icon className={"w-6 h-6 mr-7 "}/>

                            </div>

                        </div>

                        <div className={"flex items-center justify-between pt-8"}>

                            <div className={"hidden sm:flex items-center gap-2 text-xs text-zinc-600"}>

                                {
                                    stepData.type === "textarea" ? (
                                        <>
                                            <Command className={"w-3 h-3"}/>
                                            <span>+ Enter</span>
                                        </>
                                    ) : (

                                        <span>Press Enter</span>

                                    )
                                }

                                <span className={"ml-1"}>to continue</span>

                            </div>

                            <Button onClick={handleNext} disabled={!isStepValid} className={cn("rounded-full px-8 py-6 text-base font-medium transition-all duration-300", !isStepValid ? "bg-zinc-800 text-zinc-500 hover:bg-zinc-800 cursor-not-allowed" : "bg-white text-black hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10")}>

                                {currentStep === STEPS.length - 1 ? "Submit" : "Continue"}
                                {currentStep === STEPS.length - 1 ? (
                                    <Sparkles className={"w-4 h-4 ml-2"}/>
                                ) : (
                                    <ArrowRight className={"w-4 h-4 ml-2"}/>
                                )}

                            </Button>

                        </div>

                    </div>
                </div>

            )
            }

        </div>
    )

}