import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import {prisma} from "@/lib/prisma";
import {resend} from "@/lib/resend";
import activation from "@/components/email-templates/Activation";
import {emailOTP} from "better-auth/plugins";
import OTPVerificationTemplate from "@/components/email-templates/OTPVerificationTemplate";

export const auth = betterAuth({

    //database setup
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "sqlite", ...etc
    }),

    //use can use email and password
    emailAndPassword: {
        enabled: true,
    },

    //to verify user email.
    emailVerification: {
      sendVerificationEmail: async ({user, url}) => {
          const {data, error} = await resend.emails.send({

              from: 'Acme <onboarding@resend.dev>',
              to: user.email,
              subject: "Verify your email address",
              react: activation({companyName: "SupportAI", url: url})

          });

          if(error) {
              console.log(error);
              throw new Error("Failed to send verification email");
          }

          console.log("verification awaiting.....")
      },
      sendOnSignUp: true,
    },

    //oauth config
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        },

        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }
    },

    //plugins

    plugins: [

        emailOTP({
            async sendVerificationOTP({email, otp, type}) {

                if(type === "sign-in" || type === "email-verification") {

                     await resend.emails.send({
                        from: 'Acme <onboarding@resend.dev>',
                        to: email,
                        subject: "OTP to verify your email.",
                        react: OTPVerificationTemplate({companyName: "SupportAI", otp: otp})
                    })

                } else {


                    await resend.emails.send({
                        from: 'Acme <onboarding@resend.dev>',
                        to: email,
                        subject: "OTP to reset your password.",
                        react: OTPVerificationTemplate({companyName: "SupportAI", otp: otp})
                    })


                }

}
        })
    ]

});
