import { defineConfig, type PluginOption } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { autoComplete, Plugin as importToCDN } from 'vite-plugin-cdn-import'
import removeConsole from 'vite-plugin-remove-console'
export default defineConfig({
    plugins: [
        react(),
        removeConsole(),
        importToCDN({
            modules: [autoComplete('react'), autoComplete('react-dom')],
        }),
        visualizer({
            open: false, // 打包后自动打开页面
            gzipSize: true, // 查看 gzip 压缩大小
            brotliSize: true, // 查看 brotli 压缩大小
        }) as PluginOption,
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
})
