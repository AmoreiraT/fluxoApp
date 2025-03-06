declare global {
    namespace NodeJS {
        interface ProcessEnv {
            EXPO_PUBLIC_API_URL: string;
            EXPO_PUBLIC_MAPBOX_KEY: string;
            EXPO_SECRET_MAPBOX_KEY: string;
        }
    }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { };
