export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  subPackages: [
    {
      root: 'pages/sub',
      pages: ['second/index'],
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
