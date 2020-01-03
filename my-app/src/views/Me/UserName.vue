<template>
	<div class="userName">
		<van-nav-bar title="修改真实姓名" left-text="取消" @click-left="cancel" />
		<van-cell-group>
			<van-field v-model="value" placeholder="请输入真实姓名" />
		</van-cell-group>
		<van-button type="danger" @click="realName">确定</van-button>
	</div>
</template>
<script>
import { mapState } from "vuex";
export default {
	data() {
		return {
			value: "",
			oldName: ""
		};
	},
	computed: {
		...mapState(["data"])
	},
	methods: {
		cancel() {
			if (this.oldName != this.value) {
				this.value = this.oldName;
			}
			this.$router.go(-1);
		},
		realName() {
			this.$api
				.update({ real_name: this.value })
				.then(res => {})
				.catch(err => {
					console.log(err);
				});
			this.$router.go(-1);
		},
		Name(n) {
			if (n == "请填写") {
				this.value = "";
			} else {
				this.value = n;
				this.oldName = n;
			}
		}
	},
	beforeDestroy() {
		this.bus.$emit("realName", this.value);
	},
	created() {
		this.bus.$on("Name", this.Name);
	}
};
</script>
<style scoped lang="scss">
.userName {
	text-align: center;
}
.van-nav-bar__text {
	color: #323233;
}
.van-nav-bar__title {
	font-size: 15px;
}
.van-button {
	margin-top: 50px;
	width: 90%;
	border-radius: 8px;
}
</style>
