import { Link, useParams } from "react-router-dom"
import { PageTemplate } from "../template/page"
import { ARTICLE_PREVIEW_DATA_TABLE } from "../db"
import { ExternalLink, Heading1, Heading2, Text } from "../comp/text-comp"
import { SmoothScrollLink } from "../comp/smooth-scrol"

export const ArticlePage = () => {

    const { slug } = useParams<{ slug: string }>()


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

    const TOC_ITEM_CLASSNAME = "animated-underline text-sm text-color font-light cursor-pointer";

    const TOC = (
        <div className="flex flex-col gap-4">
            <div className="title-font font-medium">
                Table of Contents
            </div>
            <ul className="flex flex-col gap-1">
                <ul>
                    <SmoothScrollLink className={TOC_ITEM_CLASSNAME} to={"#infiltration-day"}>
                        Infiltration Day
                    </SmoothScrollLink>
                </ul>
                <ul>
                    <SmoothScrollLink className={TOC_ITEM_CLASSNAME} to={"#beginnig-of-the-end"}>
                        Beginnig of the End
                    </SmoothScrollLink>
                </ul>
                <ul>
                    <SmoothScrollLink className={TOC_ITEM_CLASSNAME} to={"#following-week"}>
                        Following Week
                    </SmoothScrollLink>
                </ul>
                <ul>
                    <SmoothScrollLink className={TOC_ITEM_CLASSNAME} to={"#escalation"}>
                        Escalation
                    </SmoothScrollLink>
                </ul>
                <ul>
                    <SmoothScrollLink className={TOC_ITEM_CLASSNAME} to={"#responsibility"}>
                        Responsibility
                    </SmoothScrollLink>
                </ul>
                <ul>
                    <SmoothScrollLink className={TOC_ITEM_CLASSNAME} to={"#conclusion"}>
                        Conclusion
                    </SmoothScrollLink>
                </ul>
            </ul>
        </div>
    )

    return (
        <PageTemplate childSection={TOC}>
            <div className="flex justify-center">
                <article className="flex flex-col gap-8 max-w-166">
                    <div className="flex flex-col gap-4">
                        <div className="text-sm flex gap-2">
                            <Link to="/" className="animated-underline text-color cursor-pointer">
                                Home
                            </Link>
                            {">"}
                            <Link to="/articles" className="animated-underline text-color">
                                Articles
                            </Link>
                        </div>
                        <Heading1 className="leading-12">
                            {articlePreview.title}
                        </Heading1>
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
            <div className="flex flex-col gap-4">
                <Text>
                    <span className="font-semibold">Disclaimer:</span> I like Chinese people, and I want to visit China.
                    I understand all major powers participate in cybercrime. I do not take this personally and hope you too won't.
                </Text>
                <Text>
                    It&rsquo;s just an interesting story!
                </Text>
                <hr />
                <Text>
                    It was the summer of&rsquo;24. A sunny day in southern Austria. What started as a need
                    to explain myself to management almost turned into a <span className="font-semibold">catastrophic security breach.</span> This is the story of how I almost gave Chinese hackers access to your devices. Yes, your devices!
                </Text>
            </div>
            <div className="flex flex-col gap-4">
                <Heading2 id="infiltration-day">
                    Infiltration Day
                </Heading2>
                <Text>
                    I had started the job a couple of months ago and was tasked with helping my lead finish the implementation of a
                    certificate standard. I was alone, building the revocation system.
                </Text>
                <Text>
                    My lead? He was on holiday, or called in sick to look after the roofing company… Don&rsquo;t remember!
                </Text>
                <Text>
                    Figured I would take the initiative and contact the security architect to make sure the implementation was compliant.
                </Text>
                <Text>
                    As with most meetings, it didn&rsquo;t go as planned. I failed to explain why we should choose the simple solution and
                    ended up more confused than before.
                </Text>
                <Text>
                    My next idea was to draw a diagram showing how the simple version covers all of our cases. Maybe words weren&rsquo;t enough,
                    and seeing it would clear things!
                </Text>
                <Text>
                    I quickly opened <ExternalLink href="https://www.figma.com">Figma</ExternalLink> and
                    realized I would have to sign in, which was a no-no for me. I dislike linking my personal accounts to my work accounts.
                    Call it paranoia, caution, whatever.
                </Text>
                <Text>
                    I wasn&rsquo;t about to use my work email to sign up either, as I wasn&rsquo;t in the mood to receive a
                    bunch of emails from IT. So I quickly searched the internet and found an alternative.
                </Text>
                <Text>
                    It was on the <span className="font-semibold">Microsoft Store</span>, and it didn&rsquo;t require an account. I quickly downloaded it, drew my diagrams, and sent them over.
                </Text>
                <Text>
                    Everything was cool! I had a decent diagram and a simple solution for us to use. So I packed up my bag and left to continue from home.
                </Text>
            </div>
            <div className="flex flex-col gap-4">
                <Heading2 id="beginnig-of-the-end">
                    Beginning of the End
                </Heading2>
                <Text>
                    When I arrived home, I was welcomed with emails from IT. <span className="font-semibold">(Inevitable!)</span>
                </Text>
                <div className="border border-(--border-color) shadow-2xl bg-gray-800 rounded-md p-5 my-2">
                    SECURITY INCIDENT
                    <br />
                    <br />
                    A software on your PC has made a request to a URL, which was forwarded to a known command and control IP of a group known as Gallium.
                </div>
                <Text>
                    Oops!
                </Text>
                <Text>
                    Who would have guessed that the <span className="font-semibold">Microsoft Store</span> wasn&rsquo;t
                    secure? <span className="font-semibold">Shocking!</span>
                </Text>
                <Text>
                    IT was asking me to run <span className="font-semibold">Microsoft Defender.</span> So I quickly ran the tool and waited for it to finish,
                    but it took ages and wouldn&rsquo;t complete.
                </Text>
                <Text>
                    I started again, waited a bit, then left the PC open and closed for the day. When I came back later,
                    the PC was closed, so I assumed the process was finished and informed IT.
                </Text>
            </div>
            <div className="flex flex-col gap-4">
                <Heading2 id="following-week">
                    Following Week
                </Heading2>
                <Text>
                    I was deep in my flow, coding, finishing up stuff, and testing the feature when I started
                    noticing some weird behaviors. I kept getting logged out of tools for no reason, it kept
                    asking me to reset my password and answer extra security questions.
                </Text>
                <Text>
                    At the time, I was big on watching cybercrime documentaries. So yeah,
                    it definitely fueled my paranoia, but don&rsquo;t get me wrong, it wasn&rsquo;t all imagination.
                </Text>
                <Text>
                    After all, I hadn&rsquo;t even seen the virus scan finish. And this is the 101 of stealing
                    credentials: make a fake login window, force the user to re-login, and capture the credentials.
                    It couldn&rsquo;t be a coincidence!
                </Text>
                <Text>
                    It was launch time, and I was having some blueberries with
                    yogurt <span className="font-semibold">(amazing in the summer).</span> My paranoia itched,
                    and I said to myself, <span className="italic">"Let me take a look at this a little more in-depth."</span> I
                    opened the initial email and typed the name on the internet.
                </Text>
                <Text>
                    Oh man! The first thing that popped up was an article from <span className="font-semibold">Microsoft:</span>
                </Text>
                <Text className="italic">
                    "Chinese state-sponsored cybercrime group targets telecommunication infrastructures across the globe."
                </Text>
                <Text>
                    Well... I work in telecommunications infrastructure, explicitly on the credential management system. So...
                </Text>
                <Text>
                    This super fueled my suspicion. I couldn&rsquo;t risk it anymore.
                </Text>
                <Text>
                    I swear someone from Gallium, aka Phantom Panda or Granite
                    Typhoon <span className="font-semibold">(Cool names!)</span>, was
                    celebrating the jackpot.
                </Text>
                <Text>
                    I was losing it. The headlines were crossing my mind: <span className="italic">"Young engineer gives backdoor to the Chinese."</span>
                </Text>
                <Text>
                    I went for a smoke, discussed the revelations with my colleagues, and decided it was time to escalate!
                </Text>
            </div>
            <div className="flex flex-col gap-4">
                <Heading2 id="escalation">
                    Escalation
                </Heading2>
                <Text>
                    My manager <span className="font-semibold">(aka the architect)</span> was in his home country,
                    working remotely. So I quickly wrote an email along the lines of:
                </Text>
                <div className="border border-(--border-color) shadow-2xl bg-gray-800 rounded-md p-4 my-2">
                    Hi Architect, <br />
                    <br />
                    A couple of days ago, I got a notification from IT about a Chinese command and control
                    agent pinging from my PC. I did these..., but now I am observing these... behaviors. <br />
                    <br />
                    What should I do? <br />
                    <br />
                    Best, <br />
                    ...
                </div>
                <Text>
                    At the time, I was <span className="font-semibold">panicked.</span> But hindsight is twenty-twenty.
                    I wish I could have been there to see his face.
                </Text>
                <Text>
                    I got a very fast reply, saying I should contact the security team. So I found them
                    and wrote an email explaining everything that had happened. Added my manager to CC, and hit send.
                </Text>
                <Text>
                    A couple of minutes later, I got multiple emails with a lot of new people added. <span className="font-semibold">(The best kind of email chain.)</span>
                </Text>
                <Text>
                    It had escalated fast!
                </Text>
            </div>
            <div className="flex flex-col gap-4">
                <Heading2 id="responsibility">
                    Responsibility
                </Heading2>
                <Text>
                    I spent the rest of the day with colleagues from IT, hopping in and out of meetings.
                </Text>
                <Text>
                    Hours later, we had a wrap-up meeting. They said they checked the logs and everything
                    looked fine. That the weird behaviors might just be the <span className="font-semibold">infrastructure having a bad day.</span>
                </Text>
                <Text>
                    From my documentary binge, I knew logs could be deleted, and things could stay hidden.
                    Two days ago, I was checking a public repo full of leaked NSA tools, so my paranoia wasn&rsquo;t satisfied.
                </Text>
                <Text>
                    Being the straight-up guy I am, I said:
                </Text>
                <div className="italic">
                    "Guys, I don't need explanations. I observed and raised the issue to make sure. I am no expert on cybersecurity. You are the boss. If you say it's safe, let's write an email, and I’m fine with it."
                </div>
                <Text>
                    The answer was a silent hesitation. Guess nobody wanted to be responsible for a huge breach…
                </Text>
                <Text>
                    After the silence, we agreed they would check once more, and we would create a channel between the three of us so I could report any further weird behaviors.
                </Text>
            </div>
            <div className="flex flex-col gap-4">
                <Heading2 id="conclusion">
                    Conclusion
                </Heading2>
                <Text>
                    I went ahead and cleaned everything and changed all my passwords again. After a
                    couple of weeks without incidents, I got my PC replaced because I needed more RAM.
                    Which gave me huge relief.
                </Text>
                <Text>
                    I learned the hard way: you shouldn&rsquo;t trust the <span className="font-semibold"> Microsoft Store,</span> and
                    you shouldn&rsquo;t download anything you don&rsquo;t trust 100%.
                </Text>
                <Text>
                    God knows how many people still use that application!
                </Text>
                <Text className="mt-8">
                    <span className="font-semibold">P.S.</span> If we strip away the drama, the system I was working on was
                    actually secure and isolated. Even if someone got all my credentials,
                    everything in production was encrypted, inaccessible, and hidden.
                </Text>
                <Text>
                    Unless you have the root key or a potential golden key, there is no way to get anything meaningful.
                </Text>
                <Text>
                    <span className="font-semibold">What is a golden key?</span> It's the reason I stopped being
                    paranoid about data privacy, but that&rsquo;s a story for another time.
                </Text>
                <Text>
                    Until then, take care!
                </Text>
            </div>
        </div>
    )
}