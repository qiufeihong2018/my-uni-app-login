<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">账号：</text>
				<MInput class="m-input" type="text" clearable focus v-model="username" placeholder="请输入账号" />
			</view>
			<view class="input-row border">
				<text class="title">密码：</text>
				<MInput class="m-input" type="password" displayable v-model="password" placeholder="请输入密码" />
			</view>
			<view class="input-row border">
				<text class="title">邮箱：</text>
				<MInput class="m-input" type="text" clearable focus v-model="email" placeholder="请输入邮箱" />
			</view>
		</view>
		<view class="btn-row"><button type="primary" class="primary" @tap="handleRegister">注册</button></view>
	</view>
</template>

<script>
import service from '../../service.js';
import MInput from '../../components/m-input.vue';
export default {
	components: {
		MInput
	},
	data() {
		return {
			username: '',
			password: '',
			email: ''
		};
	},
	methods: {
		handleRegister() {
			// 对账号信息校验
			if (this.username.length < 6) {
				uni.showToast({
					title: '用户名最短为6个字符',
					icon: 'none',
					position: 'top',
					duration: 2000
				});
				return;
			}
			if (this.password.length < 12 || this.password.length > 18) {
				uni.showToast({
					icon: 'none',
					title: '密码长度在12-18字符之间',
					position: 'top',
					duration: 2000
				});
				return;
			}
			if (!~this.email.indexOf('@') || this.email.length < 6) {
				uni.showToast({
					icon: 'none',
					title: '邮箱地址不合法'
				});
			}
			const data = {
				username: this.username,
				password: this.password,
				email: this.email
			};
			service.setUser(data);
			uni.showToast({
				title: '注册成功'
			});
			// 回到首页
			uni.navigateBack({
				delta: 1
			});
		}
	}
};
</script>
