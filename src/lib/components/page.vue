<!--
 * @Author: sky.li
 * @LastEditors: sky.li
 * @Description: 
 * @可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div>
    <div>
      {{ title }} {{subTitle}}
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
