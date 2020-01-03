<template>
	<div>
		<div>
			<form action="/">
				<van-sticky>
					<van-search
						v-model="searchVal"
						placeholder="搜索门店·内容·用户"
						show-action
						shape="round"
						@search="onSearch"
						@cancel="onCancel"
					/>
				</van-sticky>
			</form>
		</div>
		<div class="search" v-if="isSearch">
			<div class="hot_search">
				<p>热搜</p>
				<van-button
					type="primary"
					size="small"
					@click="reSearch"
					v-for="(item, i) of hot"
					:key="i"
				>
					{{ item }}
				</van-button>
			</div>
			<div class="record_search">
				<p>
					搜过
					<span @click="del">
						<img src="../assets/img/index/delete.png" />
					</span>
				</p>
				<van-button
					type="primary"
					size="small"
					v-for="(item, i) of record"
					:key="i"
					>{{ item }}</van-button
				>
			</div>
		</div>
		<div v-else>
			<van-tabs v-model="activeName" sticky :offset-top="62">
				<van-tab title="门店" name="a">
					<search-shop></search-shop>
				</van-tab>
				<van-tab title="内容" name="b">
					<search-detail :posts="posts"></search-detail>
				</van-tab>
				<van-tab title="用户" name="c">
					<search-user :users="users"></search-user>
				</van-tab>
			</van-tabs>
			<div class="container_bottom">
				<span>没有更多了</span>
			</div>
		</div>
	</div>
</template>

<script>
// 引入搜索内容组件
import searchDetail from "../components/search/searchDetail";
// 引入用户组件
import searchUser from "../components/search/searchUser.vue";
// 引入店面组件
import searchShop from "../components/search/searchShop.vue";
export default {
	components: {
		searchDetail, //注册内容组件
		searchUser, //注册用户组件
		searchShop //注册门店组件
	},
	data() {
		return {
			searchVal: "",
			posts: [],
			users: [],
			hot: ["海底捞", "大学生", "跨年"], //热搜
			record: ["海珠广场", "广州", "天河"], //搜索记录
			/**搜索完的页面**/
			activeName: "b", //
			isSearch: true,
			canSearch: true
		};
	},
	methods: {
		reSearch(e) {
			this.searchVal = e.toElement.innerText;
		},
		// 搜索确认事件
		onSearch() {
			this.$api
				.searchPosts({ params: { keyword: this.searchVal.trim() } })
				.then(res => {
					this.posts = res.data.result;
				});

			this.$api
				.searchUser({ params: { keyword: this.searchVal.trim() } })
				.then(res => {
					this.users = res.data.result;
				});
		},
		// 取消按钮事件
		onCancel() {
			this.$router.push("/");
		},
		del() {
			this.record = [];
		}
	},
	watch: {
		searchVal() {
			if (!this.searchVal.trim()) {
				this.isSearch = true;
			} else {
				this.isSearch = false;
			}
		}
	},
	created() {},
	updated() {
		if (this.canSearch) {
			this.canSearch = false;
			this.onSearch();
			setTimeout(() => {
				this.canSearch = true;
			}, 2000);
		}
	}
};
</script>

<style scoped>
/************修改搜索框的样式************/

.van-button--primary {
	color: #000;
	background: #e8e9ea;
	border: 1px solid #e8e9ea;
}

.van-search .van-cell {
	height: 1.2rem;
}

::v-deep .van-field__control {
	height: 17px;
	font-size: 12px;
}

.van-field__left-icon .van-icon {
	line-height: 20px;
}

.van-search__action {
	font-size: 12px;
}

.van-search .van-cell[data-v-7c1f8842] {
	height: 1.7rem;
}

.van-cell {
	line-height: 1.2rem;
}

/**********热搜和搜索历史记录*******/

.search {
	display: flex;
	flex-direction: column;
}

.hot_search,
.record_search {
	background: #fff;
	margin-top: 10px;
	padding: 5px 4%;
}

.hot_search > p,
.record_search > p {
	margin: 5px 0;
	font-size: 10px;
	color: #999;
}

.record_search > p {
	display: flex;
	justify-content: space-between;
}

.record_search > p span img {
	width: 15px;
	height: 15px;
}

.van-button--primary[data-v-7c1f8842] {
	margin-right: 10px;
	margin-top: 5px;
}

.van-button--small {
	font-size: 10px;
}

.container_bottom {
	padding-top: 30px;
	padding-bottom: 30px;
	text-align: center;
	background: #f1f1f1;
}
.container_bottom > span {
	font-size: 8px;
	color: #999;
}
</style>
