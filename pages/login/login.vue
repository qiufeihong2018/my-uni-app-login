<template>
	<view class="content">
		<view class="input-group">
			<text class="title">账号：</text>
			<MInput class="m-input" type="text" clearable focus v-model="account" placeholder="请输入账号"/>
					<text class="title">密码：</text>
			<MInput class="m-input" type="password" clearable focus v-model="account" placeholder="请输入密码"/>
			<view class="btn-row">
				<button type="primary" class="primary" @tap="bindLogin">登录</button>
			</view>
			<view class="action-row">
				<navigator url="../reg/reg">注册账号</navigator>
				<text>|</text>
				<navigator url="../pwd/pwd">忘记密码</navigator>
			</view>
			<view class="oauth-image"></view>
		</view>
	</view>
</template>

<script>
	import MInput from '../../components/m-input.vue'
	export default {
		components:{
			MInput
		},
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		height: 400upx;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
