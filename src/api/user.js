import request from "@/plugins/request"
export function userLogin (data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}
