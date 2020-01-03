<template>
    <div>
        <div>
            <van-sticky :offset-top="100">
                <van-dropdown-menu>
                    <van-dropdown-item v-model="value" :options="option" />
                    <van-search placeholder="请输入自提门店" v-model="search_val" />
                </van-dropdown-menu>
            </van-sticky>
            <div class="store" v-for="(item,i) of shopName" :key="i">
                <img :src="require('../../../'+item.logo)" alt="">
                <div class="store_trade">
                    <span class="title">{{item.name}}</span>
                    <div class="business">
                        <div class="business_left">
                            <van-button type="info" size="mini" round>{{item.business}}</van-button>
                            <span class="site">{{item.site}}</span>
                        </div>
                        <span class="site distance">&ge;{{item.distance}}km</span>
                    </div>
                </div>
            </div>
            <button class="loadMore" @click="loadMore">显示更多门店</button>
        </div>
        <div></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: 0,
                search_val: '',
                option: [
                    { text: '附近门店', value: 0 }
                ],
                shopName: [
                    { logo: 'src/assets/img/index/su_comment_logo.png', name: '海底捞火锅外送（彭城路店）', business: '营业中', site: '西村/西昌', distance: '4' },
                    { logo: 'src/assets/img/index/su_comment_logo.png', name: '海底捞火锅外送（江南西店）', business: '营业中', site: '海珠区', distance: '5' },
                    { logo: 'src/assets/img/index/su_comment_logo.png', name: '海底捞火锅外送（昌岗店）', business: '未营业', site: '海珠区', distance: '4' },
                    { logo: 'src/assets/img/index/su_comment_logo.png', name: '海底捞火锅外送（北京路店）', business: '营业中', site: '西村/西昌', distance: '3' },

                ],
            }
        },
        methods: {
            loadMore() {

            }
        }
    }
</script>

<style scoped>
    .van-dropdown-menu {
        /* margin-top: 10px; */
        height: 2.625rem;
    }

    .van-search .van-cell {
        padding: 0.0125rem 0.5rem 0.1125rem 0;
    }


    .store {
        display: flex;
        flex-direction: row;
        background: #fff;
        padding: 8px;
        align-items: center;
        border-bottom: .5px solid #f1f1f1;
    }

    .store_trade {
        width: 80%;
        display: flex;
        flex-direction: column;
        margin-left: 15px;
    }

    .business {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 3px;
    }

    img {
        width: 30px;
        height: 30px;
    }

    .title {
        font-size: 12px;
    }

    .site {
        font-size: 10px;
        color: #999;
        margin-left: 10px;
    }

    .van-button--mini {
        height: 16px;
        line-height: 15px;
        min-width: 40px;
    }

    .van-search__content {
        background: #ddd;
        border-radius: 5px;
    }

    .loadMore {
        border: none;
        outline: none;
        background: transparent;
        color: #1377dc;
        font-size: 12px;
        display: block;
        margin: 10px auto;
    }
</style>