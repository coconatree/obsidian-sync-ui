import { Link } from "react-router-dom"
import { PageTemplate } from "../template/page"

export const NotFoundPage = () => {
    return (
        <PageTemplate>
            <div className="flex flex-col items-center gap-10">
                <h1 className="text-3xl font-black text-center flex flex-col">
                    <span className="text-9xl">404</span> <br/> Not Found 
                </h1>
                <div className="text-md text-color">
                    Looks like this page does not exists!
                </div>
                <div className="flex gap-4">
                    <Link to="/" className="border border-blue-500 px-8 py-2 rounded-md shadow-2xl hover:bg-blue-500 hover:text-white">
                        Home
                    </Link>
                    <Link to="/articles" className="border border-blue-500 px-8 py-2 rounded-md shadow-2xl hover:bg-blue-500 hover:text-white">
                        Articles
                    </Link>
                </div>
            </div>
        </PageTemplate>
    )
}
