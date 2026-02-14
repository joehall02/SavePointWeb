export type FetchFromCollectionDao = {
	id: number;
	title: string;
}

export type CreateGameDao = {
	title: string,
	condition: string,
	notes?: string,
	boxIncluded: boolean,
	rating?: number,
	igdbId: number,
	platformId: number
}

export type GameDetailsDao = {
	id: number,
	title: string,
	condition: string,
	notes: string,
	boxIncluded: boolean,
	rating: number,
	igdbId: number,
	platformId: number
}

export type EditGameDao = {
	id: number,
	title: string,
	condition: string,
	notes: string,
	boxIncluded: boolean,
	rating: number,
	igdbId: number,
	platformId: number
}