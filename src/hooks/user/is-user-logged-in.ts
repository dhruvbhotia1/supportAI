
import {ApiResponse } from "@/lib/types/ApiResponse";
import {headers} from "next/headers";
import {auth} from "@/lib/auth";
import {cache} from "react";

export const isUserLoggedIn = cache(

    async () : Promise<ApiResponse> => {

        try {

            const session = await auth.api.getSession({
                headers: await headers(),
            })

            if(!session) {

                return {
                    status: "error",
                    message: "NOT_AUTHENTICATED"
                }
            }

            return {
                status: "success",
                message: "AUTHENTICATED"
            }

        } catch (error) {

            return {
                status: "error",
                message: "INTERNAL_SERVER_ERROR"
            }
        }


    }
)