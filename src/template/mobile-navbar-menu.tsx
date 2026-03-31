import { AnimatePresence, motion, useAnimation } from "framer-motion"
import { useState, type FC, useEffect } from "react"
import { APPLICATION_DATA, NAVBAR_LINK_DATA_LIST } from "../data"
import { SocialIconList } from "./social-list"
import { Link } from "react-router-dom"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"

export const MobileNavbar: FC<MobileNavbarProps> = ({ }) => {
    const [isOpen, setIsOpen] = useState(false);

    const sidebarControls = useAnimation();

    /* 
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
    */

    useEffect(() => {
        const preventScroll = (e: Event) => e.preventDefault();

        if (isOpen) {
            document.addEventListener("wheel", preventScroll, { passive: false });
            document.addEventListener("touchmove", preventScroll, { passive: false });
            document.addEventListener("keydown", (e) => {
                if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(e.key)) {
                    e.preventDefault();
                }
            });
        } else {
            document.removeEventListener("wheel", preventScroll);
            document.removeEventListener("touchmove", preventScroll);
        }

        return () => {
            document.removeEventListener("wheel", preventScroll);
            document.removeEventListener("touchmove", preventScroll);
        };
    }, [isOpen])

    const handleClick = async () => {
        if (!isOpen) {
            sidebarControls.set({ x: "-100%" })
            await sidebarControls.start({
                x: "0%",
                transition: { type: "spring", stiffness: 500, damping: 40, duration: 0.1 }
            })
            setIsOpen(true)
        } else {
            await sidebarControls.start({
                x: "-100%",
                transition: { type: "spring", stiffness: 500, damping: 40, duration: 0.1 },
            })
            setIsOpen(false)
        }
    }

    const renderNavbarLinkDataList = () => {
        const renderedList = NAVBAR_LINK_DATA_LIST.map((item, index) => (
            <li key={`navbar-link-item-key-${index}`}>
                <Link
                    to={item.path}
                    key={`navbar-link-item-key-${index}`}
                    className="animated-underline"
                    onClick={() => {
                        if (isOpen) {
                            handleClick()
                        }
                    }}
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
        <>
            <div className="md:hidden w-full border-b border-(--border-color) p-6 fixed top-0 bg-dark z-20 h-[8%] flex items-center justify-between">
                <div className="text-md title-font font-bold">
                    {APPLICATION_DATA.navbar_title}
                </div>
                <span
                    className="md:hidden flex cursor-pointer transform transition-transform duration-75"
                    onClick={handleClick}
                >
                    <FaChevronRight />
                </span>
            </div>
            <AnimatePresence>
                <motion.div
                    className="fixed flex flex-col justify-between gap-6 bg-dark min-h-full bottom-0 left-0 z-20 p-6 w-full"
                    initial={{ x: "-100%" }}
                    animate={sidebarControls}
                    exit={{ x: "-100%" }}
                >
                    <div className="flex flex-col gap-6 ">
                        <div className="flex flex-col gap-4 justify-between h-full pt-2">
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-col w-full">
                                    <div className="flex justify-between">
                                        <div className="flex flex-col gap-2">
                                            <Link to="/" className="text-xl title-font font-bold cursor-pointer">
                                                {APPLICATION_DATA.navbar_title}
                                            </Link>
                                            <span className="text-xs font-bold">
                                                by @{APPLICATION_DATA.navbar_author}
                                            </span>
                                        </div>
                                        <span
                                            onClick={handleClick}
                                            className="cursor-pointer"
                                        >
                                            <FaChevronLeft />
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
                        </div>
                    </div>
                    <div className="text-xs pb-6">
                        @Powered by React.js and AWS
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    );
};