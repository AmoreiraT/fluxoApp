// App.tsx
import Mapbox from '@rnmapbox/maps';
import { FC } from 'react';
import { AppNavigator } from './src/navigation/AppNavigator';
import { ThemeProvider } from './src/themes';
Mapbox.setAccessToken('pk.eyJ1IjoiYW1vcmVpcmF0IiwiYSI6ImNqZ2Q0MTc2ZjAwb3MzMnFrbzhldTB1ZTgifQ.UqlV5FlUH5yC68b_S2j5hg');

const App: FC = () => {
  return (
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
  );
};

export default App;