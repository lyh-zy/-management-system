/* 
包含应用中所有请求接口的函数: 接口请求函数
函数的返回值都是promise对象
*/
import jsonp from 'jsonp'  // axios不能发jsonp请求
import ajax from './ajax'
import { message } from 'antd';

// const BASE = 'http://localhost:5000'
const BASE = ''

// 请求登陆
export const reqLogin = (username, password) => ajax.post(BASE + '/login', { username, password })

// 发送jsonp请求得到天气信息
export const reqWeather = (city) => {

  // 执行器函数: 内部去执行异步任务, 
  // 成功了调用resolve(), 失败了不调用reject(), 直接提示错误
  return new Promise((resolve, reject) => {
    const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    jsonp(url, {}, (error, data) => {
      if (!error && data.error === 0) { // 成功的
        const { dayPictureUrl, weather } = data.results[0].weather_data[0]
        resolve({ dayPictureUrl, weather })
      } else { // 失败的
        message.error('获取天气信息失败')
      }

    })
  })

}

// const persons/personList/personArr = [{}, {}]

// 获取分类列表
// export const reqCategorys = () => ajax.get(BASE + '/manage/category/list')
/* export const reqCategorys = () => ajax({
  // method: 'GET',
  url: BASE + '/manage/category/list'
}) */
export const reqCategorys = () => ajax(BASE + '/manage/category/list')

// 添加分类
export const reqAddCategory = (categoryName) => ajax.post(BASE + '/manage/category/add', {
  categoryName
})

// 修改分类
export const reqUpdateCategory = ({ categoryId, categoryName }) => ajax.post(BASE + '/manage/category/update', {
  categoryId,
  categoryName
})

/* 获取商品分页列表 */
export const reqProducts = (pageNum, pageSize) => ajax(BASE + '/manage/product/list', {
  params: { // 包含所有query参数的对象
    pageNum,
    pageSize
  }
})