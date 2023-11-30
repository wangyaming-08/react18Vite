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

### [打包配置](https://zhuanlan.zhihu.com/p/649405923#:~:text=%E4%B8%80%E3%80%81%E6%89%93%E5%8C%85%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%201%201.%20html%E5%A4%84%E7%90%86%20vite-plugin-html%20%E6%98%AF%E4%B8%80%E4%B8%AA%20Vite%20%E6%8F%92%E4%BB%B6%EF%BC%8C%E7%94%A8%E4%BA%8E%E5%B0%86%E4%BC%A0%E7%BB%9F,5%205.%20%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E7%A7%BB%E9%99%A4console%20...%206%206.%20%E4%BE%9D%E8%B5%96%E5%88%86%E6%9E%90%20)
