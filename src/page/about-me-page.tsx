import { ExternalLink, Heading1, Heading2, Heading3, Text } from "../comp/text-comp"
import { PageTemplate } from "../template/page"
import { SmoothScrollLink } from "../comp/smooth-scrol"
import { APPLICATION_DATA } from "../data"

export const AboutMePage = () => {

    const TOC_ITEM_CLASSNAME = "animated-underline text-sm text-color font-light cursor-pointer";

    const TOC = (
        <div className="flex flex-col gap-4">
            <div className="title-font font-medium">
                Table of Contents
            </div>
            <ul className="flex flex-col gap-1">
                <li>
                    <SmoothScrollLink to="#my-story" className={TOC_ITEM_CLASSNAME}>
                        My Story
                    </SmoothScrollLink>
                    <ul className="flex flex-col gap-1 my-2 pl-3">
                        <li>
                            <SmoothScrollLink to="#inception" className={TOC_ITEM_CLASSNAME}>
                                Inception
                            </SmoothScrollLink>
                        </li>
                        <li>
                            <SmoothScrollLink to="#afterwards" className={TOC_ITEM_CLASSNAME}>
                                Afterwards
                            </SmoothScrollLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <SmoothScrollLink to="#what-is-this" className={TOC_ITEM_CLASSNAME}>
                        What is all this?
                    </SmoothScrollLink>
                </li>
                <li>
                    <SmoothScrollLink to="#personal-note" className={TOC_ITEM_CLASSNAME}>
                        Personal Note
                    </SmoothScrollLink>
                </li>
            </ul>
        </div>
    )

    return (
        <PageTemplate childSection={TOC}>
            <div className="max-w-166 flex flex-col gap-8">


                <div className="flex flex-col gap-6">
                    <Heading1>
                        About Me
                    </Heading1>
                    <div className="flex flex-col gap-4">
                        <Text>
                            Hey! I am Emre. On the internet, I often
                            go by <span className="font-black">@mr.anderson</span> or <span className="font-black">@mr.coconatree.</span> This
                            is the story of how I ended up here. Hope you enjoy it!
                        </Text>
                        <Text>
                            If you'd like to reach out to me, feel free
                            to <ExternalLink href={`mailto:${APPLICATION_DATA.contact_email}`}>send me an email</ExternalLink> or <ExternalLink href={`https://t.me/${APPLICATION_DATA.telegram_username}?text=Hey...`}>message me.</ExternalLink>
                        </Text>
                    </div>
                    <hr className="mt-4" />
                </div>
                <div className="flex flex-col gap-4">
                    <Heading2 id="my-story">
                        My Story
                    </Heading2>
                    <Text>
                        I have been fascinated by computers since I was a little kid. I vividly remember a summer spent
                        playing <span className="italic">Garry's Mod: <ExternalLink href="https://www.troubleinterroristtown.com/">Trouble
                            in Terrorist Town,</ExternalLink></span> making
                        friends with people I had never met. I even dabbled with our router just so I
                        could configure a Minecraft server and
                        learned what <span className="bg-gray-800 p-1 rounded-md text-sm">%appdata%</span> is so
                        I could move my save files.
                    </Text>
                    <Text>
                        Yet it wasn&rsquo;t until my first year at university that I actually picked up programming.
                        I was a math major, mainly influenced by my girlfriend's sister, who was also doing a math major.
                        I remember her telling me that I could pivot into anything I liked, and that
                        I wouldn&rsquo;t need to decide right away...
                    </Text>
                    <Text>
                        After all, it&rsquo;s the foundation of everything, right?
                    </Text>
                    <Text>
                        Don&rsquo;t get me wrong. I was good at math. But looking at it now, I didn&rsquo;t
                        know what I was getting myself into.
                    </Text>
                </div>
                <div className="flex flex-col gap-4">
                    <Heading3 id="inception">
                        Inception
                    </Heading3>
                    <Text>
                        It was a winter night at the department building. A friend had just come out of the lab and was working on his Python assignment.
                        I figured I would give it a try. After all, I was always good with computers.
                    </Text>
                    <Text>
                        So I spent the entire night coding a spaghetti calculator.
                    </Text>
                    <Text>
                        I don&rsquo;t really know why. Maybe I was running away from my failing relationship, or trying to avoid mathematics,
                        as I didn&rsquo;t even understand what it really was until two years later. <span className="font-semibold">But I was hooked!</span>
                    </Text>
                    <Text>
                        Something about building stuff that actually yielded results had me focused. It made me forget my problems and
                        create! I was good at it. I could feel it.
                    </Text>
                    <Text>
                        The calculator led to an obsession with building bigger and more complex projects, such as a TI
                        calculator <span className="font-semibold">(took me a good two weeks to discover <span className="bg-gray-800 p-1 rounded-md text-sm">eval()</span>,
                            and a couple more months for stack-based calculator).</span>
                    </Text>
                    <Text>
                        This was followed by my first website, called <span className="font-semibold">FinalCalculator.net</span>, which I built because I was sick of
                        figuring out the grades I needed for my calculus exam.
                    </Text>
                    <Text>
                        I would rather build stuff than study. Although I wasn&rsquo;t successful with its marketing, it motivated me
                        to spend all my time learning how to write software and build things.
                    </Text>
                    <Text>
                        I would spend endless nights just trying to build, and along the way, I met others who spent their nights
                        coding in the department building.
                    </Text>
                    <Text>
                        A group of CS seniors, who I am grateful for everything they have helped me with, and a physics senior
                        who introduced me to <span className="font-semibold">Arch Linux</span> and helped me so many times when I broke my system. Thanks to him, I know
                        that there is a <ExternalLink href="https://lynx.invisible-island.net/">terminal browser</ExternalLink> so
                        you can search Stack Overflow from your <span className="font-semibold">EMERGENCY TERMINALS...</span> Who knew!
                    </Text>
                    <Text>
                        All this led me into a deeper obsession where I took the entire software curriculum from
                        computer science and made an unofficial major.
                    </Text>
                    <Text>
                        After all, the sister was right... I had pivoted. It just wasn&rsquo;t as <span className="font-semibold">smooth</span> as she portrayed it
                        to be! <span className="font-semibold">(Would do it again 100%.)</span>
                    </Text>
                </div>
                <div className="flex flex-col gap-4">
                    <Heading3 id="afterwards">
                        Afterwards
                    </Heading3>
                    <Text>
                        While all of this was happening, my close friend and many of the mathematics students who
                        decided to give up on math were pivoting towards data science!
                    </Text>
                    <Text>
                        It was hot! This was <span className="font-semibold">pre-GPT</span>, and it was the future!
                    </Text>
                    <Text>
                        I did an internship at a data company and worked on a project for natural gas import predictions.
                        Man, I don't remember a time when I was more bored!
                    </Text>
                    <Text>
                        But afterwards it was clear. I wanted to do nothing with data and wanted to do software.
                        I had a couple of freelance jobs during my studies. Once I lost a contract because I was using Java 11
                        features <span className="font-semibold">(.net guys and streams...)</span>. I did some there, some
                        here, continued to build more stuff, tried different
                        languages <span className="font-semibold">— Go, Rust, JavaScript —</span> and
                        eventually ended up with <span className="font-semibold">Java, Spring.</span>
                    </Text>
                    <Text>
                        Started as a working student in <span className="font-semibold">core banking,</span> continued to <span className="font-semibold">enterprise resource planning softwares,</span>
                        and from there got the chance to get into <span className="font-semibold">IoT/telecommunications infrastructure.</span>
                    </Text>
                    <Text>
                        Where I had the chance to work with great people, and learn how the implementation of cryptography,
                        which I had taken at school, would work. For the first time, I used it in programming to develop
                        research projects.
                    </Text>
                    <Text>
                        It was a real throwback to the days when I first learned to use <ExternalLink href="https://www.openpgp.org/software/kleopatra/">Kleopatra.</ExternalLink>
                    </Text>
                    <Text>
                        With all of this, we come to the end of the story. It's been almost eight years
                        since I wrote that first <span className="font-semibold">spaghetti code.</span> Nowadays,
                        I am interested in <span className="font-semibold">distributed systems</span> and <span className="font-semibold">cryptography,</span> where I
                        experiment with <span className="font-semibold">encryption and data transfer.</span>
                    </Text>
                    <Text>
                        I have an upcoming project which I plan to write about, but I'm not quite there yet. I'll keep you updated.
                    </Text>
                </div>
                <div className="flex flex-col gap-4">
                    <Heading2 id="what-is-this">
                        What is all this?
                    </Heading2>
                    <Text>
                        Throughout my journey, I have always been fascinated by the beauty of the internet.
                        The simplicity and all that's been built on top of it... I find it astonishing!
                    </Text>
                    <Text>
                        With the good and bad, I have always wanted my own corner of it.
                    </Text>
                    <Text>
                        <span className="font-semibold">This site</span> is my corner of the internet
                        where I share my stories, articles, projects, and whatever I want.
                    </Text>
                    <Text>
                        It's my <span className="font-semibold">real estate on the internet! </span>
                    </Text>
                </div>
                <div className="flex flex-col gap-4">
                    <Heading2 id="personal-note">
                        Personal Note
                    </Heading2>
                    <Text>
                        I believe we get lost in screens and think the digital footprints we see are not humans. In case
                        my copy wasn't enough to make you feel my presence, I want to close by sharing a little
                        about me beyond the technical stuff. So you could have a better idea of who you are
                        interacting with.
                    </Text>
                    <Text>
                        I like taking long walks during sunset. I enjoy reading a good
                        novel <ExternalLink href={`https://t.me/${APPLICATION_DATA.telegram_username}?text=Here is a novel for you:`}>(send me recommendations).</ExternalLink> I
                        recently discovered that I like singing. Shockers!
                    </Text>
                    <Text>
                        I have been lacking with my training but I enjoy boxing.
                        Also, I love playing <span className="font-semibold">Go</span>, aka <span className="font-semibold">BadukPop</span> <ExternalLink href="https://online-go.com/user/view/1887144">(hit me up for a game).</ExternalLink>
                    </Text>
                    <Text>
                        My favorite drink is a hard bubbly mineral water! And last of all, here some songs I listen to:
                    </Text>
                    <ul className="flex flex-col gap-3">
                        <li>
                            <ExternalLink href="https://open.spotify.com/track/6QyWVCLASvvtpKD0KJZs5e?si=4d6c2b9cdb804a63">
                                Is This Love - Whitesnake
                            </ExternalLink>
                        </li>
                        <li>
                            <ExternalLink href="https://open.spotify.com/track/6fnachl7fIn5dqIjakfJ57?si=5cebad92f33c486c">
                                School - Supertramp
                            </ExternalLink>
                        </li>
                        <li>
                            <ExternalLink href="https://open.spotify.com/track/6b0GBFyOJ7V15bzdUnoxiC?si=e4ee8809879b4aa9">
                                Haiko Is Alive and She is 59 - Moku Moku
                            </ExternalLink>
                        </li>
                    </ul>
                    <Text>
                        Hope this was enough to satisfy your curiosity and serves as a warm introduction.
                    </Text>
                    <Text>
                        If you want to connect or chat, <ExternalLink href={`https://t.me/${APPLICATION_DATA.telegram_username}?text=Hey...`}>message me</ExternalLink> or <ExternalLink href={`mailto:${APPLICATION_DATA.contact_email}`}>send me an email.</ExternalLink>
                    </Text>
                </div>
            </div>
        </PageTemplate >
    )
}
