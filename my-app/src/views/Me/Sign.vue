<template>
	<div class="sign">
		<van-nav-bar title="个性签名" left-text="取消" @click-left="onClickLeft" />
		<van-cell-group>
			<van-field
				v-model="message"
				rows="2"
				autosize
				type="textarea"
				placeholder="一句话介绍自己的兴趣爱好"
				show-word-limit
				maxlength="30"
			/>
		</van-cell-group>
		<van-button type="danger" :disabled="show" @click="edit">确认</van-button>
	</div>
</template>
<script>
import { mapState } from "vuex";

export default {
	data() {
		return {
			message: "",
			msg: "",
			show: true
		};
	},
	methods: {
		onClickLeft() {
			if (this.message != this.msg) {
				this.message = this.msg;
			}
			this.$router.go(-1);
		},
		edit() {
			this.$api
				.update({ say: this.message })
				.then(res => {
				})
				.catch(err => {
					console.log(err);
				});
			this.$router.go(-1);
		},
		sign2(val) {
			if (val == "一句话介绍自己的兴趣爱好") {
				val = "";
			} else {
				this.message = val;
				this.msg = val;
			}
		}
	},
	computed: {
		...mapState(["data"])
	},
	watch: {
		message() {
			if (this.message) {
				this.show = false;
			} else {
				this.show = true;
			}
		}
	},
	created() {
		this.bus.$on("sign2", this.sign2);
	},
	beforeDestroy() {
		this.bus.$emit("sign1", this.message);
	}
};
</script>
<style scoped>
.sign {
	text-align: center;
}
.van-button {
	margin-top: 20px;
	width: 90%;
	border-radius: 6px;
}
</style>
