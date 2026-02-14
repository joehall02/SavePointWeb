import type { EditGame, FetchFromCollectionGame, GameDetails } from "../types/game.types";
import type { EditGameDao, FetchFromCollectionDao, GameDetailsDao } from "../types/gameDao.types";

export function mapGameDaoToGame(dto: FetchFromCollectionDao): FetchFromCollectionGame {
	return {
		id: dto.id,
		title: dto.title
	};
}

export function mapGameDetailsDaoToGameDetails(dto: GameDetailsDao): GameDetails {
	return {
		id: dto.id,
		title: dto.title,
		condition: dto.condition,
		notes: dto.notes,
		boxIncluded: dto.boxIncluded,
		rating: dto.rating,
		igdbId: dto.igdbId,
		platformId: dto.platformId
	}
}

export function mapEditGameDaoToEditGame(dto: EditGameDao): EditGame {
	return {
		id: dto.id,
		title: dto.title,
		condition: dto.condition,
		notes: dto.notes,
		boxIncluded: dto.boxIncluded,
		rating: dto.rating
	}
}