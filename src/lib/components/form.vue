<template>
  <el-form ref="form" size="small" :model="query">
    <el-form-item :label="item.label" v-for="item in controls" :key="item.name">
      <el-input
        v-model="query[item.name]"
        v-if="item.type === 'text'"
        :placeholder="item.placeholder"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button size="small" @click="submit">确定</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    controls: {
      type: Array,
      default: () => [],
    },
    api: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      query: {},
    };
  },
  methods: {
    async submit() {
      if (this.api) {
        const { code, msg } = await this.$axios.get(this.api,this.query);
        if (code === 0) {
          this.$message.success("保存成功");
        } else {
          this.$message.error(msg || "失败");
        }
      }
    },
  },
};
</script>

<style>
</style>