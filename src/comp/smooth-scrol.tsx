import type { FC } from "react";
import { Link, type LinkProps } from "react-router-dom";

interface SmoothScrollLinkProps extends Omit<LinkProps, "to"> {
    to: string
}

export const SmoothScrollLink: FC<SmoothScrollLinkProps> = ({ to, children, className, ...props }) => {

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        const id = to.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -25
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({ top: y, behavior: "smooth" })
        }
    }

    return (
        <Link to={to} onClick={handleClick} className={className} {...props}>
            {children}
        </Link>
    )
}