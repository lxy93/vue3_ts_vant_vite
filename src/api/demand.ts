import request from '@/utils/request'

// 包月预约初始化
export function initData(params:any){
    return request({
        url:'/app/web/appointment/init_data',
        params
    })
}
// 获取包月预约标签
export function getLabel(params:any){
    return request({
        url:'/app/web/appointment/v2/get_label',
        params
    })
}

//包月预约提交
export function saveAppointment(data:any){
    return request({
        url:'/app/web/appointment/v2/ajax_save_appointment',
        method:'post',
        data
    })
}

//包月地址
export function getAddress(params:any){
    return request({
        url:'/app/web/appointment/find_member_address',
        params
    })
}

//包月情况
export function appointmentSuccess(params:any){
    return request({
        url:'/app/web/appointment/get_appointment_success_info',
        params
    })
}

//包月预约成功
export function appointment_success(params:any){
    return request({
        url:'/app/web/appointment/v2/successfull',
        params
    })
}