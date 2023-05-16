/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-05-16 22:47:05
 * @LastEditTime: 2023-05-16 23:36:46
 */
// 开发环境地址
const config: Record<string, string> = {
 childSys: 'http://localhost:5174',
 childBusiness: 'http://localhost:5175'
}

// 线上环境地址
if (process.env.NODE_ENV === 'production') {
  // 基座应用和子应用部署在同一个域名下，这里使用location.origin进行补全
  Object.keys(config).forEach((key) => {
    config[key] = window.location.origin
  })
}
  
export default config