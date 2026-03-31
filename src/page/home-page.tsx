import type { FC } from "react"
import { ARTICLE_PREVIEW_DATA_TABLE } from "../db"
import { Link } from "react-router-dom"
import { PageTemplate } from "../template/page"
import { Heading1, ItalicHighlightedBoldText, Text } from "../comp/text-comp"

export const ArticleCard: FC<{ articlePreview: ArticlePreview }> = ({ articlePreview }) => {
    return (
        <Link to={`articles/${articlePreview.slug}`} className="flex flex-col gap-4">
            <img
                src={articlePreview.coverImage}
                alt={articlePreview.title}
                className="w-full h-50 object-cover rounded-lg"
            />
            <div className="flex flex-col gap-2">
                <div>
                    <h2 className="text-xl font-semibold">
                        {articlePreview.title}
                    </h2>
                </div>
                <div className="flex items-center space-x-2">
                    {["Story", "Article"].map((item, index) => (
                        <>
                        <span
                            key={`accres-blog-card-tag-key-${index}`}
                            className="text-md text-blue-400"
                        >
                            {item}
                        </span>
                        {index === 0 ? <span className="text-md text-blue-400 h-full">-</span> : <></>}
                        </>
                    ))}
                </div>
            </div>
        </Link>
    )
}

export const ArticleList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 mt-10">
            {ARTICLE_PREVIEW_DATA_TABLE.map((item, index) => (
                <div key={`accres-blog-card-key-${index}`} className="col-span-1">
                    <ArticleCard articlePreview={item} />
                </div>
            ))}
        </div>
    )
}

export const HomePage = () => {
    return (
        <PageTemplate>
            <div className="flex flex-col gap-6">
                <Heading1>
                    Welcome to my website!
                </Heading1>
                <Text>
                    Hey, I'm Emre. I build and write about my <ItalicHighlightedBoldText>Stories, Projects.</ItalicHighlightedBoldText> and <ItalicHighlightedBoldText>Stuff.</ItalicHighlightedBoldText> Cause I like it!
                </Text>
            </div>
            <ArticleList />
        </PageTemplate>
    )
}