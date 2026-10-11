"use server"

import {getServerSession} from "@/lib/user/getServerSession";
import {ApiResponse} from "@/lib/types/ApiResponse";
import {Redis} from "@upstash/redis"
import {resendVerifyLink, resendVerifyOtp} from "@/lib/user/resend-verify-email";

interface Props {

    email: string;
    verify_type: "link" | "code"
    request_type: "email-verification" | "sign-in" | "forget-password"
}

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function approveResend({email, verify_type, request_type}: Props): Promise<ApiResponse<boolean>> {

    const data = await getServerSession();

    if(!data || data.data?.user.email !== email) {

        return {
            status: "error",
            errorMessage: "EMAIL_MISMATCH_ERROR",
            data: false,
        }
    }

    const cacheKey = `email_cooldown:${email}`;

    const lockAcquired = await redis.set(cacheKey, "locked", {ex:120, nx:true});

    if(!lockAcquired) {

        return {

            status: "error",
            errorMessage: "TOO_MANY_ATTEMPTS",
            data: false,

        }
    }


    if(verify_type === "link") {

        const data = await resendVerifyLink({email});

        if(data.status === "error") {

            await redis.del(cacheKey);

            return {

                status: "error",
                errorMessage: "LINK_NOT_SENT",
                data: false
            }
        }

        return {

            status: "success",
            message: data.message,
            data: data.data
        }

    } else {

        const data = await resendVerifyOtp({email, type:request_type})

        if(data.status === "error") {

            await redis.del(cacheKey);

            return {

                status: "error",
                errorMessage: data.errorMessage,
                data: false
            }
        }

        return {
            status: "success",
            message: data.message,
            data: data.data
        }
    }

}