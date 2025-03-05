// src/core/infrastructure/http/useFocusManager.ts
import { focusManager } from '@tanstack/react-query';
import { useEffect } from 'react';
import { AppState, Platform } from 'react-native';

export const useFocusManager = () => {
    const onAppStateChange = (status: string) => {
        if (Platform.OS !== 'web') {
            focusManager.setFocused(status === 'active');
        }
    };

    useEffect(() => {
        const subscription = AppState.addEventListener('change', onAppStateChange);
        return () => subscription.remove();
    }, []);
};