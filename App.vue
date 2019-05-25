<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/*每个页面公共css */
body,
page {
	min-height: 100%;
	display: flex;
}
page {
	width: 100%;
	height: 100%;
	display: block;
}
swan-template {
	width: 100%;
	min-height: 100%;
	display: flex;
}
m-input {
	width: 100%;
	min-height: 100%;
	display: flex;
}
.content {
	display: flex;
	flex: 1;
	flex-direction: column;
	background-color: #efeff4;
	padding: 20upx;
}
.input-group {
	background-color: #ffffff;
	margin-top: 40upx;
	position: relative;
}
.input-group::before {
	position: absolute;
	right: 0;
	top: 0;
	left: 0;
	height: 1upx;
	content: '';
	-webkit-transform: scaleY(0.5);
	background-color: #c8c7cc;
}
.input-group::after {
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	height: 1upx;
	content: '';
	-webkit-transform: scaleY(0.5);
	/* 	transform: scale(0.5) 或者 transform: scale(0.5, 2);
		一个参数时：表示水平和垂直同时缩放该倍率
两个参数时：第一个参数指定水平方向的缩放倍率，第二个参数指定垂直方向的缩放倍率。
	 */
	transform: scaleY(0.5);
	background-color: #c8c7cc;
}
.input-row{
	display: flex;
	flex-direction: row;
	position: relative;
}
/* 默认尺寸单位， upx 是相对于基准宽度的单位，可以根据屏幕宽度进行自适应。uni-app 规定屏幕基准宽度750upx。 */
.input-row .title{
	width: 20%;
	height: 50upx;
	min-height: 50upx;
	padding: 15upx 10upx;
	line-height: 50upx;
}
.input-row.border::after{
	position: absolute;
	right: 0;
	bottom: 0;
	left: 15upx;
	height: 1upx;
	content: '';
	-webkit-transform:scaleY(-5);
	transform: scaleY(.5);
	background-color: #C8C7CC;
}
.btn-row{
	margin-top: 50upx;
	padding: 30upx;
}
button.primary{
	background-color: #0faeff;
}
</style>
