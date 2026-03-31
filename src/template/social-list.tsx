import { SOCIAL_ICON_LIST_DATA } from "../data"

export const SocialIconList = () => {

    const iconProps = {
        size: 17,
        className: "color-[var(--open-white)] hover:text-blue-400 transition-colors",
    }

    const renderIcon = (item: IconListItem, index: number) => {

        const IconComponent = item.icon

        return (
            <a key={`accres-social-icon-list-item-key-${index}`} href={item.href} target="_blank" rel="noopener noreferrer">
                <IconComponent {...iconProps}/>
            </a>
        )
    }

    return (
        <div className="flex gap-3">
            {SOCIAL_ICON_LIST_DATA.map(renderIcon)}
        </div>
    )
}