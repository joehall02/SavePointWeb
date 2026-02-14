import type { Pagination } from "./pagination.types";

export type FetchFromCollectionGame = {
	id: number;
	title: string;
}

export type FetchFromCollectionParams = {
	title?: string;
	platform?: string;
	pagination?: Pagination;
}

export type CreateGame = {
	title: string,
	condition: string,
	notes?: string,
	boxIncluded: boolean,
	rating?: number,
	igdbId: number,
	platformId: number
}

export type GameDetails = {
	id: number,
	title: string,
	condition: string,
	notes: string,
	boxIncluded: boolean,
	rating: number,
	igdbId: number,
	platformId: number
}

export type EditGame = {
	id: number,
	title?: string,
	condition?: string,
	notes?: string,
	boxIncluded?: boolean,
	rating?: number,
}