import Button from "@mui/material/Button";
import { HomeFilled } from "@mui/icons-material";
import { useStyles } from "./styles";

function Home() {
	const { classes } = useStyles();
	
	return (
		<div>
			Home
			<Button color="primary" variant="contained" className={classes.testButton}>
				<HomeFilled />
				Click
			</Button>
		</div>
	);
}

export default Home;
