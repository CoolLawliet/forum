<template>
    <div class="markdown">
        writearticle
    </div>
</template>

<script>

</script>

<style scoped lang='less'>
    .title {
        width: 94%;
        max-width: 1300px;
        min-width: 325px;
        margin: 0 auto;
        margin-top: 15px;

        .my-input /deep/ input {
            font-size: 16px;
            font-weight: 600;
            text-indent: 0.4em;
            overflow: hidden;
        }

        .my-input /deep/ button {
            background-color: #2d8cf0;
            width: 100px;
            border-radius: 0;
            color: #fff;
            overflow: hidden;
            // margin-left: 2px;
            &:active {
                background-color: #1772b4;
            }
        }

        .input {
            width: 100%;
            height: 100%;
        }
    }

    .send-btn {
        height: 40px;
    }

    .container {
        width: 94%;
        max-width: 1300px;
        min-width: 325px;
        height: auto;
        display: flex;

        .mark-left {
            flex: 1;
            position: relative;

            .preview {
                position: absolute;
                right: 10px;
                bottom: 10px;
            }

            .textarea {
                width: 100%;
                height: 100%;
                background-color: #eee;
                resize: none;
                height: calc(100vh - 210px);
                font-size: 16px;
                font-weight: 200;
                border: none;
                outline: none;
                padding: 15px;
                padding-left: 18px;
                box-sizing: border-box;

                &:active {
                    border: none;
                    outline: none;
                }
            }
        }

        .mark-right {
            flex: 1;
            background-color: #fff;
            height: calc(100vh - 210px);
            overflow: auto;
            padding: 15px;
            padding-left: 18px;
            font-size: 16px;
            // position: relative;
            .preview {
                position: fixed;
                right: calc(3vw + 10px);
                bottom: 50px;
            }
        }
    }

    .mp30 {
        margin-top: 15px;
        padding-bottom: 25px;
    }

    ::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }

    @media screen and (min-width: 500px) {
        .preview {
            display: none !important;
        }
    }
</style>
<style scoped lang='less'>
    @import url('~github-markdown-css');

    .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        padding: 45px;
    }

    ul > li {
        list-style: initial;
    }

    ol > li {
        list-style: decimal;
    }

    .vl10 {
        vertical-align: -9px;
    }

    .d {
        color: #D81E06;
    }

    .o {
        color: #0099FF;
    }

    @media (max-width: 767px) {
        .markdown-body {
            padding: 15px;
        }
    }
</style>
