<!-- 用户中心 -->
<template>
    <div>
        userinfo

    </div>
</template>

<script>

</script>

<style scoped lang='less'>
    .container{
        width: 94%;
        max-width: 900px;
        min-width: 325px;
        margin: 30px auto;
        margin-bottom: 0;
    }
    .userInfoBox .avatarlist{
        position: relative;
    }

    .avatar-uploader {
        display: inline-block;
        vertical-align: top;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 50%;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        width: 120px;
        height: 120px;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 120px;
        height: 120px;
        line-height: 120px;
        text-align: center;
        position: absolute;
        top:0;
        left:0;
    }
    .avatar {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        display: block;
        object-fit: cover;
    }
    .gotoEdit{
        font-size: 15px;
        float:right;
        cursor: pointer;
        color:#999;
    }
    .gotoEdit:hover {
        color:#333;
    }
    /*个人设置*/
    .userInfoBox .leftTitle{
        display: inline-block;
        width:100px;
        padding: 10px 0;
    }
    .userInfoBox .rightInner{
        display: inline-block;
        max-width: calc(100% - 140px);
        vertical-align: top;
    }
    .userInfoBox li{
        padding:20px;
        border-bottom: 1px solid #ddd;
    }
    .userInfoBox li:first-child{
        border-bottom: 1px solid transparent;
    }
    .saveInfobtn{
        padding: 20px 0 30px 0;
        // text-align: center;
    }
    .saveInfobtn a{
        color:#fff;
        padding:6px 20px;
        margin:5px 10px;
        border-radius: 5px;
        font-size: 14px;
    }
    .userInfoBox .fa-asterisk{
        color: #DF2050;
    }
    li{
        list-style: none;
    }
</style>
