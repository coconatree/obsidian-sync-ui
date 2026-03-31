import type { PropsWithChildren } from "react"
import { APPLICATION_DATA, NAVBAR_LINK_DATA_LIST } from "../data"
import { Link } from "react-router-dom"
import { SocialIconList } from "./social-list"

export const Sidebar: React.FunctionComponent<PropsWithChildren<SidebarProps>> = ({ childSection }) => {

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
                    className="animated-underline"
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
        <div className="hidden md:flex md:flex-row md:items-center md:sticky md:top-0 md:min-h-full md:h-screen md:w-[17%] ">
            <div className="h-full px-8 py-10 justify-between gap-10 ">
                <div className="flex flex-col gap-4 justify-between h-full pb-10">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col w-full">
                            <div className="flex flex-col gap-2">
                                <Link to="/" className="text-xl title-font font-bold cursor-pointer">
                                    {APPLICATION_DATA.navbar_title}
                                </Link>
                                <span className="text-xs font-bold">
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