<template>
  <el-form ref="form" size="small"  :model="query">
      <el-form-item
        :label="item.label"
        v-for="item in controls"
        :key="item.name"
      >
        <el-input
          v-model="query[item.name]"
          v-if="item.type === 'text'"
          :placeholder="item.placeholder"
        ></el-input>
      </el-form-item>
      <el-form-item>

        <el-button size="small" >确定</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
export default {
    props:{
        controls:{
            type:Array,
            default:()=>[]
        }
    },
    data(){
        return {
            query:{}
        }
    }
}
</script>

<style>

</style>