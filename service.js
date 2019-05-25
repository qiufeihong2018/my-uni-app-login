const UserKey = 'UserKey'
// 注册——往localstorage中写用户名和密码
function setUser(userinfo) {
	const data = {
		username: userinfo.username,
		password: userinfo.password
	}
	uni.setStorageSync(UserKey, data)
}
// 登录——往localstorage中获取用户名和密码
function getUser() {
	const res = uni.getStorageInfoSync(UserKey)
	if (!res) {
		return []
	}
	return res
}
export default {
	setUser,
	getUser
}
