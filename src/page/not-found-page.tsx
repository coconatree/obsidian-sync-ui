import { Link } from "react-router-dom"
import { PageTemplate } from "../template/page"

export const NotFoundPage = () => {
    return (
        <PageTemplate>
            <div className="h-full flex items-center">
                <div className="flex flex-col items-center gap-6 lg:gap-10">
                    <h1 className="text-xl lg:text-3xl font-black text-center flex flex-col">
                        <span className="text-7xl lg:text-9xl">404</span> <br /> Not Found
                    </h1>
                    <div className="text-md text-color">
                        This page does not exists!
                    </div>
                    <div className="flex gap-4">
                        <Link to="/" className="border border-blue-500 px-8 py-2 rounded-md shadow-2xl hover:bg-blue-500 hover:text-white" rel="noopener noreferrer">
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </PageTemplate>
    )
}
