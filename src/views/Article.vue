<template>
    <div class="">
        <div class="article">
            <div class="content bs">
                <div class="list-head flex-sc">
                    <div class="list-head-left flex-sc" @click="showInfo(articleInfo.author)">
                        <img :src="$crop((articleInfo.author && articleInfo.author.avatar), 45, 45, time)" alt class="list-img cp bs" />
                        <div class="list-name flex-c-s">
                            <span class="fs14 c333 cp fwb">{{articleInfo.author && articleInfo.author.name}}</span>
                            <span class="lh100">
                  <i class="iconfont fs11">&#xe629;</i>
                  <span class="c999 fs13 lh100 fwl">{{toTime(articleInfo.create_time)}}</span>
                  <span class="c999 fs13 lh100 fwl ml5">{{articleInfo.looks || 0}}人阅读</span>
                </span>
                        </div>
                    </div>
                    <i :class="'list-like iconfont fs22 cccc flex-cc usn' + ((bigger && (articleInfo.likes && articleInfo.likes.includes(userInfo._id))) ? ' bigger-2' : '') + (articleInfo.likes && articleInfo.likes.includes(userInfo._id) ? ' red' : '')" title='点赞' @click="iLike(articleInfo._id, articleInfo.likes)">&#xe61d;</i>
                </div>
                <div class="article-title fs-big fwb tc">
                    {{articleInfo.title}}
                </div>
                <!-- <div class="article-content">
                  {{articleInfo.content}}
                </div> -->
                <article class="article-content markdown-body">
                    <VueShowdown
                            :markdown='articleInfo.content || ""'
                            flavor="github"
                            :options="{
                  emoji: true,
                  strikethrough: true,
                  table: true,
                  tasklists: true,
                  smoothLivePreview: true,
                  smartIndentationFix: true,
                  openLinksInNewWindow: true,
                  backslashEscapesHTMLTags: true,
                  ghCompatibleHeaderId: true
                }"
                    ></VueShowdown>
                    <div class="flex mt30">
                        <div v-if="articleInfo.personal" class="mr30">
                            <span class="c000 fs16 mr10">性质: </span>
                            <i v-if="articleInfo.personal === 'personal'" class="iconfont fwl d fs23 va-3">&#xe659;</i>
                            <i v-if="articleInfo.personal === 'public'" class="iconfont fwl o fs23 va-3">&#xe601;</i>
                        </div>
                        <div v-if="articleInfo.type">
                            <span class="c000 fs15 mr10">类别: </span>
                            <router-link :to="'/?type=' + articleInfo.type" tag="a">{{articleInfo.type}}</router-link>
                        </div>
                    </div>
                </article>
                <Divider :dashed= true>全文完</Divider>
                <div class="message">
                    <Message :talkList='talkList' :id='id'></Message>
                </div>
            </div>

        </div>
        <InfoDialog :isOpen='isOpen' :userInfo='showUserInfo' :time='time'></InfoDialog>
    </div>
</template>

<script>
    import Message from '../components/Message'
    import { mapGetters } from 'vuex'
    import { VueShowdown } from 'vue-showdown'
    import { toTime } from '../utils/formatTime.js'
    import InfoDialog from "../components/InfoDialog";
    export default {
        components: {
            Message,
            VueShowdown,
            InfoDialog
        },
        computed: {
            ...mapGetters(['userInfo'])
        },
        data() {
            return {
                time: new Date().getTime(),
                articleInfo: {},
                talkList: [],
                id: '',
                isOpen: false,
                showUserInfo: {},
                times: 0,
                timeStart: null,
                bigger: NaN,
                timer: 0
            };
        },
        mounted() {
            this.getArticleDetail()
        },
        methods: {
            toTime(date) {
                return toTime(date)
            },
            getArticleDetail() {
                this.$get('/article/detail', {
                    _id: this.$route.query.id
                }).then(res => {
                    if(res.code == 200) {
                        this.articleInfo = res.data;
                        this.id = this.$route.query.id;
                        this.talkList = (res.data.answer && res.data.answer.reverse()) || []
                    }
                })
            },
            showInfo(author) {
                this.isOpen = true
                this.showUserInfo = author
            },

            closeInfo() {
                this.isOpen = false
            },

            iLike(id, likes) {
                this.times++
                this.timeStart || (this.timeStart = new Date().getTime());
                if(this.times == 4) {
                    if((Date.now() - this.timeStart) < 2500) {
                        this.$Message.error('你点这么快干嘛??')
                    }
                    this.times = 0
                    this.timeStart = null
                }
                clearTimeout(this.timer)
                this.bigger = true;
                this.$get('/article/like', {
                    id,
                    is_like: !likes.includes(this.userInfo._id)
                }).then(res => {
                    if(res.code == 200) {
                        this.getArticleDetail()
                        this.$Message.info(res.msg)
                    }
                })
                this.timer = setTimeout(() => {
                    this.bigger = false
                    clearTimeout(this.timer)
                }, 500)
            }
        },
    };
</script>

<style scoped lang='less'>
    .article{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        border-radius: 10px;
        margin-top: -1px;
        // margin-top: 30px;
        .content{
            width: 94%;
            max-width: 900px;
            min-width: 325px;
            padding: 8px 25px;
            box-sizing: border-box;
            background-color: #fff;
            border-radius: 8px;
            margin: 35px 0;
            // text-indent: 2em;
            overflow: hidden;

            .article-title{
                width: 100%;
                margin-top: 20px;
                user-select: text;
            }
            .article-content{
                width: 100%;
                min-height: 400px;
                font-size: 15px;
                user-select: text;
                // font-weight: 400;
                // line-height: 26px;
                // white-space: pre-wrap;
            }
            .list-head {
                width: 100%;
                height: 70px;
                .list-head-left {
                    width: 120px;
                    height: 100%;
                    .list-img {
                        width: 45px !important;
                        min-width: 45px !important;
                        height: 45px;
                        border-radius: 50%;
                        margin-right: 12px;
                    }
                    .list-name {
                        height: 38px;
                        width: 150px;
                        margin-top: 2px;
                        span {
                            width: 300px;
                        }
                    }
                }
                .list-like {
                    width: 32px;
                    height: 100%;
                    cursor: pointer;
                    &:hover {
                        // animation: bigger 0.5s linear;
                        // animation-fill-mode: forwards;
                        color: red;
                    }
                }
                .bigger-2 {
                    animation: bigger 0.4s linear;
                }
                @keyframes bigger {
                    25% {
                        font-size: 24px;
                        color: rgba(255, 0, 0, 0.25);
                        opacity: 1;
                    }
                    50% {
                        font-size: 50px;
                        color: rgba(255, 0, 0.5);
                        opacity: 0.66;
                    }
                    75% {
                        font-size: 75px;
                        color: rgba(255, 0, 0, 0.75);
                        opacity: 0.33;
                    }
                    100% {
                        font-size: 100px;
                        color: rgb(255, 0, 0);
                        opacity: 0;
                    }
                }
            }
        }
        .info{
            width: 275px;
            margin-left: 28px;
            background-color: #fff;
        }
    }
    .fs-big{
        font-size: 23px;
    }
    @media screen and (max-width: 1250px) {
        .info{
            display: none;
        }
    }
    @media screen and (max-width: 400px) {
        .info{
            display: none;
        }
        .article, .content{
            border-radius: 4px !important;
        }
        .content{
            margin-top: 25px !important;
        }
    }
</style>
<style>
    @import url('~github-markdown-css');
    .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        padding: 20px;
        /* padding-right: 25px; */
    }
    *{
        user-select: text;
    }
    ul>li{
        list-style: initial;
    }
    ol>li{
        list-style: decimal;
    }
    @media (max-width: 767px) {
        .markdown-body {
            padding: 10px 0px;
        }
        .content{
            padding: 0 15px !important;
        }
    }
</style>
