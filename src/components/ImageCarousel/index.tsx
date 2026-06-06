import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import React from 'react';

import { getYouTubeEmbedUrl } from '../../helpers/getYoutubeEmbedUrl';
import { isTouchScreen } from '../../helpers/isTouchScreen';
import type { Screenshot, Video } from '../../types/game.types';
import { useStyles } from './styles';

interface ICarouselProps {
	media? : Screenshot[] | Video[] | null | undefined;
	isMobile?: boolean;
	isVideo?: boolean;
}

export const ImageCarousel = ({ media, isMobile, isVideo = false }: ICarouselProps) => {
	const isTouchDevice = isTouchScreen();
	
	// When on a touch device we want to always show the next/previous button and indicator dots
	const [isHovering, setIsHovering] = useState<boolean>(isTouchDevice ? true : false);
	const [index, setIndex] = useState<number>(0);
	
	const { classes, cx } = useStyles({ isMobile, slideIndex: index, isHovering });
	
	const prev = () => {
		setIndex((prev) => {
			if (!media) return 0;

			return prev === 0 ? media.length - 1 : prev - 1;
		},
		);
	};

	const next = useCallback(() => {
		setIndex((prev) => {
			if (!media) return 0;

			return prev === media.length - 1 ? 0 : prev + 1;
		});
	}, [media]);

	useEffect(() => {
		if (isVideo) return;

		const timer = setInterval(() => {
			next();
		}, 5000);

		return () => clearInterval(timer);
	}, [next, isVideo]);
	
	if (!media) {
		return null;
	}

	// Conditionally render either video iframe or regular image based on isVideo prop
	const renderMediaItem = (src: Screenshot | Video, i: number) => {
		if (isVideo) {
			return (
				<iframe
					title={`slide-${i}`}
					className={classes.video}
					src={getYouTubeEmbedUrl(src.url)}
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				/>
			);
		}
	
		return (
			<div
				aria-label={`slide-${i}`}
				className={classes.image}
				style={{ backgroundImage: `url(${src.url})` }}
			/>
		);
	};

	return (
		<Box 
			className={classes.root}
			onMouseEnter={() => {
				if (isTouchDevice) return;
				setIsHovering(true);
			}}
			onMouseLeave={() => {
				if (isTouchDevice) return;
				setIsHovering(false);
			}}
		>
			{/* Media */}
			{media && (
				<Box className={classes.mediaContainer}>
					{media.map((src, i) => (
						<React.Fragment key={src.url}>
							{renderMediaItem(src, i)}
						</React.Fragment>
					))}
				</Box>
			)}
			
			{/* Left button */}
			<IconButton onClick={prev} className={cx(classes.navButton, classes.leftButton)}>
				<ChevronLeft />
			</IconButton>

			{/* Right button */}
			<IconButton onClick={next} className={cx(classes.navButton, classes.rightButton)}>
				<ChevronRight />
			</IconButton>

			{/* Dot image indicators */}
			<Box className={classes.indicators}>
				{media.map((src, i) => (
					<Box
						key={src.url}
						onClick={() => setIndex(i)}
						className={cx(classes.dot, i === index && classes.activeDot)}
					/>
				))}
			</Box>
		</Box>
	);
};

ImageCarousel.displayName = 'ImageCarousel';