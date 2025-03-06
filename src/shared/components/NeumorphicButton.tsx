// NeumorphicButton.tsx
import { FC, useContext } from 'react';
import { Button } from 'react-native-paper';
import { ThemeContext } from '../../themes/themeProvider.tsx';

interface NeumorphicButtonProps {
    title: string;
    onPress: () => void;
}

export const NeumorphicButton: FC<NeumorphicButtonProps> = ({ title, onPress }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <Button
            mode="contained"
            onPress={onPress}
            background={theme.palettes.primary}
            
            style={{
                // padding: '12px 24px',
                
                borderRadius: '12px',
                // boxShadow: theme.shadows[1],
                // '&:hover': {
                //     backgroundColor: theme.palette.primary.dark,
                // },
                // '& .MuiButton-label': {
                //     fontWeight: 'bold',
                //     color: theme.palette.primary.contrastText,
                // },
            }}
        >
            {title}
        </Button>
    );
};