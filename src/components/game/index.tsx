import { Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import GameService from "../../api/services/GameService";
import type { FetchFromCollectionGame } from "../../types/game.types";
import type { Pagination } from "../../types/pagination.types";

const GameList = () => {
	const [games, setGames] = useState<FetchFromCollectionGame[]>()

	useEffect(() => {
		const fetchGames = async () => {
			const pagination: Pagination = { page: 1, limit: 4}
			const platform: string = "original_xbox"
			const title: string = "Crash"
            
			const response = await GameService.fetchFromCollection({pagination})

			setGames(response)
		}

		fetchGames()
	}, [])

	return (
		<div>
			{games?.map((game) => (
				<Card key={game.id}>
					<CardContent>
						<Typography>{game.title}</Typography>
					</CardContent>
				</Card>
			))}
		</div>
	)
}

export default GameList;
