import { useParams } from "react-router-dom"
import { PageTemplate } from "../template/page"
import { ARTICLE_PREVIEW_DATA_TABLE } from "../db"

export const ArticlePage = () => {

    const { slug } = useParams<{ slug: string }>()

    console.log("HERE!!!")

    if (!slug) {
        throw new Error(`Path parameter did no provide a slug.`)
    }

    const findArticlePreview = (articleSlug: string) => {
        const filteredList = ARTICLE_PREVIEW_DATA_TABLE.filter(preview => preview.slug == articleSlug)
        if (filteredList.length == 0) {
            throw new Error(`Article with slug ${articleSlug} is not found.`)
        }
        return filteredList[0]
    }

    const articlePreview = findArticlePreview(slug)

    const TOC = (
        <div>
            <div>
                Table of Contents
            </div>
            <ol>
                <ul>
                    <a className="animated-underline text-sm text-color">
                        The Rush
                    </a>
                </ul>
            </ol>
        </div>
    )

    return (
        <PageTemplate childSection={TOC}>
            <div className="flex justify-center">
                <article className="flex flex-col gap-8 max-w-166   ">
                    <div className="flex flex-col gap-4">
                        <div className="text-sm flex gap-2">
                            <a href="/" className="animated-underline text-color cursor-pointer">
                                Home
                            </a>
                            {">"}
                            <a href="/articles" className="animated-underline text-color">
                                Articles
                            </a>
                        </div>
                        <h1 className="text-4xl">
                            {articlePreview.title}
                        </h1>
                        <div className="text-sm">
                            @mr.anderson - 5 mins to read - March 27, 2026
                        </div>
                    </div>
                    <hr />
                    <Article01Content />
                </article>
            </div>
        </PageTemplate>
    )
}

const Article01Content = () => {
    return (
        <div className="flex flex-col tracking-wide gap-6 text-color">
            <p><strong>Disclaimer:</strong> I like Chinese people. One day I would like to visit China. I understand most cyber crime is sponsored by major powers and I do not take this personally. Hope you too won’t. It's just an interesting story.</p>

            <p>
                It was the summer of 24. A sunny day in South Austria. I was working on my latest assignment—making a feature compliant.
                As with most features, there were other stakeholders; hence we were in discussion with the security architect to decide on the best approach.
            </p>

            <p>
                Where is my lead you might ask—don’t remember, probably called sick for roofing contractors...
            </p>

            <p>
                As I had failed to explain my reasoning, after the meeting I felt the need to draft a visual diagram.
                My go-to tool had been Figma (nowadays I use tldraw—no signup, no bs, it’s nice).
                But logging in wasn’t an option due to privacy concerns and company restrictions.
            </p>

            <p>
                So I went to the Microsoft Store (yes, it exists) and downloaded an alternative.
                I created the diagram, sent it, and called it a day.
            </p>

            <p>
                Later at home, I opened my PC and saw:
            </p>

            <pre><code>
                Z-SCALER: … software has made a request to a URL …
                forwarded to a known command and control IP of a group called …
            </code></pre>

            <p>
                Also known as Phantom Panda, Granite Typhoon (cool names!).
            </p>

            <h2>The Rush</h2>

            <p>Panic set in.</p>

            <p>
                I Googled the group. A Microsoft article popped up—Chinese state-sponsored group targeting telecom infrastructure.
                Coincidentally, I worked in telecom infrastructure. Not good.
            </p>

            <p>I have been conquered!</p>

            <p>
                Cold sweat. I might have just given access to critical systems.
            </p>

            <p>
                I followed IT instructions: deleted the app, ran antivirus (yes, solving Microsoft problems with Microsoft), and waited.
            </p>

            <p>
                The scan froze at 87%. Restarted it, left the PC, got some air.
            </p>

            <p>
                When I returned, it was done. Sent screenshots to IT. Moved on.
            </p>

            <h2>The Following Weeks</h2>

            <p>
                Things got weird. Jira logins failed. CI/CD asked for extra auth. Jump box rejected passwords.
            </p>

            <p>
                I forget passwords sometimes—but everything at once? Suspicious.
            </p>

            <h2>The Second Rush</h2>

            <p>
                While eating blueberries and yogurt, paranoia kicked in.
            </p>

            <p>
                I searched the IP address again—boom.
            </p>

            <p><strong>[MICROSOFT ARTICLE]</strong></p>

            <p>
                Gallium (Phantom Panda / Granite Typhoon). Telecom-focused attacks.
            </p>

            <p>
                And I had access to telecom security infrastructure.
            </p>

            <p>
                Panic again. What if someone was actively using my machine?
            </p>

            <p>I imagined headlines:</p>

            <blockquote>
                “China attacks again! A dumb young engineer gave access to all devices to the CCP.”
            </blockquote>

            <p>
                I emailed my manager:
            </p>

            <pre><code>
                Hi Architect,

                A couple days ago I got a command and control alert on my PC.
                I followed the steps, but now I see weird behavior.

                What should I do?

                Best,
                Emre
            </code></pre>

            <p>
                He replied quickly: “Contact IT.”
            </p>

            <h2>P.S.</h2>

            <p>
                Removing the drama—the system was actually well secured. Even with access, production is encrypted and protected.
                Unless you have the golden key. But that’s for another story.
            </p>

            <h2>References</h2>
            <ul>
                <li><a href="https://www.huntress.com/threat-library/threat-actors/gallium">[1] Huntress - Gallium</a></li>
                <li><a href="https://www.microsoft.com/en-us/security/blog/2019/12/12/gallium-targeting-global-telecom/">[2] Microsoft Security Blog</a></li>
                <li><a href="https://www.huntress.com/threat-library/threat-actors/gallium">[3] Huntress - Gallium</a></li>
                <li><a href="https://www.huntress.com/threat-library/threat-actors/gallium">[4] Huntress - Gallium</a></li>
            </ul>
        </div>
    )
}