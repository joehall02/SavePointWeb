import type { EditGame, ExternalGame, ExternalGameDetails, FetchFromCollectionGame, GameDetails, SearchGameResults } from '../types/game.types';
import type { EditGameDao, ExternalGameDao, ExternalGameDetailsDao, FetchFromCollectionDao, GameDetailsDao, SearchGameResultsDao } from '../types/gameDao.types';
import type { Platform } from '../types/platform.types';
import type { PlatformDao } from '../types/platformDao.types';

export const mapGameDaoToGame = (dto: FetchFromCollectionDao): FetchFromCollectionGame => {
	return {
		id: dto.id,
		title: dto.title,
	};
};

export const mapGameDetailsDaoToGameDetails = (dto: GameDetailsDao): GameDetails => {
	return {
		id: dto.id,
		title: dto.title,
		condition: dto.condition,
		notes: dto.notes,
		boxIncluded: dto.boxIncluded,
		rating: dto.rating,
		igdbId: dto.igdbId,
		platformId: dto.platformId,
	};
};

export const mapEditGameDaoToEditGame = (dto: EditGameDao): EditGame => {
	return {
		id: dto.id,
		title: dto.title,
		condition: dto.condition,
		notes: dto.notes,
		boxIncluded: dto.boxIncluded,
		rating: dto.rating,
	};
};

export const mapExternalGameDaoToExternalGame = (dto: ExternalGameDao): ExternalGame => {
	return {
		id: dto.id,
		name: dto.name,
		cover: dto.cover?.url,
	};
};

export const mapSearchGameResultsDaoToSearchGameResults = (dto: SearchGameResultsDao): SearchGameResults => {
	return {
		count: dto.count,
		pages: dto.pages,
		games: dto.games.map(mapExternalGameDaoToExternalGame),
	};
};

export const mapExGameDetailsDaoToExGameDetails = (dto: ExternalGameDetailsDao): ExternalGameDetails => {
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
		release_dates: dto.release_dates,
	};
};

export const mapPlatformDaoToPlatform = (dto: PlatformDao): Platform => {
	return {
		id: dto.id,
		title: dto.title,
		cover: dto.cover,
	};
};