import { Link } from "react-router-dom"
import { PageTemplate } from "../template/page"

export const NotFoundPage = () => {
    return (
        <PageTemplate>
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-6xl font-black">
                    404 Not Found
                </h1>
                <div className="text-md text-color">
                    Looks like this page does not exists!
                </div>
                <div>
                    <Link to="/" className="border border-blue-500 px-8 py-2 rounded-md shadow-2xl hover:bg-blue-500 hover:text-white">
                        Home
                    </Link>
                    <Link to="/" className="border border-blue-500 px-8 py-2 rounded-md shadow-2xl hover:bg-blue-500 hover:text-white">
                        Try Again
                    </Link>
                </div>
            </div>
        </PageTemplate>
    )
}
