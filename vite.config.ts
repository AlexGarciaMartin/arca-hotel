import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import config from './site.config.json';
export default defineConfig({base:config.basePath,plugins:[react()],build:{target:'es2022'}});
