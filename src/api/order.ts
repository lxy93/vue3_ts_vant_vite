import request from '../utils/request'

// 订单列表筛选初始化
export function getOrderSearch(params?:any) {
    return request({
        url: '/app/web/v2/coupon/list',
        params
    })
}