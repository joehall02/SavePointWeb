import type { AxiosRequestConfig } from "axios";

import { mapGameDaoToGame } from "../../helpers/daoMappers";
import type { FetchFromCollectionGame } from "../../types/game.types";
import type { FetchFromCollectionOptions } from "../../types/game.types";
import type { FetchFromCollectionDao } from "../../types/gameDao.types";
import SavePointApiManager from "../SavePointApiManager";

class GameService {
	private static gamesBaseUrl = '/api/games';

	public static async fetchFromCollection({
		title,
		platform,
		pagination
	}: FetchFromCollectionOptions = {}): Promise<FetchFromCollectionGame[]> {
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
}

export default GameService;