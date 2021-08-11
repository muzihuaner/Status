// 配置
window.Config = {

  // 站点名
  SiteName: '欢哥の站点监控',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  // ApiDomain: 'api.uptimerobot.com',
  ApiDomain: 'uptimerobot.hgnet.workers.dev',
  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur1057677-4a23cc37dc8ce5c670feb4f2',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '快点搜',
      url: 'https://quickso.cn/'
    },
    {
      text: '博客',
      url: 'https://blog.quickso.cn'
    }
  ]
};
