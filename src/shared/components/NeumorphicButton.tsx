// NeumorphicButton.tsx
import { FC, useContext } from 'react';
import { Button } from 'react-native-paper';
import { typographyTheme } from '../../themes';
import { ThemeContext } from '../../themes/themeProvider';

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
            theme={theme}
            style={{
                // padding: '12px 24px',
                
                borderRadius: '12px',
                ...typographyTheme.fonts.displayLarge,
                backgroundColor: theme.colors.primary,
                
                // color: theme.colors.onPrimary,
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