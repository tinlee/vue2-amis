<!--
 * @Author: sky.li
 * @LastEditors: sky.li
 * @Description: 
 * @可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div>
    <div>{{ title }} {{ subTitle }}</div>
    <slot />
  </div>
</template>

<script>
export default {
  provide() {
    const that=this
    return {
      registPageEvent: function (id = "default", fn) {
        console.log(this,that);
        if (that.events[id]) {
          return console.error("页面中配置多个事件时，需要对子元素指定id");
        }
        that.events[id] = fn;
      },
      runPageEvent(id = "default") {

        that.events[id]();
      },
    };
  },
  data() {
    return {
      events: {},
    };
  },
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
  methods: {
    registPageEvent(id = "default", fn) {
      console.log(this);
      if (this.events[id]) {
        return console.error("页面中配置多个事件时，需要对子元素指定id");
      }
      this.events[id] = fn;
    },
  },
};
</script>

<style></style>
