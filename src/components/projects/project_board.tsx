import Image from "next/image"
import Showcase from "@/components/projects/showcase";
import DevelopingSVG from "/public/developing.svg"
import GlobalPayShot from "/public/gp_screenshot.png"
import PortfolioScreenshot from "/public/portfolio_screenshot.png"
import LurkforworkScreenshot from "/public/lurkforwork_screenshot.png"
import Bigbrain_screenshot from "/public/bigbrain_screenshot.png"
const ProjectBoard = () => {
    const projects_data = [
        {
            title: "Global Pay",
            img: GlobalPayShot,
            detail: "A NextJS Front-End Project Developed during an internship at AwardGlobal",
            tech: ["NextJS", "Tailwind CSS", "Ant-Design"],
            url: "https://www.global-pay.com.au/"
        },
        {
            title: "Web Portfolio",
            img: PortfolioScreenshot,
            detail: "This website",
            tech: ["NextJS", "Tailwind CSS", "TypeScript"],
            url: "/"
        },
        {
            title: "Bigbrain",
            img: Bigbrain_screenshot,
            detail: "A React quiz platform inspired by Kahoot during COMP6080(Web Front-End Programming)",
            tech: ["React", "MaterialUI", "Cypress"],
            url: "https://ben-bigbrain-site.vercel.app/"
        },
        {
            title: "LurkForWork",
            img: LurkforworkScreenshot,
            detail: "A job sharing website during COMP6080(Web Front-End Programming)",
            tech: ["VanillaJS", "Bootstrap"],
            url: "https://ben-lurkforwork.vercel.app/"
        }
    ]
    return (
        <section className="mt-4 md:mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
                <h2 className="text-3xl font-bold">Projects</h2>
                <Image className="-mb-3 mt-2 md:-mb-0 md:mt-0" src={DevelopingSVG} alt={"developing"} width={240} height={240}/>
            </div>
            <hr className="max-w-[20rem] h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <div className="mt-3">
                {projects_data.map((project, index) => (
                    <Showcase key={index} title={project.title} source={project.img}
                              detail={project.detail} tech={project.tech} siteUrl={project.url}/>
                ))}
            </div>
        </section>
    )
}

export default ProjectBoard