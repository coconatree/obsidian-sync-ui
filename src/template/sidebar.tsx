import type { PropsWithChildren } from "react"
import { APPLICATION_DATA, NAVBAR_LINK_DATA_LIST } from "../data"
import { Link, useLocation } from "react-router-dom"
import { SocialIconList } from "./social-list"

export const Sidebar: React.FunctionComponent<PropsWithChildren<SidebarProps>> = ({ childSection }) => {

    const {pathname} = useLocation()

    const renderChildSection = () => {
        if (!childSection) {
            return
        }
        return (
            <div className="sticky top-10">
                {childSection}
            </div>
        )
    }

    const renderNavbarLinkDataList = () => {

        const renderedList = NAVBAR_LINK_DATA_LIST.map((item, index) => (
            <li key={`navbar-link-item-key-${index}`}>
                <Link
                    to={item.path}
                    target={item.target || undefined}
                    rel="noopener noreferrer"
                    className={pathname === item.path ? "text-blue-300 underline underline-offset-4" : "animated-underline"}
                >
                    {item.name}
                </Link>
            </li>
        ))

        return (
            <ul className="flex flex-col gap-2">
                {renderedList}
            </ul>
        )
    }

    return (
        <div className="hidden lg:flex lg:flex-row lg:items-center lg:sticky lg:top-0 lg:min-h-full lg:h-screen lg:w-[17%] lg:bg-dark lg:z-20">
            <div className="h-full px-8 py-10 justify-between gap-10 ">
                <div className="flex flex-col gap-4 justify-between h-full pb-10">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col w-full">
                            <div className="flex flex-col gap-2">
                                <Link to="/" className="text-xl title-font font-bold cursor-pointer">
                                    {APPLICATION_DATA.navbar_title}
                                </Link>
                                <span className="text-xs">
                                    by @{APPLICATION_DATA.navbar_author}
                                </span>
                            </div>
                            <hr className="mt-6 border-(--border-color)" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="text-md title-font font-semibold">
                                {APPLICATION_DATA.navbar_header}
                            </div>
                            <p className="text-sm">
                                {APPLICATION_DATA.navbar_description}
                            </p>
                            <div className="mt-2">
                                <SocialIconList />
                            </div>
                        </div>
                        {renderNavbarLinkDataList()}
                    </div>
                    <div className="h-full mt-4">
                        {renderChildSection()}
                    </div>
                </div>
            </div>
            <hr className="h-[95vh] border-l border-(--border-color)" />
        </div>
    )
}