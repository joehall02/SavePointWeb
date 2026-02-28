import { Close, Menu } from '@mui/icons-material';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { AppBar, Box, Container, Drawer, IconButton, List, ListItemButton, ListItemText, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from 'react';
import { Link } from "react-router-dom";

import { useStyles } from './styles';

const pages = [
	{label: 'Home', href: '/'},
	{label: 'Platforms', href: '/platforms'},
	{label: 'Collection', href: '/collection'}
]

export const Nav = () => {
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('md'))

	const [mobileOpen, setMobileOpen] = useState<boolean>(false);

	const toggleMobileOpen = () => setMobileOpen(!mobileOpen)

	const { classes } = useStyles();
	
	const navLinks = (
		<List className={classes.navLinks}>
			{pages.map((page) => (
				<ListItemButton 
					className={classes.navButton}
					key={page.label}
					component={Link}
					to={page.href}
					disableRipple={true}
					focusRipple={false}
					onClick={mobileOpen ? toggleMobileOpen : undefined}
				>
					<ListItemText primary={page.label} />
				</ListItemButton>
			))}
		</List>
	)
	
	return (
		<AppBar className={classes.root} position="fixed">
			<Container maxWidth="xl">
				<Box>
					<Toolbar className={classes.navContent} disableGutters={true}>
						<IconButton 
							className={classes.navLeftContent}
							component={Link}
							disableRipple
							focusRipple
							to={'/'}
						>
							<Typography variant='h6'>SavePoint</Typography>
							<LogoDevIcon />
						</IconButton>

						<Box>
							{isMobile ? (
								<Box>
									<IconButton onClick={toggleMobileOpen}>
										<Menu />
									</IconButton>

									<Drawer className={classes.mobileDrawer} open={mobileOpen} anchor='right'>
										<IconButton 
											className={classes.mobileCloseContainer}
											disableRipple
											focusRipple
											onClick={toggleMobileOpen}
										>
											<Close />
										</IconButton>

										{navLinks}
									</Drawer>
								</Box>
							) : (
								<Box>
									{navLinks}
								</Box>
							)}
						</Box>
					</Toolbar>
				</Box>
			</Container>
		</AppBar>
	);
}
