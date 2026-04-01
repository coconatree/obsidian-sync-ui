import type { FC } from "react"
import { ARTICLE_PREVIEW_DATA_TABLE } from "../db"
import { PageTemplate } from "../template/page"
import { Link } from "react-router-dom"

export const ArticleListPage = () => {

    const renderArticleList = () => {
        return ARTICLE_PREVIEW_DATA_TABLE.map((item, index) => {
            return (
                <div key={`article-extended-preview-card-key-${index}`} className="flex flex-col gap-6">
                    <ArticleExtendedPreviewCard article={item} />
                    {index !== ARTICLE_PREVIEW_DATA_TABLE.length - 1 || ARTICLE_PREVIEW_DATA_TABLE.length !== 0 ? <hr/> : <></>}
                </div>
            )
        })
    }

    return (
        <PageTemplate>
            <div className="flex flex-col gap-10 max-w-166">
                {renderArticleList()}
            </div>
        </PageTemplate>
    )
}

const ArticleExtendedPreviewCard: FC<{ article: ArticlePreview }> = ({ article }) => {
    return (
        <Link to={`${article.slug}`} className="flex flex-col gap-4">
            <div className="text-2xl font-semibold title-font">
                {article.title}
            </div>
            <p>
                {article.excerpt}
            </p>
            <div className="text-xs">
                @mr.anderson - 5 mins to read - March 27, 2026
            </div>
        </Link>
    )
}
