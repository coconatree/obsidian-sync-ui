import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./page/home-page"
import { ArticlePage } from "./page/article-page"
import { NotFoundPage } from "./page/not-found-page"
import { AboutMePage } from "./page/about-me-page"
import { ArticleListPage } from "./page/article-list-page"
import { ScrollToTop } from "./comp/scroll-to-top"
import { ApplicationErrorBoundary } from "./comp/application-error-boundary"

function App() {

    return (
        <BrowserRouter>
            <ApplicationErrorBoundary>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about-me" element={<AboutMePage />} />
                    <Route path="/articles" element={<ArticleListPage />} />
                    <Route path="/articles/:slug" element={<ArticlePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </ApplicationErrorBoundary>
        </BrowserRouter>
    )
}

export default App
