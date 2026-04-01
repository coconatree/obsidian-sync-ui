import React, { useEffect, useRef, type FC, type PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ApplicationErrorBoundary: FC<PropsWithChildren> = ({ children }) => {
    const location = useLocation();
    const ref = useRef<ApplicationErrorBoundaryClass>(null);

    useEffect(() => {
        ref.current?.resetError();
    }, [location.pathname]);

    return <ApplicationErrorBoundaryClass ref={ref}>{children}</ApplicationErrorBoundaryClass>;
}

type ApplicationErrorBoundaryClassProps = { children: React.ReactNode }
type ApplicationErrorBoundaryClassState = { hasError: boolean }

class ApplicationErrorBoundaryClass extends React.Component<ApplicationErrorBoundaryClassProps, ApplicationErrorBoundaryClassState> {

    constructor(props: ApplicationErrorBoundaryClassProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        if (import.meta.env.MODE === "development") {
            console.log(`Error: ${error.message} - Info: ${info.componentStack}`)
        }
    }

    public resetError() {
        this.setState({ hasError: false });
    }

    render() {
        if (this.state.hasError) {
            return <Navigate to="/404" replace />;
        }

        return this.props.children;
    }
}