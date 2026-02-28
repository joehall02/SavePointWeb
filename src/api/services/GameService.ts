import type { AxiosRequestConfig } from 'axios';

import { mapEditGameDaoToEditGame, mapExGameDetailsDaoToExGameDetails, mapExternalGameDaoToExternalGame, mapGameDaoToGame, mapGameDetailsDaoToGameDetails } from '../../helpers/daoMappers';
import type { CreateGame, EditGame, ExternalGame, ExternalGameDetails, FetchFromCollectionGame, GameDetails, GetExternalGameDetailsParams, SearchGameResultsParams } from '../../types/game.types';
import type { FetchFromCollectionParams } from '../../types/game.types';
import { type CreateGameDao, type EditGameDao, type ExternalGameDao, type ExternalGameDetailsDao, type FetchFromCollectionDao, type GameDetailsDao } from '../../types/gameDao.types';
import SavePointApiManager from '../SavePointApiManager';

class GameService {
	private static gamesBaseUrl = '/api/games';

	/**
	 * @param params - Parameters to filter the games 
	 * @returns Normalised list of games
	 */
	public static async fetchFromCollection(
		params: FetchFromCollectionParams = {},
	): Promise<FetchFromCollectionGame[]> {
		const { title, platform, pagination } = params;
	
		const config: AxiosRequestConfig = {
			params: {
				title,
				platform,
				page: pagination?.page,
				limit: pagination?.limit,
			},
		};
		
		return SavePointApiManager
			.get<FetchFromCollectionDao[]>(`${this.gamesBaseUrl}`, config)
			.then((response) => response.data.map(mapGameDaoToGame));
	}

	/**
	 * @param game - Game object to be created
	 */
	public static async createGame(
		game: CreateGame,
	): Promise<void> {
		SavePointApiManager.post<CreateGameDao, CreateGame>(`${this.gamesBaseUrl}`, game);
	}

	/**
	 * @param id - Id of the game data to be retrieved
	 * @returns - Normalised game details
	 */
	public static async getGameDetails(
		id: number,
	): Promise<GameDetails> {
		return SavePointApiManager
			.get<GameDetailsDao>(`${this.gamesBaseUrl}/${id}`)
			.then((response) => mapGameDetailsDaoToGameDetails(response.data));
	}

	/**
	 * @param id - Id of the game to be edited
	 * @param updatedGame - Updated game data
	 * @returns Game data of game that has been edited
	 */
	public static async editGame(
		id: number,
		updatedGame: EditGame,
	): Promise<EditGame> {
		return SavePointApiManager
			.put<EditGameDao, EditGame>(`${this.gamesBaseUrl}/${id}`, updatedGame)
			.then((response) => mapEditGameDaoToEditGame(response.data));
	}

	/**
	 * @param id - Id of game to be deleted
	 */
	public static async deleteGame(
		id: number,
	): Promise<void> {
		SavePointApiManager.delete<void>(`${this.gamesBaseUrl}/${id}`);
	}

	/**
	 * @param searchTerm - Search term to filter game list
	 * @returns Normalised list of external games
	 */
	public static async searchGameHome(
		searchTerm: string,
	): Promise<ExternalGame[]> {
		return SavePointApiManager
			.post<ExternalGameDao[], string>(`${this.gamesBaseUrl}/search`, searchTerm)
			.then((response) => response.data.map(mapExternalGameDaoToExternalGame));
	}

	/**
	 * @param params - Params to filter the games
	 * @returns Normalised list of external games
	 */
	public static async searchGameResults(
		params: SearchGameResultsParams = {},
	): Promise<ExternalGame[]> {
		const { search, platform, pagination } = params;

		const config: AxiosRequestConfig = {
			params: {
				search,
				platform,
				page: pagination?.page,
				limit: pagination?.limit,
			},
		};

		return SavePointApiManager
			.post<ExternalGameDao[]>(`${this.gamesBaseUrl}/results`, undefined, config)
			.then((response) => response.data.map(mapExternalGameDaoToExternalGame));
	}

	/**
	 * @param params - Params to filter external game details
	 * @returns Normalised external game details
	 */
	public static async getExternalGameDetails(
		params: GetExternalGameDetailsParams = {},
	): Promise<ExternalGameDetails> {
		const { gameId } = params;
	
		const config: AxiosRequestConfig = {
			params: { 
				gameId,
			},
		};

		return SavePointApiManager
			.post<ExternalGameDetailsDao>(`${this.gamesBaseUrl}/game-details`, undefined, config)
			.then((response) => mapExGameDetailsDaoToExGameDetails(response.data));
	}
}

export default GameService;