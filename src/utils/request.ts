import axios,{ AxiosResponse,AxiosRequestConfig } from "axios";
import { Toast } from 'vant'
import store from '@/store/index'
import { useCommonStore } from "@/store/module/common";
import { getQueryString } from '@/utils/index'
let commonStore = useCommonStore(store)
// // 创建一个axios实例
const service = axios.create({
    baseURL: '/customer_api',//设置axios请求的基础路径
    timeout: 50000,//定义5秒超时
  
})

// // 请求拦截器
service.interceptors.request.use(
    (config:AxiosRequestConfig<any>) => {
      if(!commonStore.wx_token){
        commonStore.wx_token = getQueryString('wx_token')!
      }
      config.headers!.Authorization = commonStore.wx_token
      return config
    },
    (error:any) => {
        return error
    }
  )
  service.interceptors.response.use(
    (response:AxiosResponse<any>) =>{
      if(response.status === 200){
        if(response.data.code===99991){
          //token过去，重新登录
          Toast({
            message:response.data.msg,
            duration:3000,
            forbidClick:true,
            onClose:()=>{
              window.App.toAppLogin();
            }
          });
          return Promise.resolve(response.data)
        }else{
          return Promise.resolve(response.data)
        }
      }else{
        return Promise.reject(response.data)
      }
    },
    (error:any) => {
      if(error.response){
        return Promise.reject(error)
      }
    }
    
  );
  
  // // 导出axios实例
  export default service