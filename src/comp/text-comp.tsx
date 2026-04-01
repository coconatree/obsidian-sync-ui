import type React from "react";
import type { FC, PropsWithChildren } from "react";

export const Heading1: FC<PropsWithChildren<React.ComponentProps<"h1">>> = ({ children, className, ...props }) => {
    return (
        <h1 className={`text-3xl md:text-4xl ${className ? className : ""}`} {...props}>
            {children}
        </h1>
    )
}

export const Heading2: FC<PropsWithChildren<React.ComponentProps<"h1">>> = ({ children, className, ...props }) => {
    return (
        <h2 className={`text-2xl md:text-2xl ${className ? className : ""}`} {...props}>
            {children}
        </h2>
    )
}

export const Heading3: FC<PropsWithChildren<React.ComponentProps<"h1">>> = ({ children, className, ...props }) => {
    return (
        <h3 className={`text-xl md:text-xl ${className ? className : ""}`} {...props}>
            {children}
        </h3>
    )
}

export const Text: FC<PropsWithChildren<React.ComponentProps<"p">>> = ({ children, className, ...props }) => {
    return (
        <p
            className={`text-md text-color font-normal tracking-wider leading-8 ${className ? className : ""}`}
            {...props}
        >
            {children}
        </p>
    )
}

export const ItalicHighlightedBoldText: FC<PropsWithChildren<React.ComponentProps<"span">>> = ({ children, className, ...props }) => {
    return (
        <span className={`text-blue-400 font-bold italic ${className ? className : ""}`} {...props}>
            {children}
        </span>
    )
}

export const ExternalLink: FC<React.ComponentProps<"a">> = ({ children, href, className, target, ...props }) => {
    return (
        <a
            className={`underline decoration-dotted decoration-blue-300 text-blue-300 underline-offset-4 ${className ? className : ""}`}
            href={href}
            target={target ? target : "_blank"}
            rel="noopener noreferrer"
            {...props}
        >
            {children}
        </a>
    )
}
