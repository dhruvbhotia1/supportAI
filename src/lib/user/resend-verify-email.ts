import {ApiResponse} from "@/lib/types/ApiResponse";
import {auth} from "@/lib/auth";

interface VerifyLinkProps {

    email: string,
}

interface VerifyOTPProps {
    email: string
    type: "email-verification" | "sign-in" | "forget-password"
}
export const resendVerifyLink = async ({email}: VerifyLinkProps): Promise<ApiResponse<boolean>> => {

    try {

        const data = await auth.api.sendVerificationEmail({
            body: {
                email
            }
        });

        if(!data.status) {
            return {
                status: "error",
                errorMessage: "BACKEND_API_ERROR",
                data: false
            }
        }

        return {

            status: "success",
            message: "VERIFY_LINK_SENT",
            data: data.status
        }

    } catch (error) {

        console.log(error)

        return {

            status: "error",
            errorMessage: "INTERNAL_SERVER_ERROR",
            data: false
        }

    }

}


export const resendVerifyOtp = async ({email, type}: VerifyOTPProps): Promise<ApiResponse<boolean>> => {

    try {

        const data = await auth.api.sendVerificationOTP({
            body: {
                email,
                type
            }
        })

        if(!data.success) {

            return {
                status: "error",
                errorMessage: "BACKEND_API_ERROR",
                data: false
            }
        }

        return {

            status: "success",
            message: "VERIFY_OTP_SENT",
            data: data.success
        }


    } catch (error) {

        console.log(error)

        return {

            status: "error",
            errorMessage: "INTERNAL_SERVER_ERROR",
            data: false
        }


    }

}