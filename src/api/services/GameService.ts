import type { AxiosRequestConfig } from "axios";

import { mapEditGameDaoToEditGame, mapGameDaoToGame, mapGameDetailsDaoToGameDetails } from "../../helpers/daoMappers";
import type { CreateGame, EditGame, FetchFromCollectionGame, GameDetails } from "../../types/game.types";
import type { FetchFromCollectionParams } from "../../types/game.types";
import type { CreateGameDao, EditGameDao, FetchFromCollectionDao, GameDetailsDao } from "../../types/gameDao.types";
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
}
export default GameService;