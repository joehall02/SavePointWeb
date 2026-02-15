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

export type ExternalGameDao = {
	id: number,
	name: string,
	cover: CoverDao
}

type PlatformDao = {
	name?: string,
}

type CoverDao = {
	url?: string
}

type VideoDao = {
	url?: string
}

type GenreDao = {
	name?: string
}

type ArtworkDao = {
	url?: string
}

type ReleaseDateDao = {
	date?: string,
	region?: string | null
}

export type ExternalGameDetailsDao = {
	id: number,
	name: string,
	storyline?: string | null,
	summary?: string | null,
	platforms?: PlatformDao[] | null
	cover?: CoverDao[] | null
	videos?: VideoDao[] | null
	genres?: GenreDao[] | null
	artworks?: ArtworkDao[] | null
	release_dates?: ReleaseDateDao[] | null
}