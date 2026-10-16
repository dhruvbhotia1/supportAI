import React from "react";

interface Props {

    children: React.ReactNode
}

export default function DashboardLayout({children}: Props) {

    return (

        <div className={"min-h-screen font-sans antialiased text-zinc-100 selection:bg-zinc-800 flex"}>

            {children}

        </div>
    )


}