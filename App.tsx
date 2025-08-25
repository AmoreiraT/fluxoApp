// App.tsx
import Mapbox from '@rnmapbox/maps';
import { QueryClientProvider } from '@tanstack/react-query';
import Constants from "expo-constants";
import { FC } from 'react';
import { queryClient } from './src/core/infrastructure/http/queryClient';
import { AppNavigator } from './src/navigation/AppNavigator';
import { ThemeProvider } from './src/themes/index';
// export { default } from './.rnstorybook';

// LogBox.ignoreAllLogs();

Mapbox.setAccessToken('pk.eyJ1IjoiYW1vcmVpcmF0IiwiYSI6ImNqZ2Q0MTc2ZjAwb3MzMnFrbzhldTB1ZTgifQ.UqlV5FlUH5yC68b_S2j5hg');

export const App: FC = () => {
  return (

    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </QueryClientProvider>

  );
};

let AppEntryPoint = () => <App />;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.rnstorybook").default;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export { AppEntryPoint };

