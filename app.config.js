const config = {
  expo: {
    name: 'fluxoApp',
    slug: 'fluxoApp',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/assets/png/icons/icon.png',
    assetBundlePatterns: ['**/*'],
    userInterfaceStyle: 'light',
    newArchEnabled: true,
    splash: {
      image: './src/assets/png/logoTipo.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'fluxo.ath.app',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/png/icons/icon.png',
        backgroundColor: '#ffffff',
      },
      permissions: [
        'android.permission.ACCESS_COARSE_LOCATION',
        'android.permission.ACCESS_FINE_LOCATION',
        'android.permission.ACCESS_COARSE_LOCATION',
        'android.permission.ACCESS_FINE_LOCATION',
      ],
      package: 'fluxo.ath.app',
    },
    web: {
      favicon: './src/assets/png/icons/icon.png',
    },
    plugins: [
      [
        '@rnmapbox/maps',
        {
          RNMapboxMapsDownloadToken:
            'sk.eyJ1IjoiYW1vcmVpcmF0IiwiYSI6ImNtN3d3YW5jazBhbXoybXBxZTRnb3oxaGMifQ.eqGM04Ut-fd_F6Yp4cFJwg',
          RNMapboxMapsVersion: '10.19.0',
        },
      ],
      [
        'expo-location',
        {
          locationWhenInUsePermission: 'Show current location on map.',
        },
      ],
      [
        'expo-build-properties',
        {
          android: {},
        },
      ],
      ['expo-dev-client', {}],
      ['expo-dev-launcher', {}],
      ['expo-system-ui', {}],
      ['expo-updates', {}],
      ['expo-font', {}],
    ],
    extra: {
      eas: {
        projectId: '2798a9b0-7c3c-4cda-af1c-fff11e4de992',
      },
      storybookEnabled: true,
      apiUrl: '${process.env.EXPO_PUBLIC_API_URL}',
    },
    runtimeVersion: '1.0.0',
    updates: {
      url: 'https://u.expo.dev/2798a9b0-7c3c-4cda-af1c-fff11e4de992',
    },
  },
};

export default config;
