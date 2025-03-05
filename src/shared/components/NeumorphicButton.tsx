// NeumorphicButton.tsx
import { Button } from '@mui/material';
import React from 'react';
import { ThemeContext } from '../../themes/themeProvider';

interface NeumorphicButtonProps {
    title: string;
    onPress: () => void;
}

export const NeumorphicButton: React.FC<NeumorphicButtonProps> = ({ title, onPress }) => {
    const { theme } = React.useContext(ThemeContext);

    return (
        <Button
            variant="contained"
            onClick={onPress}
            sx={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: '12px',
                padding: '12px 24px',
                boxShadow: theme.shadows[1],
                '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                },
                '& .MuiButton-label': {
                    fontWeight: 'bold',
                    color: theme.palette.primary.contrastText,
                },
            }}
        >
            {title}
        </Button>
    );
};