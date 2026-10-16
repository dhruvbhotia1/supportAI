"use server"

import {ApiResponse} from "@/lib/types/ApiResponse";
import {Metadata} from "../../../generated/prisma/browser";
import {prisma} from "@/lib/prisma";

interface Props {

    user_email: string;
}

export const getMetaData = async ({user_email}: Props): Promise<ApiResponse<Metadata>> => {

    try {

        const data = await prisma.metadata.findFirst({
            where: {
                email: user_email
            }
        });

        if (!data) {

            return {
                status: "error",
                errorMessage: "NO_API_RESPONSE",
                data: null
            }
        }


        return {
            status: "success",
            message: "FETCH_SUCCESS",
            data: data
        }


    } catch (error) {

        console.log(error);

        return {

            status: "error",
            errorMessage: "INTERNAL_SERVER_ERROR",
            data: null
        }

    }


}