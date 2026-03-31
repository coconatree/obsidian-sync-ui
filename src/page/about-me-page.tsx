import { ExternalLink, Heading1, Heading2, Text } from "../comp/text-comp"
import { PageTemplate } from "../template/page"

export const AboutMePage = () => {

    const TOC = (
        <div className="flex flex-col">
            <div className="text-md font-semibold">
                Table of Contents
            </div>
            <ul className="text-sm flex flex-col gap-2 mt-4 font-extralight">
                <li>
                    <a href="#my-story" className="animated-underline">
                        My Story
                    </a>
                </li>
                <li>
                    <a href="#my-story" className="animated-underline">
                        What is all this?
                    </a>
                </li>
                <li>
                    <a href="#my-story" className="animated-underline">
                        Etc
                    </a>
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
                            Hey! I am Emre, on the internet I often go by, <span className="font-black">@mr.anderson</span> or <span className="font-black">@coconatree.</span> This is
                            the story of how I started and ended up here. Hope you enjoy it!
                        </Text>
                        <Text>
                            If you want to reach out to me feel free to <ExternalLink href="mailto:emre.caniklioglu.00@gmail.com">send me an email.</ExternalLink>
                        </Text>
                    </div>
                    <hr className="mt-4" />
                </div>
                <div className="flex flex-col gap-4">
                    <Heading2 className="text-3xl">
                        My Story
                    </Heading2>
                    <Text>
                        I have been facinated by computers since I was a little kid I rememberpalying 
                        Garry mod <ExternalLink href="https://www.troubleinterroristtown.com/">Trouble in Terrorist Town</ExternalLink> over a summer most I have never seen. and making friends from all over the world. and I had to figure out how to run a minecraft server. At the time I didn't know but I was configuring NAT to convert my PC to a standalone server.
                        Just so we could play with my friend.
                    </Text>
                    <Text>
                        Fast forward couple of years I seriously picked up the habit of programming when a friend of my showed me
                        his Python assignment for his electrical engineering class. That nigth I got hooked. I did my majors in Mathematics due to my girlfriend's sister being a Mathematics major and me figuring out
                        "its the mother of all sciences, I can pivot and chosee what I want later." (Wasn't as smooth as I thougth genius idea rigth? haha xd) trying to Maybe it was the ability
                        to create, maybe ability to see
                    </Text>
                    <Text>
                        I don't know what, maybe it was the ability to create I enjoyed, maybe being able to see my creations or me just trying to escape the abstract world of Mathematics which years later I realized
                        was a pure form of creating. I got hooked and that nigth wrote a spagetti calculator. It was working that's all that mattered!
                    </Text>
                    <Text>
                        The calculator followed by an obsession with a better calculator wanting to write a generalized TI style one (I learned too late the command called 'eval()') which followed with my first site.
                        FinalCalculator.com which I build cause I was sick of calculating the notes I would need from the final. which followed me taking all my free electives and free time to learn how to write software
                        and build stuff.
                    </Text>
                    <Text>
                        During the near end of my graduation and afterwards I had the chance to work in various sectors such as core-banking, enterprise management and IoT devices. I have wrote Spring services for banks to
                        manage branches, for enterprises to manage intership prgorammes, bank inspectors daily reporting tools and most importanly the one which I enjoyed the most the reaserch cryptography protocols, services
                        to manage identity certificates and much more.
                    </Text>
                    <Heading2>
                        What is all this?
                    </Heading2>
                    <Text>
                        Throught my journey I have always been facinated by the beauty of the interner. Terminals connected together, a mouse click, a key stroke and a ligthing speed information spread. With its good and bad
                        I have always wanted to have my own corner on it. Obsidian Sync is my corner on the internet. Here you can find my stroies, technical articles, projects, usefull directories, photos, music I like to listen
                        and much more. This is my real estate on the internet!
                    </Text>
                    <Heading2>
                        Etc
                    </Heading2>
                    <Text>
                        I am a firm beliver that we the people get lost on the screens thinking the stuff we read on the computers are not human and these chracters are not the reflections of a real person so I would like to close of by
                        sharing a little about me beyond computers and the internet. I like taking long walks during the sunset. I enjoy reading a good novel. (feel free to send me recomendaditons). I don't have the voice of an angel but ,
                        I like singing along with my favorite songs while in the flow. I used to play basketballs and even thought I should do more now days I am more into boxing. Also I love playing Go aka BadukPop (hit me up for a game).
                    </Text>
                    <Text>
                        Hope this staisfies your curiosity and it's was a warm introducition. If you want to chat or you have any inquiries feel free to shoot me a message here.
                    </Text>
                </div>
            </div>
        </PageTemplate>
    )
}
