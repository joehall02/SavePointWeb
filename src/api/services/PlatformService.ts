import { mapPlatformDaoToPlatform } from '../../helpers/daoMappers';
import type { Platform } from '../../types/platform.types';
import type { PlatformDao } from '../../types/platformDao.types';
import SavePointApiManager from '../SavePointApiManager';

class PlatformService {
	private static platformsBaseUrl = '/api/platforms';

	/**
	 * @returns Normalised list of platforms
	 */
	public static async getPlatforms(): Promise<Platform[]> {
		return SavePointApiManager
			.get<PlatformDao[]>(`${this.platformsBaseUrl}`)
			.then((response) => response.data.map(mapPlatformDaoToPlatform));
	}
}

export default PlatformService;