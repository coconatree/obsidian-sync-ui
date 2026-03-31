import React, { type PropsWithChildren } from "react"

import { Sidebar } from "./sidebar"
import { MobileNavbar } from "./mobile-navbar-menu";

export const PageTemplate: React.FunctionComponent<PropsWithChildren<PageTemplateProps>> = ({ children, childSection }) => {

    return (
        <div className="flex w-full min-h-screen">
            <Sidebar childSection={childSection} />
            <div className="flex flex-col gap-12 w-full justify-center min-h-full items-center">
                <MobileNavbar childSection={childSection}/>
                <div className="flex justify-center items-start mt-[16vh] min-w-full min-h-full md:mt-0">
                    <div className="p-4 md:px-12 md:py-20 gap-12 max-w-286">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

