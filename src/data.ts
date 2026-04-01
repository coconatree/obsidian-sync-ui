import { FaTelegramPlane } from "react-icons/fa"
import { FaGithub, FaLinkedin, FaRss  } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

export const APPLICATION_DATA = {
    contact_email: "emre.caniklioglu.00@gmail.com",
    telegram_username: "real_mr_anderson",
    navbar_header: "What's this?",
    navbar_description: "This, is my corner of the internet.",
    navbar_title: "ShardedSync.com",
    navbar_author: "mr.anderson"
}

export const NAVBAR_LINK_DATA_LIST = [
    {
        id: 1,
        name: "about me",
        path: "/about-me"
    },
    {
        id: 2,
        name: "articles & my work",
        path: "/articles"
    },
    {
        id: 3,
        name: "report a bug/typo",
        path: `https://t.me/${APPLICATION_DATA.telegram_username}?text=I found a bug:`,
        target: "_blank"
    }
]

export const SOCIAL_ICON_LIST_DATA: IconListItem[] = [
    {
        id: 1,
        href: "/rss.xml",
        icon: FaRss
    },
    {
        id: 2,
        href: "https://www.linkedin.com/in/emre-c-709433170/",
        icon: FaLinkedin,
    },
    {
        id: 3,
        href: "https://github.com/coconatree",
        icon: FaGithub
    },
    {
        id: 4,
        href: `mailto:${APPLICATION_DATA.contact_email}`,
        icon: MdEmail,
    },
    {
        id: 5,
        href: `https://t.me/${APPLICATION_DATA.telegram_username}`,
        icon: FaTelegramPlane
    }
]

/*
{
    id: 5,
    href: "https://x.com/realemrebey",
    icon: FaXTwitter
},
{
    id: 6,
    href: "https://medium.com/@emre.caniklioglu.00",
    icon: FaMediumM
}
*/