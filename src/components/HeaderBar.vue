<template>
    <div class="tab-box oh">
        <Menu
                mode="horizontal"
                :theme="theme_color"
                active-name="1"
                :accordion="true"
                @on-select="select"
                class="head-bar"
        >
            <MenuItem name="1" class="mml10">
                <h1 class="h1">
                    <img src="../../static/img/logo.png" alt="展讯" />
                </h1>
            </MenuItem>

            <Submenu name="2" class="fr mmr10" v-if="userInfo.name">
                <template slot="title">
                    <img :src="$crop(userInfo.avatar, 27, 27, time)" alt class="user-img" />
                    <!-- <Icon type="ios-contact" class="fs25" /> -->
                    {{userInfo.name}}
                </template>
                <MenuItem name="2-1">个人中心</MenuItem>
                <MenuItem name="2-2">退出登录</MenuItem>
            </Submenu>

            <MenuItem name="3" class="fr mmr10" v-else>
                <Icon type="ios-contact" class="fs25" />登录
            </MenuItem>

            <MenuItem name="4" class="fr msg" v-if="userInfo.name">
                <!-- <Icon type="ios-contact" class="fs25"/> -->
                <span class="info">
        消息
                    <!-- <span class="dot" v-if="message">{{message}}</span> -->
      </span>
            </MenuItem>
            <MenuItem name="5" class="fr" v-if="userInfo.name">
                <!-- <Icon type="ios-contact" class="fs25"/> -->
                <span class="info">
        发帖
                    <!-- <span class="dot" v-if="message">{{message}}</span> -->
      </span>
            </MenuItem>
        </Menu>
        <!-- <div class="block"></div> -->
        <div class="tabbar flex-c-c oh">
            <div class="content">
                <!-- <h1 class="cfff fw500 mt30 fs35 ts3">展讯 <span class="fs14 vt3 ts">mrp</span></h1>
                <p class="cfff fs14 fwl mt20 ts">愿你岁月无波澜，敬我余生不悲欢。</p> -->
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import Cookie from "js-cookie";
    export default {
        components: {},
        data() {
            return {
                theme_color: "primary",
                message: 4,
                userInfo: (this.$store.state.user && this.$store.state.user.userInfo) || {},
                time: new Date().getTime()
            };
        },
        computed: {
            ...mapGetters({user: 'userInfo'})
        },
        mounted(){
          if(Cookie.get("token")){
            this.getUserInfo()
          }
        },
        methods: {
            getUserInfo() {
                this.$get("/users/userInfo", {}).then(msg => {
                    this.userInfo = msg.data || {};
                    this.$store.dispatch("setUserInfo", msg.data);
                });
            },
            select(name) {
                if (name == "1") {
                    if(this.$route.name === 'Home') {
                        this.$parent.getArticleList()
                        document.documentElement.scrollTop = 0
                    } else {
                        this.$router.push("/");
                    }
                } else if (name == "2-1") {
                    // this.$Message.info({
                    //   content: "个人中心在哪里呢?"
                    // });
                    this.$router.push('/userInfo')
                } else if (name == "2-2") {
                    this.loginOut();
                } else if (name == "3") {
                    Cookie.remove("token");
                    this.$store.dispatch("clearUserInfo");
                    this.$router.push("/login");
                } else if (name == "4") {
                    this.$Message.info({
                        content: "我的消息呢?"
                    });
                } else if (name == 5) {
                    this.$router.push('/writeArticle')
                }
            },
            loginOut() {
                Cookie.remove("token");
                this.$store.dispatch("clearUserInfo");
                this.$router.push("/login");
            }
        },
        beforeDestroy() {}
    };
</script>


<style scoped lang='less'>
    .head-bar{
        // position: relative;
        width: 100%;
        background-color: transparent;
    }
    .h1 {
        height: 46px;
        margin-top: 7px;
        img {
            height: 100%;
        }
    }
    .info {
        display: inline-block;
        position: relative;
        .dot {
            position: absolute;
            border-radius: 50%;
            text-align: center;
            line-height: 13px;
            font-size: 13px;
            background-color: red;
            color: #fff;
            width: 14px;
            height: 14px;
            right: -11px;
            top: 12px;
        }
    }
    .user-img {
        vertical-align: -7px;
        width: 27px;
        height: 27px;
        border-radius: 50%;
        margin-right: 2px;
    }
    .mml10{
        margin-left: 10px;
    }
    .mmr10{
        margin-right: 10px;
    }
    @media screen and (max-width: 440px){
        .ivu-menu-horizontal .ivu-menu-item, .ivu-menu-horizontal .ivu-menu-submenu{
            padding: 0 12px;
        }
        .mmr10 {
            margin-right: 0;
        }
        .mml10{
            margin-left: 0;
        }
        .ivu-menu-primary{
            width: 100%;
        }
        .msg{
            display: none;
        }
    }
    .block{
        width: 100%;
        height: 60px;
        opacity: 0;
    }
    li{
        list-style: none;
    }
    .tabbar{
        width: 100%;
        height: 300px;
        background: url('../../static/img/bg.jpg') no-repeat center top;
        background-size: cover;
        transform: translate(0, -130px);
        .content{
            width: 96%;
            max-width: 1100px;
            padding-top: 30px;
            box-sizing: border-box;
            .nav{
                display: flex;
                justify-content: flex-end;
                .nav-item{
                    width: 98px;
                    height: 38px;
                    padding: 0 18px;
                    text-align: center;
                    line-height: 38px;
                    cursor: pointer;
                    &:hover{

                    }
                }
            }
        }
    }
    .fw500{
        font-weight: 500;
    }
    .ts3{
        text-shadow: 2px 2px 0 rgba(100, 125, 151, 0.8);
    }
    .ts{
        text-shadow: 1px 1px 0 rgba(100, 125, 151, 0.8);
    }
    .vt3{
        vertical-align: -3px;
    }
    .tab-box{
        height: 230px;
    }
    @media screen and (max-width: 600px) {
        .tabbar{
            display: none;
        }
        .tab-box{
            height: 60px;
        }
        .head-bar{
            position: fixed;
            background: url('../../static/img/bg_s.jpg') no-repeat center top;
            background-size: cover;
        }
    }
</style>
