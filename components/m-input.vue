<template>
	<view class="m-input-view">
		<input
			:focus="_focus"
			:type="inputType"
			:value="value"
			@input="onInput"
			class="m-input-input"
			:placeholder="placeholder"
			:password="type === 'password' && !showPassword"
			@focus="onFocus"
			@blur="onBlur"
		/>
		<!-- value.length不需要 -->
		<view v-if="_clearable && !_displayable" class="m-input-icon">
			<MIcon color="#666666" type="clear" size="20" @click="clear" ></MIcon>
		</view>
	</view>
</template>
<script>
import MIcon from './m-icon/m-icon.vue';
export default {
	components: {
		MIcon
	},
	props: {
		type: String,
		value: String,
		placeholder: String,
		clearable: {
			type: [Boolean, String],
			default: false
		},
		displayable: {
			type: [Boolean, String],
			default: false
		},
		focus: {
			type: [Boolean, String],
			default: false
		}
	},
	model: {
		prop: 'value',
		event: 'input'
	},
	data() {
		return {
			showPassword: false,
			isFocus: false
		};
	},
	computed: {
		inputType() {
			const type = this.type;
			return type === 'password' ? 'text' : type;
		},
		_clearable() {
			return String(this.clearable) !== 'false';
		},
		_displayable() {
			return String(this.displayable) !== 'false';
		},
		_focus() {
			return String(this.focus) !== 'false';
		}
	},
	methods: {
		clear() {
			this.$emit('input', '');
		},
		onFocus() {
			this.isFocus = true;
		},
		onBlur() {
			this.$nextTick(() => {
				this.isFocus = false;
			});
		},
		onInput(e) {
			this.$emit('input', e.target.value);
		}
	}
};
</script>
<style>
.m-input-view {
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	flex: 1;
	padding: 0 10rpx;
}
.m-input-input {
	flex: 1;
	width: 100%;
}
.m-input-icon {
	width: 20px;
}
</style>
