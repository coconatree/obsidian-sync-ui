
type AppStore = {
    isSidebarOpen: boolean,
    setIsSidebarOpen: (v: boolean) => void
}

type ArticlePreview = {
    id: number,
    coverImage: string,
    title: string,
    excerpt: string,
    slug: string
}

type IconListItem = {
    id: number,
    href: string,
    icon: any,
}

type PageTemplateProps = {
    childSection?: React.ReactElement
}

type MobileNavbarProps = {
    childSection?: React.ReactElement
}

type SidebarProps = {
    childSection?: React.ReactElement
}