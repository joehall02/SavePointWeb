import { HomeFilled } from "@mui/icons-material";
import Button from "@mui/material/Button";

import GameList from "../../components/game";
import { useStyles } from "./styles";

function Home() {
	const { classes } = useStyles();
	
	return (
		<>
			<div>
				Home
				<Button color="primary" variant="contained" className={classes.testButton}>
					<HomeFilled />
					Click
				</Button>
			</div>
			<div>
				<GameList />
			</div>
		</>
	);
}

export default Home;
