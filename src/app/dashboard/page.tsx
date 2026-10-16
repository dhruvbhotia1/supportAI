"use client"

import {InitialForm} from "@/components/dashboard/InitialForm";
import {useEffect, useState} from "react";
import {getMetaData} from "@/lib/metadata/get-metadata";
import {authClient} from "@/lib/auth-client";
import {Loader2} from "lucide-react";

export default function DashboardPage() {

    const {data: session, isPending} = authClient.useSession();

    const [isMetaDataAvailable, setIsMetaDataAvailable] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        if(!session?.user.email) return;

        const fetchMetaData = async () => {
            setIsLoading(true);

            const response = await getMetaData({user_email: session!.user.email});

            if (response.status === "success") {
                setIsMetaDataAvailable(true);
            }

            setIsLoading(false);
        }
        fetchMetaData();
    }, [session])


    if(isLoading || isPending || !session?.user) {

        return (

            <div className="absolute left-[50%] flex h-full items-center justify-center">
                <Loader2 className="size-12 animate-spin text-[#FF3902]"/>
            </div>

        );
    }



    return (

        <div className={"flex flex-1 w-full"}>
            {
                !isMetaDataAvailable ? (
                        <div className={"w-full flex items-center justify-center p-4 min-h-"}>
                            <InitialForm user={session!.user}/>
                        </div>

                ) : (

                    <>

                    </>
                )
            }
        </div>

    )
}