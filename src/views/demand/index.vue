<template>
    <p>
        <img src="@/assets/demand/bannar_wy.png" class="bannar_wy">
    </p>
    <div class="content-top">
        <div class="ml20 pr20 pb40">
            <ul class="step-bg br10 flex-row content-center items-center">
                <li class="color-322F2D f28">
                    <span>1.</span>
                    <span>服务需求</span>
                </li>
            </ul>
            <component :is="StepOne" />
        </div>
    </div>
</template>

<script lang='ts' setup>
import { StepOne } from './components/index'
import {  } from 'vue'

</script>

<style lang='less' scoped>
.bannar_wy{
    width: 100%;
}
.content-top{
    position: absolute;
    left: 0;
    right: 0;
    top:255px;
    .step-bg{
        height: 92px;
        background: url('@/assets/demand/step_bg_wy.png');
        background-size:100% 100%;
    }
}
</style>