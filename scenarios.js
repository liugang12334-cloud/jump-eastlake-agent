/*
 * 场景演示清单配置
 * 新增方式：复制一条对象，保证 id 唯一，并填写 group/title/prompt/card/description。
 * prompt 会被直接发送给智能体，应包含对应意图的明确关键词。
 */
window.DEMO_SCENARIOS = [
  {id:'activity-info',group:'活动内容',title:'活动基础信息',prompt:'请介绍一下活动信息',card:'活动信息卡',description:'日期、时间、地点、主办方与核心玩法'},
  {id:'activity-highlight',group:'活动内容',title:'活动亮点',prompt:'这次活动有哪些亮点？',card:'亮点图文卡',description:'横向浏览水上、运动、市集与音乐亮点'},
  {id:'activity-schedule',group:'活动内容',title:'活动日程',prompt:'请给我活动日程安排',card:'日程提醒卡',description:'时间轴查看节目并订阅提醒'},
  {id:'route-official',group:'路线与位置',title:'官方推荐路线',prompt:'给我推荐一条官方游玩路线',card:'地图路线卡',description:'进入独立路线页，可自定义或由 Agent 生成'},
  {id:'route-personal',group:'路线与位置',title:'生成个性化路线',prompt:'帮我生成一条半日个性化路线',card:'个性化路线卡',description:'智能体对话生成专属路线，终点统一为楚城，可保存至我的路线'},
  {id:'poi-toilet',group:'路线与位置',title:'POI信息点位查询',prompt:'查询附近的POI信息点位，包括厕所、补水点、售票处、游客中心、码头、游船、电瓶车、便民服务点、医疗点、AED、休息点和充电点',card:'POI 列表卡',description:'集中展示便民、医疗及游览点位的距离、状态、详情与导航'},
  {id:'poi-scenic',group:'路线与位置',title:'周边景点',prompt:'周边有什么景点？',card:'景点 POI 卡',description:'查看景点介绍、距离与步行导航'},
  {id:'poi-merchant',group:'路线与位置',title:'周边商户',prompt:'附近有哪些商户、咖啡和文创？',card:'商户 POI 卡',description:'营业状态、人均消费、排队与导航'},
  {id:'parking',group:'出行服务',title:'附近停车场',prompt:'附近停车场还有多少车位？',card:'停车状态卡',description:'剩余空位、拥挤程度、收费与驾车导航'},
  {id:'return',group:'出行服务',title:'夜间返程',prompt:'晚上活动结束后怎么返程回家？',card:'返程服务卡',description:'游船、电瓶车服务时间与返程规划'},
  {id:'ticket',group:'交易服务',title:'门票购买',prompt:'跳东湖门票怎么买？',card:'票务购买卡',description:'实名购票说明、正式答复和第三方跳转确认'},
  {id:'insurance',group:'交易服务',title:'保险购买',prompt:'参加跳水活动保险怎么买？',card:'保险购买卡',description:'保障要求、风险提示和合作平台入口'},
  {id:'crowd',group:'实时状态',title:'景点人流与舒适度',prompt:'现在各景点人流怎么样，哪里人少？',card:'人流舒适度卡',description:'模拟人数、趋势、排队时间与错峰建议'},
  {id:'weather',group:'实时状态',title:'天气与高温提醒',prompt:'今天活动现场天气怎么样？',card:'天气预警卡',description:'体感温度、防晒补水和雷雨提醒'},
  {id:'safety',group:'安全保障',title:'医疗与紧急求助',prompt:'现场安全保障怎么样，受伤如何求助？',card:'安全应急卡',description:'最近医疗站、AED 与紧急定位求助'},
  {id:'fallback',group:'基础能力',title:'自由问答兜底',prompt:'你都能帮我做什么？',card:'基础文本回答',description:'展示智能体未命中专项意图时的能力说明'}
];
