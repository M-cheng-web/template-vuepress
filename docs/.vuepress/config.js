module.exports = {
  title: '个人博客', // 标题
  description: '记录知识,记录生活',
  base: '/blogs/', // github项目名
  theme: 'reco', // 主题
  locales: {
    '/': {
      lang: 'zh-CN' // 时间格式转换 1/1/2022 => 2022/1/1
    }
  },
  themeConfig: {
    subSidebar: 'auto', // 右侧导航
    nav: [ // 导航栏
      { text: '首页', link: '/' },
    ],
    sidebar: [ // 标签页
      {
        title: '关于',
        path: '/',
        collapsable: false, // 不折叠
        children: [
          { title: "介绍", path: "/" },
        ]
      },
      {
        title: "demo1",
        path: '/demo01/core',
      },
      {
        title: "demo2",
        path: '/demo02/core',
      },
    ]
  }
}