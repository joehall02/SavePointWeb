import type { Pagination } from "./pagination.types";

export type FetchFromCollectionGame = {
	id: number;
	title: string;
}

export type FetchFromCollectionOptions = {
	title?: string;
	platform?: string;
	pagination?: Pagination;
}