### 环境安装
```javascript
node: v16.14.2
npm: 8.5.0
yarn: 1.22.19
```
### 创建项目
```javascript
npm init vite
// 安装依赖
npm i react-redux react-router-dom redux -S
// 清除默认的样式
npm i reset-css // 在main中引用 import "reset-css"
// 安装Sass 在 vite 中不需要自己去配置 loader 安装完成就可用
// src 下新建 assets/styles/global.scss
npm i --save-dev sass
```
### 路径别名配置
```javascript
// vite.config.js
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
})

```
#### 配置路径别名的提示 tsconfig.json
```javascript
{
  "compilerOptions": {
    "baseUrl": "./",
      "paths":{
        "@/*": [
          "src/*"
        ]
    }
  }
```