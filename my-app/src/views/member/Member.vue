<template>
	<div class="member">
		<van-sticky :offset-top="0">
			<div class="mheader">
				<van-nav-bar
					title="会员"
					right-text="帮助"
					@click-right="onClickRight"
				/>
			</div>
		</van-sticky>
		<m-vip v-if="bool" @getb="getz"></m-vip>
		<login-vip v-else></login-vip>
		<van-grid :border="false" :column-num="4" v-if="bool">
			<van-grid-item v-for="(item, i) of grid" :key="i" @click="getI(i)">
				<grid :src="require(`../../../${item.url}`)"></grid>
				{{ item.name }}
			</van-grid-item>
		</van-grid>
		<van-grid :border="false" :column-num="4" v-else>
			<van-grid-item v-for="(item, i) of nogrid" :key="i" @click="getI(i)">
				<grid :src="require(`../../../${item.url}`)"></grid>
				{{ item.name }}
			</van-grid-item>
		</van-grid>

		<van-swipe :autoplay="3000" :show-indicators="swipeBool">
			<van-swipe-item v-for="(item, i) of swipe" :key="i">
				<swipe :src="`${serverBaseURL}${item.img_url}`"></swipe>
			</van-swipe-item>
		</van-swipe>
		<exchange v-if="bool"></exchange>
		<div v-else>
			<growth></growth>
			<conversion></conversion>
		</div>
		<cell></cell>
	</div>
</template>
<script>
import Grid from "../../components/member/Grid.vue";

import Mvip from "../../components/member/Mvip.vue";
//引入轮播图
import Swipe from "../../components/member/Swipe.vue";
import Exchange from "../../components/member/Exchange.vue";
import Cell from "../../components/member/Cell.vue";
import Loginvip from "../../components/member/Loginvip.vue";
//引入成长值
import Growth from "../../components/member/Growth.vue";
import Conversion from "../../components/member/Conversion.vue";

import { mapState } from "vuex";

export default {
	data() {
		return {
			grid: [
				{ url: "public/img/vipGrid1.png", name: "捞币换货", uid: 1 },
				{ url: "public/img/vipGrid2.png", name: "生日赠礼", uid: 2 },
				{ url: "public/img/vipGrid3.png", name: "升级礼遇", uid: 3 },
				{ url: "public/img/vipGrid4.png", name: "线下活动", uid: 4 },
				{ url: "public/img/vipGrid5.png", name: "VIP专享", uid: 5 },
				{ url: "public/img/vipGrid6.png", name: "包间会议", uid: 6 },
				{ url: "public/img/vipGrid7.png", name: "黑海通道", uid: 7 },
				{ url: "public/img/vipGrid8.png", name: "期待更多", uid: 8 }
			],
			nogrid: [
				{ url: "public/img/vipGrid1.png", name: "捞币换货", uid: 1 },
				{ url: "public/img/vipGrid2.png", name: "生日赠礼", uid: 2 },
				{ url: "public/img/upgrade_unlock.png", name: "升级礼遇", uid: 3 },
				{ url: "public/img/activity_unlock.png", name: "线下活动", uid: 4 },
				{ url: "public/img/vip_unlock.png", name: "VIP专享", uid: 5 },
				{ url: "public/img/privat_room_unlock.png", name: "包间会议", uid: 6 },
				{ url: "public/img/channel_unlock.png", name: "黑海通道", uid: 7 },
				{ url: "public/img/vipGrid8.png", name: "期待更多", uid: 8 }
			],
			swipe: [],
			swipeBool: false,
			idx: 0
		};
	},
	computed: {
		...mapState(["bool", "serverBaseURL"])
	},

	components: {
		grid: Grid,
		"m-vip": Mvip,
		swipe: Swipe,
		exchange: Exchange,
		cell: Cell,
		"login-vip": Loginvip,
		growth: Growth,
		conversion: Conversion
	},
	methods: {
		getI(i) {
			this.idx = i;
			if (i < 7) {
				this.$router.push("/cradswipe");
			}
		},
		getz(data) {
			this.bool = data;
		},
		onClickRight() {
			// Toast("按钮");
		},
		change() {
			return $store.getters.getlogin;
		}
	},
	created() {
		this.$api.vipCarousel().then(res => {
			this.swipe = res.data.result;
		});
	},
	beforeDestroy: function() {
		this.bus.$emit("getI", this.idx);
	}
};
</script>
<style lang="scss" scoped>
.van-nav-bar {
	top: 0px;
	height: 44px;
}
.van-nav-bar {
	margin-top: -2px;
}
::v-deep {
	.van-nav-bar__title {
		font-weight: bold;
	}
}
.member {
	padding-bottom: 15px;
	background: #f1f1f1;
}

::v-deep {
	.van-grid-item {
		font-size: 10px;
	}
	.van-nav-bar__text {
		color: #000;
	}
}
</style>
