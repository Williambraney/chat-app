import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins : [ react() ],
    resolve : {
        alias : {
            components : path.resolve(__dirname, './src/components'),
            blocks : path.resolve(__dirname, './src/blocks'),
            utils : path.resolve(__dirname, './src/utils'),
        },
    },
    server : {
        proxy : {
            '/api' : {
                target : 'http://localhost:3001'
            },
        },
    },
});
