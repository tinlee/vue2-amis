<!--
 * @Author: sky.li
 * @LastEditors: sky.li
 * @Description: 
 * @可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <el-card>
    <div slot="header" v-if="title" class="clearfix">
      <span>{{title}}</span>
      <el-button style="float: right; padding: 3px 0" type="text"
        >操作按钮</el-button
      >
    </div>
    <slot />
  </el-card>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:''
        }
    }
};
</script>

<style></style>
