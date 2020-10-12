import { Game } from "../../entities/game.ent";
import { RenderResponse } from "./RenderResponse";

export interface GamesRender extends RenderResponse
{
	games : Array<{
		game : Game,
		icon : string // base64 encoding, Handlebars doesn't like getters
	}>;
	canEditAll : boolean;
	canEditSome : string[] | undefined; // UUIDs of games that this user can edit the info for
}