import type { Pagination } from './pagination.types';

export type FetchFromCollectionGame = {
	id: number;
	title: string;
};

export type FetchFromCollectionParams = {
	title?: string;
	platform?: string;
	pagination?: Pagination;
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
	notes: string,
	boxIncluded: boolean,
	rating: number,
	igdbId: number,
	platformId: number
};

export type EditGame = {
	id: number,
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

export type SearchGameResultsParams = {
	search?: string,
	platform?: string,
	pagination?: Pagination
};

export type GetExternalGameDetailsParams = {
	gameId?: number
};

type Platform = {
	name?: string,
};

type Cover = {
	url?: string
};

type Video = {
	url?: string
};

type Genre = {
	name?: string
};

type Artwork = {
	url?: string
};

type ReleaseDate = {
	date?: string,
	region?: string | null
};

export type ExternalGameDetails = {
	id: number,
	name: string,
	storyline?: string | null,
	summary?: string | null,
	platforms?: Platform[] | null
	cover?: Cover[] | null
	videos?: Video[] | null
	genres?: Genre[] | null
	artworks?: Artwork[] | null
	release_dates?: ReleaseDate[] | null
};