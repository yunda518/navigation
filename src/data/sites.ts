import type { CategorySlug } from "./categories";

export interface Site {
  id: string;
  name: string;
  url: string;
  description: string;
  category: CategorySlug;
  featured?: boolean;
  hot?: boolean;
  emoji?: string;
}

export const sites: Site[] = [
  // 政务服务
  {
    id: "gov-hainan",
    name: "海南省人民政府",
    url: "https://www.hainan.gov.cn",
    description: "海南省人民政府官方门户网站,政策公告、政务公开、省长信箱。",
    category: "government",
    featured: true,
    hot: true,
    emoji: "🏛️",
  },
  {
    id: "gov-service",
    name: "海南省政府服务网",
    url: "https://wssp.hainan.gov.cn/hnwt/home",
    description: "海南省一网通办在线政务服务平台,提供在线办事服务。",
    category: "government",
    featured: true,
    emoji: "📋",
  },
  {
    id: "gov-ga",
    name: "海南省公安厅",
    url: "https://ga.hainan.gov.cn",
    description: "海南省公安厅官网,出入境、户政、交通管理等服务。",
    category: "government",
    emoji: "🚔",
  },
  {
    id: "gov-tax",
    name: "海南省税务局",
    url: "https://hainan.chinatax.gov.cn",
    description: "国家税务总局海南省税务局,纳税服务与税收政策查询。",
    category: "government",
    emoji: "💴",
  },
  {
    id: "gov-edu",
    name: "海南省教育厅",
    url: "https://edu.hainan.gov.cn",
    description: "海南省教育主管部门,教育资讯、招生考试信息。",
    category: "government",
    emoji: "🎓",
  },
  {
    id: "gov-tourism",
    name: "海南省旅游和文化广电体育厅",
    url: "http://lwt.hainan.gov.cn",
    description: "海南旅游、文化、广电、体育主管部门官方信息。",
    category: "government",
    featured: true,
    emoji: "🏖️",
  },
  {
    id: "gov-haikou",
    name: "海口市人民政府",
    url: "https://www.haikou.gov.cn",
    description: "海口市人民政府官方网站。",
    category: "government",
    emoji: "🏙️",
  },
  {
    id: "gov-sanya",
    name: "三亚市人民政府",
    url: "https://www.sanya.gov.cn",
    description: "三亚市人民政府官方网站。",
    category: "government",
    emoji: "🌴",
  },
  {
    id: "gov-market",
    name: "海南省市场监督管理局",
    url: "https://amr.hainan.gov.cn",
    description: "企业登记、知识产权、食品药品监管。",
    category: "government",
    emoji: "🏪",
  },

  // 旅游景区
  {
    id: "tour-fenjiezhou",
    name: "分界洲岛旅游区",
    url: "https://www.hnfjz.com",
    description: "国家5A级景区,海南热带海岛型旅游景区,潜水与海上娱乐胜地。",
    category: "tourism",
    featured: true,
    emoji: "🏝️",
  },
  {
    id: "tour-wuzhizhou",
    name: "蜈支洲岛旅游区",
    url: "http://www.wuzhizhou.com",
    description: "三亚蜈支洲岛 —— 中国最美海岛之一,潜水度假胜地。",
    category: "tourism",
    featured: true,
    emoji: "🌊",
  },
  {
    id: "tour-tianya",
    name: "天涯海角游览区",
    url: "https://www.aitianya.cn",
    description: "国家5A级景区,天涯文化摩崖石刻,三亚标志性旅游胜地。",
    category: "tourism",
    featured: true,
    emoji: "🪨",
  },
  {
    id: "tour-nanshan",
    name: "南山文化旅游区",
    url: "http://www.nanshan.com",
    description: "三亚南山佛教文化苑,108米海上观音圣像。",
    category: "tourism",
    featured: true,
    emoji: "🙏",
  },
  {
    id: "tour-yanoda",
    name: "呀诺达雨林景区",
    url: "http://www.yanoda.com",
    description: "保亭呀诺达热带雨林文化旅游区。",
    category: "tourism",
    emoji: "🌿",
  },
  {
    id: "tour-daxiao-dongtian",
    name: "大小洞天旅游区",
    url: "http://www.sanyapark.com",
    description: "国家5A级景区,海南历史最悠久的风景名胜,道家文化旅游胜地。",
    category: "tourism",
    emoji: "⛰️",
  },
  {
    id: "tour-binglanggu",
    name: "槟榔谷黎苗文化旅游区",
    url: "http://www.binglanggu.com",
    description: "国家5A级景区,海南黎苗文化活化石,非遗体验与实景演出。",
    category: "tourism",
    hot: true,
    emoji: "🌴",
  },
  {
    id: "tour-tongguling",
    name: "铜鼓岭景区",
    url: "http://www.tongguling.com",
    description: "琼东第一峰,文昌航天发射观赏地,聚山、海、林、石、滩八大自然资源。",
    category: "tourism",
    emoji: "⛰️",
  },

  // 新闻媒体
  {
    id: "news-hnrb",
    name: "海南日报",
    url: "https://hndaily.cn",
    description: "海南日报报业集团官方新闻门户,海南省委机关报。",
    category: "news",
    featured: true,
    hot: true,
    emoji: "📰",
  },
  {
    id: "news-hinews",
    name: "南海网",
    url: "http://www.hinews.cn",
    description: "海南重点新闻网站,南海、海南本地资讯。",
    category: "news",
    featured: true,
    emoji: "🌊",
  },
  {
    id: "news-hnbtv",
    name: "海南广播电视总台",
    url: "http://www.hnntv.cn",
    description: "海南广播电视台官方网站,在线直播与节目。",
    category: "news",
    emoji: "📺",
  },
  {
    id: "news-travel-daily",
    name: "国际旅游岛商报",
    url: "https://www.hndnews.com",
    description: "国际旅游岛商报旗下椰网,海南财经都市新闻门户。",
    category: "news",
    emoji: "🏖️",
  },
  {
    id: "news-sanya-morning",
    name: "三亚日报",
    url: "https://www.sanyarb.com.cn",
    description: "三亚日报官方新闻门户,三亚传媒影视集团旗下网站。",
    category: "news",
    emoji: "🌅",
  },

  // 教育文化
  {
    id: "edu-hainanu",
    name: "海南大学",
    url: "https://www.hainanu.edu.cn",
    description: "国家双一流建设高校,海南省综合性重点大学。",
    category: "education",
    featured: true,
    hot: true,
    emoji: "🏛️",
  },
  {
    id: "edu-hainnu",
    name: "海南师范大学",
    url: "https://www.hainnu.edu.cn",
    description: "海南师范大学 —— 教师教育与基础教育重要基地。",
    category: "education",
    featured: true,
    emoji: "📚",
  },
  {
    id: "edu-hainmc",
    name: "海南医学院",
    url: "https://www.hainmc.edu.cn",
    description: "海南医学院 —— 海南省医学教育与科研核心机构。",
    category: "education",
    emoji: "⚕️",
  },
  {
    id: "edu-sanyau",
    name: "三亚学院",
    url: "https://www.sanyau.edu.cn",
    description: "三亚学院 —— 民办本科院校,地处三亚。",
    category: "education",
    emoji: "🎓",
  },
  {
    id: "edu-hntou",
    name: "海南热带海洋学院",
    url: "https://www.hntou.edu.cn",
    description: "海南热带海洋学院 —— 热带海洋、生态与旅游特色高校。",
    category: "education",
    emoji: "🐠",
  },
  {
    id: "edu-hnve",
    name: "海南职业技术学院",
    url: "https://www.hcvt.cn",
    description: "海南职业技术学院 —— 国家示范性高职院校,高职高专院校。",
    category: "education",
    emoji: "🔧",
  },

  // 交通出行
  {
    id: "trans-hnair",
    name: "海南航空",
    url: "https://www.hnair.com",
    description: "海南航空官方网站,机票预订、航班查询。",
    category: "transport",
    featured: true,
    hot: true,
    emoji: "✈️",
  },
  {
    id: "trans-haikou-airport",
    name: "海口美兰国际机场",
    url: "https://www.mlairport.com",
    description: "海口美兰国际机场 —— 海南航空枢纽之一。",
    category: "transport",
    featured: true,
    emoji: "🛬",
  },
  {
    id: "trans-sanya-airport",
    name: "三亚凤凰国际机场",
    url: "https://www.sanyaairport.com",
    description: "三亚凤凰国际机场 —— 海南南部航空枢纽。",
    category: "transport",
    featured: true,
    emoji: "🛫",
  },
  {
    id: "trans-rail",
    name: "海南环岛高铁",
    url: "https://www.12306.cn",
    description: "12306 中国铁路 —— 海南环岛高铁车票预订。",
    category: "transport",
    emoji: "🚄",
  },
  {
    id: "trans-jiaotong",
    name: "海南省交通运输厅",
    url: "https://jt.hainan.gov.cn",
    description: "海南省交通运输厅官方网站,交通政策与出行信息。",
    category: "transport",
    emoji: "🚌",
  },
  {
    id: "trans-port",
    name: "海南港航 / 秀英港",
    url: "https://www.hnport.com",
    description: "海南港航控股,港口、轮渡、货运信息。",
    category: "transport",
    emoji: "⛴️",
  },

  // 商业企业
  {
    id: "biz-hnagroup",
    name: "海航集团",
    url: "https://www.hnagroup.com",
    description: "海航集团 —— 航空、物流、旅游综合企业集团。",
    category: "business",
    featured: true,
    emoji: "🏢",
  },
  {
    id: "biz-yeshu",
    name: "椰树集团",
    url: "http://www.yeshu.com",
    description: "椰树集团 —— 椰汁、热带水果饮料知名品牌。",
    category: "business",
    featured: true,
    hot: true,
    emoji: "🥥",
  },
  {
    id: "biz-nongken",
    name: "海南农垦",
    url: "https://www.hnfarms.com.cn",
    description: "海南省农垦投资控股集团——天然橡胶、热带农业、南繁育种产业。",
    category: "business",
    emoji: "🌴",
  },
  {
    id: "biz-hnkg",
    name: "海南控股",
    url: "https://www.hnhold.cn",
    description: "海南省发展控股有限公司 —— 省属国有投资平台。",
    category: "business",
    emoji: "🏗️",
  },
  {
    id: "biz-hnxc",
    name: "海南乡村振兴 / 农业农村厅",
    url: "https://agri.hainan.gov.cn",
    description: "海南省农业农村厅,热带农业、乡村振兴资讯。",
    category: "business",
    emoji: "🌾",
  },
  {
    id: "biz-luhai",
    name: "海南高速",
    url: "https://www.hi-expressway.com",
    description: "海南高速公路股份有限公司(000886) —— 海南交通基础设施上市企业。",
    category: "business",
    emoji: "🛣️",
  },

  // 生活服务
  {
    id: "life-weather",
    name: "海南天气预报",
    url: "https://www.weather.com.cn/weather/101310101.shtml",
    description: "中国天气网 —— 海南省城市天气预报。",
    category: "life",
    featured: true,
    hot: true,
    emoji: "⛅",
  },
  {
    id: "life-hospital",
    name: "海南省人民医院",
    url: "https://www.phhp.com.cn",
    description: "海南省人民医院 —— 挂号预约、就医指南。",
    category: "life",
    featured: true,
    emoji: "🏥",
  },
  {
    id: "life-haikou-bus",
    name: "海口公交",
    url: "http://jtj.haikou.gov.cn",
    description: "海口市交通运输和港航管理局,公交线路、出行服务与交通信息。",
    category: "life",
    emoji: "🚍",
  },
  {
    id: "life-sanya-bus",
    name: "三亚公交",
    url: "http://jt.sanya.gov.cn",
    description: "三亚市交通运输局,公交线路、出行服务与交通信息。",
    category: "life",
    emoji: "🚌",
  },
  {
    id: "life-library",
    name: "海南省图书馆",
    url: "https://www.hilib.com",
    description: "海南省图书馆 —— 馆藏、阅读活动、数字资源。",
    category: "life",
    featured: true,
    emoji: "📖",
  },
  {
    id: "life-zhengxin",
    name: "征信中心",
    url: "https://ipcrs.pbccrc.org.cn",
    description: "中国人民银行征信中心互联网个人信用信息服务平台。",
    category: "life",
    emoji: "🔖",
  },

  // ===== 物流快递 =====
  {
    id: "log-sf",
    name: "顺丰速运",
    url: "https://www.sf-express.com",
    description: "海南顺丰速运有限公司——时效快递、冷链、医药配送服务。",
    category: "logistics",
    featured: true,
    hot: true,
    emoji: "📦",
  },
  {
    id: "log-zto",
    name: "中通快递",
    url: "https://www.zto.com",
    description: "中通快运——覆盖全国的快递、快运、冷链、国际物流服务。",
    category: "logistics",
    featured: true,
    emoji: "🚚",
  },
  {
    id: "log-yto",
    name: "圆通速递",
    url: "https://www.yto.net.cn",
    description: "圆通速递——国内国际快递、仓配一体、供应链解决方案。",
    category: "logistics",
    featured: true,
    emoji: "✈️",
  },
  {
    id: "log-yunda",
    name: "韵达快递",
    url: "https://www.yundaex.com",
    description: "韵达速递——快递、快运、仓储、同城配送综合物流服务。",
    category: "logistics",
    emoji: "🛵",
  },
  {
    id: "log-sto",
    name: "申通快递",
    url: "https://www.sto.cn",
    description: "申通快递——国内国际快递服务、签收预警、智能客服。",
    category: "logistics",
    emoji: "📮",
  },
  {
    id: "log-deppon",
    name: "德邦快递",
    url: "https://www.deppon.com",
    description: "德邦快递——大件快递、零担物流、仓储运输服务，覆盖海南全岛。",
    category: "logistics",
    emoji: "🏗️",
  },
  {
    id: "log-jd",
    name: "京东物流",
    url: "https://www.jdwl.com",
    description: "京东物流——仓储配送一体、冷链、跨境物流，服务海南自贸港。",
    category: "logistics",
    hot: true,
    emoji: "📱",
  },
  {
    id: "log-chinapost",
    name: "中国邮政EMS",
    url: "https://www.ems.com.cn",
    description: "中国邮政EMS——国内国际特快专递、EMS跨境寄递服务。",
    category: "logistics",
    emoji: "🏤",
  },
];

// -------- helpers --------
export const sitesByCategory = (category: CategorySlug): Site[] =>
  sites.filter((s) => s.category === category);

export const featuredByCategory = (category: CategorySlug, limit = 6): Site[] =>
  sitesByCategory(category)
    .sort((a, b) => Number(!!b.featured) - Number(!!a.featured))
    .slice(0, limit);

export const hotSites = (limit = 8): Site[] =>
  sites.filter((s) => s.hot).slice(0, limit);

export interface SearchResult extends Site {
  matchCategory?: string;
}

export const searchSites = (keyword: string): SearchResult[] => {
  const q = keyword.trim().toLowerCase();
  if (!q) return [];
  return sites.filter((s) => {
    return (
      s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.url.toLowerCase().includes(q) ||
      s.category.includes(q)
    );
  });
};
