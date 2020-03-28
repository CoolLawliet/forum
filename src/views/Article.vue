<template>
    <div class="">
        Article
    </div>
</template>

<script>

</script>

<style scoped lang='less'>
    .article{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        border-radius: 10px;
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
                // .bigger-1 {
                //   animation: small 0.4s linear;
                // }
                // @keyframes small {
                //    25% {
                //     font-size: 100px;
                //     color: rgba(255, 0, 0, 1);
                //     opacity: 1;
                //   }
                //   50% {
                //     font-size: 75px;
                //     color: rgba(255, 0, 0.66);
                //     opacity: 0.66;
                //   }
                //   75% {
                //     font-size: 50px;
                //     color: rgba(255, 0, 0, 0.33);
                //     opacity: 0.33;
                //   }
                //   100% {
                //     font-size: 24px;
                //     color: #ccc;
                //     opacity: 0;
                //   }
                // }
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
