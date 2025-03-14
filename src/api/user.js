import request from '@/utils/request'
// 用户登录接口
export function loginApi(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
// 获取账号信息接口
export function getUserInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}
// 获取用户列表接口
export function getUserList() {
  return request({
    url: '/user/list',
    method: 'get'
  })
}
// 添加用户接口
export function addUser(data) {
  return request({
    url: '/user/add',
    method: 'post',
    data
  })
}
// 删除用户接口
export function deleteUser(id) {
  return request({
    url: `/user/delete/${id}`,
    method: 'delete'
  })
}
// 修改用户信息接口
export function updateUser(data) {
  return request({
    url: '/user/update',
    method: 'put',
    data
  })
}
