import type React from "react";
import type { FC, PropsWithChildren } from "react";

export const Heading1: FC<PropsWithChildren<React.ComponentProps<"h1">>> = ({ children, className, ...props }) => {
    return (
        <h1 className={`text-4xl ${className ? className : ""}`} {...props}>
            {children}
        </h1>
    )
}

export const Text: FC<PropsWithChildren<React.ComponentProps<"p">>> = ({ children, className, ...props }) => {
    return (
        <h1 className={`text-md text-color font-normal ${className ? className : ""}`} {...props}>
            {children}
        </h1>
    )
}

export const ItalicHighlightedText: FC<PropsWithChildren<React.ComponentProps<"span">>> = ({ children, className, ...props }) => {
    return (
        <span className={`text-blue-400 italic ${className ? className : ""}`} {...props}>
            {children}
        </span>
    )
}