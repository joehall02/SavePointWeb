import { Button,Typography } from '@mui/material';
import React, { useState } from 'react';

interface ExpandableTextProps {
	text: string | undefined | null;
	limit?: number;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text, limit = 350 }) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	if (!text) return null;

	// If text is short, render it normally without a button
	if (text.length <= limit) {
		return <Typography variant='body1'>{text}</Typography>;
	}

	return (
		<>
			<Typography variant='body1'>
				{isExpanded ? text : `${text.slice(0, limit)}...`}
			</Typography>
			<Button 
				size='small' 
				onClick={() => setIsExpanded(!isExpanded)}
				sx={{ p: 0, bgcolor: 'transparent' }}
				disableFocusRipple
				disableTouchRipple
			>
				{/* TODO: Add a pop up dialog */}
				{isExpanded ? 'Read less' : 'Read more'}
			</Button>
		</>
	);
};

export default ExpandableText;
