import { defineConfig } from '@umijs/max';

const _baseUrl = 'http://127.0.0.1:33333/'

export default defineConfig({
  history: {type: "hash"},
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  outputPath: "docs",
  // base: "/hook",
  // publicPath: '/static/',
  //  publicPath: '/hook/',

  proxy: {
    '/api': {
      target: 'http://127.0.0.1:8080/',
      changeOrigin: true,
      pathRewrite: { '^/api': 'api' },
    },
    '/operation': {
      target: _baseUrl,
      changeOrigin: true,
      pathRewrite: { '^/operation': 'operation' },
    },
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
        name: ' CRUD 示例',
        path: '/table',
        component: './Table',
    },
    {
      name: "测试",
      path: '/test',
      component: './Test',
    },
    {
      name: "Spline",
      path: '/spline',
      component: './Spline',
    },
    {
      name: "canvas",
      path: '/canvas',
      component: './canvas',
    },
    {
      name: "move",
      path: '/move',
      component: './move',
    },
  ],
  npmClient: 'pnpm',
});

