// App.tsx
import Mapbox from '@rnmapbox/maps';
import { QueryClientProvider } from '@tanstack/react-query';
import { FC } from 'react';
import { queryClient } from './src/core/infrastructure/http/queryClient';
import { AppNavigator } from './src/navigation/AppNavigator';
import { ThemeProvider } from './src/themes';
Mapbox.setAccessToken('pk.eyJ1IjoiYW1vcmVpcmF0IiwiYSI6ImNqZ2Q0MTc2ZjAwb3MzMnFrbzhldTB1ZTgifQ.UqlV5FlUH5yC68b_S2j5hg');

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;