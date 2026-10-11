"use server"

import {ApiResponse} from "@/lib/types/ApiResponse";
import {prisma} from "@/lib/prisma";


interface Props {

    email: string,
    business_name: string,
    website_url: string,
    externalLinks: string
}

export const createMetadata = async ({email, business_name, website_url, externalLinks}: Props): Promise<ApiResponse<boolean>> => {

    try {

        await prisma.metadata.create({
            data: {
                email,
                business_name,
                website_url,
                externalLinks
            }
        })

        return {

            status: "success",
            message: "METADATA_ADDED_SUCCESSFULLY!",
            data: true
        }

    } catch {

        return {

            status: "error",
            errorMessage: "INTERNAL_SERVER_ERROR",
            data: false
        }
    }
}