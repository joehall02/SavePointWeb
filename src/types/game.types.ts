import type { GameDetail } from '../enums/games';
import type { Pagination } from './pagination.types';

export type FetchFromCollectionParams = {
	title?: string;
	platform?: string;
	pagination?: Pagination;
};

export type CollectionGame = {
	id: number,
	title: string,
	cover?: string
};

export type CollectionGameResults = {
	count: number,
	pages: number,
	games: CollectionGame[]
};

export type CreateGame = {
	title: string,
	condition: string,
	notes?: string,
	boxIncluded: boolean,
	rating?: number,
	igdbId: number,
	platformId: number
};

export type GameDetails = {
	id: number,
	title: string,
	condition: string,
	notes?: string,
	boxIncluded: boolean,
	rating?: number,
	igdbId: number,
	platformId: number
};

export type EditGame = {
	id?: number,
	title?: string,
	condition?: string,
	notes?: string,
	boxIncluded?: boolean,
	rating?: number,
};

export type ExternalGame = {
	id: number,
	name: string,
	cover?: string
};

export type SearchGameResults = {
	count: number,
	pages: number,
	games: ExternalGame[]
};

export type SearchGameResultsParams = {
	search?: string,
	platform?: string,
	pagination?: Pagination
};

export type GetExternalGameDetailsParams = {
	gameId?: number
};

export type GetGameDetailsParams = {
	id?: number
};

export type Platform = {
	name?: string,
};

type Cover = {
	url?: string
};

export type Video = {
	url?: string
};

export type Genre = {
	name?: string
};

export type Screenshot = {
	url?: string
};

export type ReleaseDate = {
	date?: string,
	region?: string | null
};

export type Pills = Platform[] | ReleaseDate[] | Genre[] | undefined | null;

export type PillItem = Platform | ReleaseDate | Genre;

export type ExternalGameDetails = {
	id: number,
	name: string,
	storyline?: string | null,
	summary?: string | null,
	platforms?: Platform[] | null
	cover?: Cover | null
	videos?: Video[] | null
	genres?: Genre[] | null
	screenshots?: Screenshot[] | null
	release_dates?: ReleaseDate[] | null
};

export type GameDetailType = GameDetail.External | GameDetail.Collection;

export type DetailsResults =
	| (ExternalGameDetails & { type: GameDetail.External })
	| (GameDetails & ExternalGameDetails & { type: GameDetail.Collection });

export type UseGameDetailsResult = {
	results: DetailsResults | undefined;
	isLoading: boolean;
	gameId: number | undefined;
};

export type GameResults = 
	| (SearchGameResults & { type: GameDetail.External })
	| (CollectionGameResults & { type: GameDetail.Collection });

export type UseGameResultsResult = {
	results: GameResults | undefined;
	isLoading: boolean;
	searchParams: SearchGameResultsParams;
	handleSearch: (key: string, input: string) => void;
};