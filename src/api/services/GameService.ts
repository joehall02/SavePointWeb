import type { AxiosRequestConfig } from "axios";

import { mapEditGameDaoToEditGame, mapExGameDetailsDaoToExGameDetails, mapExternalGameDaoToExternalGame, mapGameDaoToGame, mapGameDetailsDaoToGameDetails } from "../../helpers/daoMappers";
import type { CreateGame, EditGame, ExternalGame, ExternalGameDetails, FetchFromCollectionGame, GameDetails, GetExternalGameDetailsParams, SearchGameResultsParams } from "../../types/game.types";
import type { FetchFromCollectionParams } from "../../types/game.types";
import { type CreateGameDao, type EditGameDao, type ExternalGameDao, type ExternalGameDetailsDao, type FetchFromCollectionDao, type GameDetailsDao } from "../../types/gameDao.types";
import SavePointApiManager from "../SavePointApiManager";

class GameService {
	private static gamesBaseUrl = '/api/games';

	public static async fetchFromCollection({
		title,
		platform,
		pagination
	}: FetchFromCollectionParams = {}): Promise<FetchFromCollectionGame[]> {
		const params = {
			params: {
				title,
				platform,
				page: pagination?.page,
				limit: pagination?.limit
			}
		} as AxiosRequestConfig;
		
		return SavePointApiManager
			.get<FetchFromCollectionDao[]>(`${this.gamesBaseUrl}`, params)
			.then((response) => response.data.map(mapGameDaoToGame))
	}

	public static async createGame(
		game: CreateGame
	): Promise<void> {
		SavePointApiManager.post<CreateGameDao, CreateGame>(`${this.gamesBaseUrl}`, game)
	}

	public static async getGameDetails(
		id: number
	): Promise<GameDetails> {
		return SavePointApiManager
			.get<GameDetailsDao>(`${this.gamesBaseUrl}/${id}`)
			.then((response) => mapGameDetailsDaoToGameDetails(response.data))
	}

	public static async editGame(
		id: number,
		updatedGame: EditGame
	): Promise<EditGame> {
		return SavePointApiManager
			.put<EditGameDao, EditGame>(`${this.gamesBaseUrl}/${id}`, updatedGame)
			.then((response) => mapEditGameDaoToEditGame(response.data))
	}

	public static async deleteGame(
		id: number
	): Promise<void> {
		SavePointApiManager.delete<void>(`${this.gamesBaseUrl}/${id}`);
	}

	public static async searchGameHome(
		searchTerm: string
	): Promise<ExternalGame[]> {
		return SavePointApiManager
			.post<ExternalGameDao[], string>(`${this.gamesBaseUrl}/search`, searchTerm)
			.then((response) => response.data.map(mapExternalGameDaoToExternalGame));
	}

	public static async searchGameResults({
		search,
		platform,
		pagination
	}: SearchGameResultsParams = {}): Promise<ExternalGame[]> {
		const params = {
			params: {
				search,
				platform,
				page: pagination?.page,
				limit: pagination?.limit
			}
		} as AxiosRequestConfig

		return SavePointApiManager
			.post<ExternalGameDao[]>(`${this.gamesBaseUrl}/results`, undefined, params)
			.then((response) => response.data.map(mapExternalGameDaoToExternalGame))
	}

	public static async getExternalGameDetails({
		gameId
	}: GetExternalGameDetailsParams = {}): Promise<ExternalGameDetails> {
		const params = {
			params: { 
				gameId
			}
		} as AxiosRequestConfig

		return SavePointApiManager
			.post<ExternalGameDetailsDao>(`${this.gamesBaseUrl}/game-details`, undefined, params)
			.then((response) => mapExGameDetailsDaoToExGameDetails(response.data))
	}
}

export default GameService;