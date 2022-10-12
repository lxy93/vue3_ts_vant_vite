<template>
    <div>
        <van-button type="primary" @click="addClick" size="large">主要按钮</van-button>
        <p class="f28">你好</p>
        <!-- <p>{{commonStore.num}}</p> -->
    </div>
</template>

<script lang='ts' setup>
import { Toast } from 'vant';
import { onMounted } from 'vue'
import { getOrderSearch } from '@/api/order'

const addClick = ()=>{
    Toast('nnn')
}

function ss(){
    getOrderSearch()
}

onMounted(()=>{
    ss()
})
</script>

<style lang='less' scoped>
.f28{
    font-size: 28px;
}
</style>