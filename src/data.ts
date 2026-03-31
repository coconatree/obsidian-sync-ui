import { FaGithub, FaLinkedin  } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

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
    }
]

export const APPLICATION_DATA = {
    contact_email: "emre.caniklioglu.00@gmail.com",
    navbar_header: "What's this?",
    navbar_description: "This, is my corner of the internet where I share what I write, build and learn.",
    navbar_title: "ShardedSync.com",
    navbar_author: "mr.anderson"
}

export const SOCIAL_ICON_LIST_DATA: IconListItem[] = [
    {
        id: 1,
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
    }
]

/*
{
    id: 2,
    href: "/rss.xml",
    icon: FaRss
},
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