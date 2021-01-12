<template>
  <el-dialog  :visible.sync="dialogVisible" :title="config.title">
      <amis-render :schema="config.body" @success="successHandel"/>
  </el-dialog>
</template>

<script>

export default {
    props:{
        value:{
            type:Boolean,
            default:false,
        },
        config:{
            type:Object,
            default:()=>({})
        }
    },
    computed:{
        dialogVisible:{
            get(){
                return this.value
            },
            set(val){
                this.$emit("input",val)
            }
        }
    },
    methods:{
        successHandel(){
            this.dialogVisible=false
            this.$emit('success')
        }
    }
}
</script>

<style>

</style>