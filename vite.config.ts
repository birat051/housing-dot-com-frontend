import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pluginChecker from 'vite-plugin-checker';
// https://vitejs.dev/config/
export default defineConfig({
    server: {
        fs: {
            cachedChecks: false,
        },
    },
    plugins: [
        react(),
        pluginChecker({
            typescript: true,
            eslint: {
                lintCommand: 'eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0',
            },
        }),
    ],
});
