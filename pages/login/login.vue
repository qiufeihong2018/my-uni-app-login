<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">账号：</text>
				<MInput class="m-input" type="text" clearable focus v-model="username" placeholder="请输入账号" />
			</view>
			<view class="input-row">
				<text class="title">密码：</text>
				<MInput class="m-input" type="password" displayable v-model="password" placeholder="请输入密码" />
			</view>
		</view>
		<view class="btn-row"><button type="primary" class="primary" @tap="handleLogin">登录</button></view>
		<view class="action-row">
			<navigator url="../reg/reg">注册账号</navigator>
			<text>|</text>
			<navigator url="../pwd/pwd">忘记密码</navigator>
		</view>
		<view class="oauth-row" v-if="hasProvider" v-bind:style="{ top: positionTop + 'px' }">
			<view class="oauth-image" v-for="provider in providerList" :key="provider.value"><image :src="provider.image" @tap="oauth(provider.value)"></image></view>
		</view>
	</view>
</template>

<script>
import service from '../../service.js';
import { mapState, mapMutations } from 'vuex';
import MInput from '../../components/m-input.vue';
export default {
	components: {
		MInput
	},
	data() {
		return {
			providerList: [],
			hasProvider: false,
			username: '',
			password: '',
			positionTop: 0
		};
	},
	computed: mapState(['forcedLogin']),
	methods: {
		checkAccount() {
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
		},
		async handleLogin() {
			return await this.checkAccount();
			// 对获得的数组进行遍历,有匹配的则返回true
			const isLogin = service.getUser().some(item => {
				return item.username === this.username && item.password === this.password;
			});
			if (isLogin) {
				uni.showToast({
					icon: 'success',
					title: '登陆成功'
				});
			} else {
				uni.showToast({
					icon: 'none',
					title: '登陆失败，请重试'
				});
			}
		}
	}
};
</script>

<style>
.action-row {
	display: flex;
	flex-direction: row;
	justify-content: center;
}
.action-row navigator {
	color: #007aff;
	padding: 0 40px;
}
.oauth-row {
	display: flex;
	flex-direction: row;
	justify-content: center;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
}
</style>
