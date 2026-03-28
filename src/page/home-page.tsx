import type { FC } from "react"
import { ARTICLE_PREVIEW_DATA_TABLE } from "../db"
import { Link } from "react-router-dom"
import { PageTemplate } from "../template/page"
import { ItalicHighlightedText } from "../comp/text-comp"

export const ArticleCard: FC<{ articlePreview: ArticlePreview }> = ({ articlePreview }) => {
    return (
        <Link to={`articles/${articlePreview.slug}`} className="overflow-hidden">
            <img
                src={articlePreview.coverImage}
                alt={articlePreview.title}
                className="w-full h-48 object-cover rounded-lg"
            />
            <div>
                <h2 className="text-xl font-semibold">
                    {articlePreview.title}
                </h2>
                <p className="text-md text-gray-600">
                    {articlePreview.excerpt}
                </p>
            </div>
            <div className="flex items-center space-x-2">
                {["Blog", "Article"].map((item, index) => (
                    <span
                        key={`accres-blog-card-tag-key-${index}`}
                        className="text-blue-400"
                    >
                        {item}
                        {index === 0 ? "." : ""}
                    </span>
                ))}
            </div>
        </Link>
    )
}

export const BlogList = () => {
    return (
        <div className="grid grid-cols-3 w-full gap-6">
            {ARTICLE_PREVIEW_DATA_TABLE.map((item, index) => (
                <div className="span-1">
                    <ArticleCard key={`accres-blog-card-key-${index}`} articlePreview={item} />
                </div>
            ))}
        </div>
    )
}

export const HomePage = () => {
    return (
        <PageTemplate>
            <div className="text-3xl tracking-wider line-clamp-6 max-w-180">
                I'm Emre. I build and write about <ItalicHighlightedText>Software</ItalicHighlightedText> and <ItalicHighlightedText>Stuff.</ItalicHighlightedText> Because
                working on with a computer can create <ItalicHighlightedText> Stories.</ItalicHighlightedText>
            </div>
            <BlogList />
        </PageTemplate>
    )
}