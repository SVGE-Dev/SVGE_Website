import { Controller, ForbiddenError, Get, InternalServerError, Render } from "routing-controllers";
import { IndexRender } from "./render_interfaces/IndexRender";

@Controller("/")
export class IndexController
{
    @Get("/")
    @Render("index")
    private async index() : Promise<IndexRender>
    {
        return {
			page: "home",
            tab_title: "SVGE | Home",
            page_title: "Southampton",
			page_subtitle: "Video Games and Esports Society",
			buttons: [
				{ text: "Join us on Discord", link: "https://discord.gg/n5rC5Jy" },
				{ text: "Become a Member", link: "https://www.susu.org/groups/southampton-university-esports-society" }
			]
        };
    }
}