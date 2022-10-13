<template>
    <div class="bg-fff pt80 pl40 pr40">
        <p class="color-322F2D f36 pb30">您需要的服务类型是？<label class="color-F23E2C">*</label></p>
        <ul class="flex-row content-between items-center">
            <li class="w48 label-item br10 pt30 pb30 tc mb20">
                住家
            </li>
            <li class="w48 label-item br10 pt30 pb30 tc mb20">
                不住家
            </li>
        </ul>
        <div class="pt40">
            <p class="color-322F2D f36 pb30">您的重点服务需求是？</p>
            <ul class="pb20">
                <li class="bg-F9F9F9 pl30 pr30 pt30 pb30 br10 flex-row content-between items-center mb20">
                    <p>
                        <img src="@/assets/demand/cook_icon.png" class="icon-img">
                        <span class="pl40 f28 color-322F2D">日常烹饪</span>
                    </p>
                    <p>
                        <van-icon name="checked" class="f32 color-61C056" />
                        <span class="color-959392 f28 pl10">已填写</span>
                        <van-icon name="arrow" class="color-959392 f28" />
                    </p>
                </li>
                <li class="bg-F9F9F9 pl30 pr30 pt30 pb30 br10 flex-row content-between items-center mb20">
                    <p>
                        <img src="@/assets/demand/cook_icon.png" class="icon-img">
                        <span class="pl40 f28 color-322F2D">日常烹饪</span>
                    </p>
                    <p>
                        <van-icon name="checked" class="f32 color-61C056" />
                        <span class="color-959392 f28 pl10">已填写</span>
                        <van-icon name="arrow" class="color-959392 f28" />
                    </p>
                </li>
                <li class="bg-F9F9F9 pl30 pr30 pt30 pb30 br10 flex-row content-between items-center mb20">
                    <p>
                        <img src="@/assets/demand/cook_icon.png" class="icon-img">
                        <span class="pl40 f28 color-322F2D">日常烹饪</span>
                    </p>
                    <p>
                        <van-icon name="checked" class="f32 color-61C056" />
                        <span class="color-959392 f28 pl10">已填写</span>
                        <van-icon name="arrow" class="color-959392 f28" />
                    </p>
                </li>
            </ul>
        </div>
        <div class="pt40 pb40">
            <p class="color-322F2D f36 pb30">您还有其他服务需求吗？</p>
            <div class="bg-F9F9F9 br10">
                <textarea rows="5" class="pl20 pr20 pt20 pb20 w100 box b-none f28 resize" placeholder="请通过语音或文字告诉我们" style="background:transparent;"></textarea>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import {  } from 'vue'

</script>

<style lang='less' scoped>
.pt80{
    padding-top: 80px;
}
.color-F23E2C{
    color: #F23E2C;
}
.label-item{
    color: #322F2D;
    background:#F9F9F9;
}
.icon-img{
    width: 48px;
    height: 48px;
}
.color-61C056{
    color: #61C056;
}
.color-959392{
    color: #959392;
}
</style>