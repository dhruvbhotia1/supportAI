
import "server-only"
import {cache} from "react";
import {ApiResponse} from "@/lib/types/ApiResponse";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";

type SessionType = typeof auth.$Infer.Session

export const getServerSession = cache(

    async (): Promise<ApiResponse<SessionType>> => {


        try {

            const session = await auth.api.getSession({
                headers: await headers(),
            })

            if(!session) {

                return {

                    status: "error",
                    errorMessage: "NO_SESSION_FOUND",
                    data: null,
                }
            }


            return {
                status: "success",
                message: "ACTIVE_SESSION_FOUND",
                data: session,
            }

        } catch {

            return {
                status: "error",
                errorMessage: "INTERNAL_SERVER_ERROR",
                data: null
            }
        }

    }
)