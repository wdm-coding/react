const BASE_KEY = 'REACT_APP_'
export const StorageKeys = {
	token: BASE_KEY + '_TOKEN', // token
	userInfo: BASE_KEY + '_USER_INFO', // 用户信息
}
// 1.sessionStorage存储
export function setItem (key, data) {
	if (typeof data === 'object') {
		return sessionStorage.setItem(StorageKeys[key], JSON.stringify(data))
	} else {
		return sessionStorage.setItem(StorageKeys[key], data)
	}
}
// 2.sessionStorage获取
export function getItem (key) {
	try {
		return JSON.parse(sessionStorage.getItem(StorageKeys[key]))
	} catch (error) {
		return sessionStorage.getItem(StorageKeys[key])
	}
}
// 3.sessionStorage移除
export function removeItem (key) {
	return sessionStorage.removeItem(StorageKeys[key])
}
// 清楚缓存
export function clearCache () {
	Object.keys(StorageKeys).forEach(key => {
		sessionStorage.removeItem(StorageKeys[key])
	})
}