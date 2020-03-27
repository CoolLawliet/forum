<template>
    <div id="app">
        <keep-alive include="Home">
            <router-view class="router"/>
        </keep-alive>
        <Footer v-if="isShow"></Footer>
        <BackTop :bottom="75" class="op"></BackTop>
    </div>
</template>

<script>
    import Footer from "./components/Footer";

    export default {
        name: 'App',
        data() {
            return {
                isShow: true
            }
        },
        watch: {
            $route() {
                if (this.$route.path === 'login') {
                    this.isShow = false
                } else {
                    this.isShow = true

                }
            }
        },
        components: {
            Footer
        },
    }
</script>

<style scoped>
    @import "./app.less";

    #app {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

    .router {
        /* background: url("../static/img/bgc.jpg") repeat fixed left top; */
        background-color: #D8E2EB;
        min-height: calc(100vh - 54px);
    }

    .op {
        opacity: 0.3;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .2s;

    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        /* opacity: 0.3; */
        transform: rotateY(180deg)
    }
</style>
