import {cache} from "react";
import {ApiResponse} from "@/lib/types/ApiResponse";
import {getServerSession} from "@/lib/user/getServerSession";

export const isUserVerified = cache(

    async (): Promise<ApiResponse <boolean>> => {

        try {

            const session = await getServerSession();

            //we did not get a response from the api

            if(!session) {

                return {
                    status: "error",
                    errorMessage: "NO_SERVER_RESPONSE",
                    data: null
                }
            }

            //we did not find any session -- user is not logged in

            if(session.status === "error") {

                return {

                    status: "error",
                    errorMessage: session.errorMessage,
                    data: session.data ? null : null,
                }
            }

            if(session.data?.user.emailVerified) {

                return {

                    status: "success",
                    message: "USER_VERIFIED",
                    data: true
                }
            }

            return {
                status: "error",
                errorMessage: "USER_NOT_VERFIED",
                data: false,
            }

        } catch {

            return {

                status: "error",
                errorMessage: "INTERNAL_SERVER_ERROR",
                data: false
            }

        }

    }

)