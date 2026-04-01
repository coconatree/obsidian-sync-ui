import React, { type PropsWithChildren } from "react"

import { Sidebar } from "./sidebar"
import { MobileNavbar } from "./mobile-navbar-menu";

export const PageTemplate: React.FunctionComponent<PropsWithChildren<PageTemplateProps>> = ({ children, childSection }) => {

    return (
        <div className="flex w-full min-h-screen">
            <Sidebar childSection={childSection} />
            <div className="flex flex-col gap-12 w-full justify-center min-h-full items-center">
                <MobileNavbar childSection={childSection} />
                <div className="flex justify-center items-start mt-[8vh] lg:mt-0 h-full min-w-full">
                    <div className="px-5 lg:px-12 py-8 lg:py-14 gap-12 max-w-286 h-full">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

