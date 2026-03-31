import type { FC } from "react"
import { ARTICLE_PREVIEW_DATA_TABLE } from "../db"
import { PageTemplate } from "../template/page"
import { Link } from "react-router-dom"

export const ArticleListPage = () => {

    const renderArticleList = () => {
        return ARTICLE_PREVIEW_DATA_TABLE.map((item, index) => {
            return (
                <>
                    <ArticleExtendedPrevidwCard key={`article-extended-preview-card-key-${index}`} article={item} />
                    {index !== ARTICLE_PREVIEW_DATA_TABLE.length - 1 ? <hr/> : <></>}
                </>
            )
        })
    }

    return (
        <PageTemplate>
            <div className="flex flex-col gap-10">
                {renderArticleList()}
            </div>
        </PageTemplate>
    )
}

const ArticleExtendedPrevidwCard: FC<{ article: ArticlePreview }> = ({ article }) => {
    return (
        <Link to={`${article.slug}`} className="flex flex-col gap-4">
            <h1 className="text-3xl">
                {article.title}
            </h1>
            <p>
                {article.excerpt}
            </p>
            <div className="text-sm">
                @mr.anderson - 5 mins to read - March 27, 2026
            </div>
        </Link>
    )
}
