import type { EditGame, ExternalGame, ExternalGameDetails, FetchFromCollectionGame, GameDetails } from "../types/game.types";
import type { EditGameDao, ExternalGameDao, ExternalGameDetailsDao, FetchFromCollectionDao, GameDetailsDao } from "../types/gameDao.types";
import type { Platform } from "../types/platform.types";
import type { PlatformDao } from "../types/platformDao.types";

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

export function mapExternalGameDaoToExternalGame(dto: ExternalGameDao): ExternalGame {
	return {
		id: dto.id,
		name: dto.name,
		cover: dto.cover.url
	}
}

export function mapExGameDetailsDaoToExGameDetails(dto: ExternalGameDetailsDao): ExternalGameDetails {
	return {
		id: dto.id,
		name: dto.name,
		storyline: dto.storyline,
		summary: dto.summary,
		platforms: dto.platforms,
		cover: dto.cover,
		videos: dto.videos,
		genres: dto.genres,
		artworks: dto.artworks,
		release_dates: dto.release_dates
	}
}

export function mapPlatformDaoToPlatform(dto: PlatformDao): Platform {
	return {
		id: dto.id,
		title: dto.title,
		cover: dto.cover
	}
}