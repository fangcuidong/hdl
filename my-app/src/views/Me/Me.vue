<template>
	<div class="me">
		<div class="sm">
			<img src="../../assets/me/my_member_code.png" class="ewm" />
		</div>
		<!-- <div class="user_msg">
      <img src="../assets/me/icon_native_laoxiaomi.png" class="user_img" />
      <van-button round>点击登录/注册</van-button>
    </div>-->
		<me-not-login v-if="bool"></me-not-login>
		<me-login v-else></me-login>

		<span>我的订单</span>
		<van-grid :border="false" :column-num="5">
			<van-grid-item v-for="(order, i) of orders" :key="i">
				<img :src="require(`../../${order.url}`)" />
				<span>{{ order.name }}</span>
			</van-grid-item>
		</van-grid>
		<span>我的动态</span>
		<div class="dt">
			<div class="dt_me" v-for="(dt, i) of dts" :key="i">
				<div class="lf_msg">
					<img :src="require(`../../${dt.url}`)" />
					<span>{{ dt.name }}</span>
				</div>
				<img src="../../assets/me/my_arrow.png" />
			</div>
		</div>
		<span>我的服务</span>
		<div class="dt">
			<div class="dt_me" v-for="(serve, i) of serves" :key="i">
				<div class="lf_msg">
					<img :src="require(`../../${serve.url}`)" />
					<span>{{ serve.name }}</span>
				</div>
				<img src="../../assets/me/my_arrow.png" />
			</div>
		</div>
		<span>关于海底捞</span>
		<div class="dt">
			<div class="dt_me" v-for="(about, i) of abouts" :key="i">
				<div class="lf_msg">
					<img :src="require(`../../${about.url}`)" />
					<span>{{ about.name }}</span>
				</div>
				<img src="../../assets/me/my_arrow.png" />
			</div>
		</div>
		<div class="dt">
			<div class="dt_me" @click="setting">
				<div class="lf_msg">
					<img src="../../assets/me/my_setting.png" />
					<span>设置</span>
				</div>
				<img src="../../assets/me/my_arrow.png" />
			</div>
		</div>
	</div>
</template>
<script>
import MeNotLogin from "../../components/Me/MeNotLogin";
import MeLogin from "../../components/Me/MeLogin";
import { mapState } from "vuex";
export default {
	data() {
		return {
			orders: [
				{ url: "assets/me/stores_row_num.png", name: "排号" },
				{ url: "assets/me/my_reserve_order.png", name: "预订" },
				{ url: "assets/me/my_order_list.png", name: "点餐" },
				{ url: "assets/me/my_deliver_order.png", name: "外卖" },
				{ url: "assets/me/my_exchange_order.png", name: "购物" }
			],
			dts: [
				{ url: "assets/me/my_collect.png", name: "收藏夹" },
				{ url: "assets/me/my_community.png", name: "社区" },
				{ url: "assets/me/my_message.png", name: "消息" }
			],
			serves: [
				{ url: "assets/me/my_help.png", name: "寻求帮助" },
				{ url: "assets/me/my_complained.png", name: "投诉表扬" },
				{ url: "assets/me/my_misslao.png", name: "捞小米" }
			],
			abouts: [
				{ url: "assets/me/my_zhengji.png", name: "海选征集" },
				{ url: "assets/me/my_about.png", name: "关于企业" },
				{ url: "assets/me/my_news.png", name: "公告" }
			]
		};
	},
	methods: {
		setting() {
			this.$router.push("/setting");
		},
		change() {
			this.notLogin = false;
		}
	},
	components: {
		"me-not-login": MeNotLogin,
		"me-login": MeLogin
	},
	computed: {
		...mapState(["bool"])
	}
};
</script>
<style scoped>
.sm {
	position: relative;
	height: 20px;
}
.sm > .ewm {
	position: absolute;
	width: 20px;
	top: 10px;
	right: 10px;
}
.me {
	/* position: relative; */
	text-align: left;
	font-size: 12px;
	background: url("../../assets/me/me_bg.png") no-repeat top center;
	background-size: 100%;
	background-color: #f0f0f0;
}
.me > span {
	display: block;
	margin: 10px 0;
	margin-left: 10px;
}

.van-grid-item .van-grid-item__content img {
	width: 25px;
}
.van-grid {
	font-size: 12px;
}
.van-grid-item span {
	display: block;
	margin-top: 5px;
}

.dt {
	background: #fff;
}
.dt_me {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 0;
	margin-left: 10px;
	/* background: #ddd; */
}
.dt_me + .dt_me {
	border-top: 1px solid #dedede;
}
.lf_msg {
	display: flex;
	align-items: center;
}
.lf_msg > img {
	width: 15px;
}
.lf_msg > span {
	margin-left: 8px;
	font-size: 13px;
}
.dt_me > img {
	width: 12px;
	margin-right: 10px;
}
.me > .dt:last-child {
	margin-top: 10px;
	/* margin-bottom: 20px; */
}
</style>
