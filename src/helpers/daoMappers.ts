import type { FetchFromCollectionGame } from "../types/game.types";
import type { FetchFromCollectionDao } from "../types/gameDao.types";

export function mapGameDaoToGame(dto: FetchFromCollectionDao): FetchFromCollectionGame {
	return {
		id: dto.id,
		title: dto.title
	};
}