import React, { useEffect, useRef, useState, type PropsWithChildren } from "react"
import { motion } from "framer-motion"

import { Link } from "react-router-dom"

import { FaLinkedin, FaGithub, FaRss, FaChevronLeft } from "react-icons/fa"

import { MdEmail } from "react-icons/md"

import { LightLogo } from "../logo/light-logo"
import { NewsletterModal } from "../comp/newsletter-modal";

const NAVBAR_LINK_DATA_LIST = [
    {
        id: 1,
        name: "about me",
        path: "/about-me"
    },
    {
        id: 2,
        name: "articles & my work",
        path: "/articles"
    }
]

export const PageTemplate: React.FunctionComponent<PropsWithChildren<{ childSection?: React.ReactElement }>> = ({ children, childSection }) => {

    const [isOpen, setIsOpen] = useState(false);

    const renderChildSection = () => {
        if (!isOpen || !childSection) {
            return
        }
        return (
            <div className="sticky top-10">
                {childSection}
            </div>
        )
    }

    const handleSidebarOnOffClick = (_: React.MouseEvent<HTMLSpanElement>) => {
        console.log("CLICKED")
        setIsOpen(!isOpen)
    }

    const renderNavbarLinkDataList = () => {
        return NAVBAR_LINK_DATA_LIST.map((item, index) => (
            <Link
                to={item.path}
                key={`navbar-link-item-key-${index}`}
                className="animated-underline"
            >
                {item.name}
            </Link>
        ))
    }

    const navbarTextTransition = { duration: 0.3, delay: isOpen ? 0.35 : 0 }

    return (
        <div className="flex w-full">
            <div className="sticky top-0 relative min-h-full flex flex-col gap-10 border-r">
                <motion.div
                    initial={false}
                    animate={{ width: isOpen ? 250 : 60, alignItems: "items-center" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className={`text-white h-screen overflow-hidden flex flex-col ${isOpen ? "p-5" : "py-5 px-2 items-center"}`}
                >
                    <div className="flex gap-2">
                        <motion.div
                            transition={navbarTextTransition}
                        >
                            <Link to="/" className="text-2xl cursor-pointer">
                                🦖
                            </Link>
                        </motion.div>
                        {isOpen && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={navbarTextTransition}
                                className="text-lg font-bold text-shadow-lg"
                            >
                                Raptor Engineer
                            </motion.span>
                        )}
                    </div>
                    {isOpen && (
                        <motion.div
                            className="flex flex-col gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={navbarTextTransition}
                        >
                            <span className="text-xs">
                                by mr anderson
                            </span>
                            <div className="flex gap-3">
                                <SocialIconList />
                            </div>
                            {renderNavbarLinkDataList()}
                            {renderChildSection()}
                            <div className="text-xs">
                                Powered by React.js
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
            <div className="w-full">
                <div className="flex flex-col gap-12">
                    <div className="w-full flex border-b p-6 sticky top-0">
                        <motion.div
                            initial={false}
                            className="sticky top-2"
                            animate={{ rotate: !isOpen ? 180 : 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        ><span
                            className="cursor-pointer transform transition-transform duration-75"
                            onClick={handleSidebarOnOffClick}
                        >
                                <FaChevronLeft />
                            </span>
                        </motion.div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col px-12 py-6 gap-12 max-w-286">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const AccresSidebar = () => {

    const [isNewsletteModalOpen, setIsNewsletteModalOpen] = useState(false)

    const modalRef = useRef<HTMLDivElement>(null)

    const handleOpenNewsletterModal = (_: React.MouseEvent<HTMLSpanElement>) => {
        if (!isNewsletteModalOpen) {
            setIsNewsletteModalOpen(true)
        }
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsNewsletteModalOpen(false)
            }
        }
        isNewsletteModalOpen
            ? document.addEventListener("mousedown", handleClickOutside)
            : document.removeEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isNewsletteModalOpen])

    return (
        <>
            <div className="flex flex-col justify-between h-full">
                <div className="p-6">
                    <LightLogo width={52} />
                </div>
                <div className="flex flex-col p-6">
                    <Link to="/">
                        Home
                    </Link>
                    <span onClick={handleOpenNewsletterModal}>
                        Subscribe
                    </span>
                </div>
                <div className="flex gap-8 justify-center items-center p-6  border-t border-white/50">
                    <SocialIconList />
                </div>
            </div>
            <NewsletterModal isOpen={isNewsletteModalOpen} setIsOpen={setIsNewsletteModalOpen} reference={modalRef} />
        </>
    )
}



const SOCIAL_ICON_LIST_DATA: IconListItem[] = [
    {
        id: 1,
        href: "https://linkedin.com/yourusername",
        icon: FaLinkedin,
    },
    {
        id: 2,
        href: "mailto:youremail@example.com",
        icon: MdEmail,
    },
    {
        id: 3,
        href: "/rss.xml",
        icon: FaRss
    },
    {
        id: 4,
        href: "https://github.com/yourusername",
        icon: FaGithub
    }
]

const SocialIconList = () => {

    const iconProps = {
        size: 21,
        className: "hover:text-blue-400 transition-colors",
    }

    const renderIcon = (item: IconListItem, index: number) => {

        const IconComponent = item.icon

        return (
            <a key={`accres-social-icon-list-item-key-${index}`} href={item.href} target="_blank" rel="noopener noreferrer">
                <IconComponent {...iconProps} />
            </a>
        )
    }

    return (
        <>
            {SOCIAL_ICON_LIST_DATA.map(renderIcon)}
        </>
    )
}
