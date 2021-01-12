<template>
  <div>
    <el-button :type="level" @click="clickHandle">
      {{ label }}
    </el-button>
    <amis-dialog
      @success="success"
      v-model="dialogShow"
      :config="dialog"
      v-if="actionType === 'dialog' && dialogShow"
    />
  </div>
</template>

<script>
export default {
  name: "butt",
  inject:['runPageEvent'],
  props: {
    level: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    actionType: {
      type: String,
      default: "",
    },
    dialog: {
      type: Object,
      default: () => ({}),
    },
    confirmText: {
      type: String,
      default: "",
    },
     uid:{
      type:[String,Number],
      default:'default'
    },
  },
  data() {
    return {
      dialogShow: false,
    };
  },
  methods: {
    success() {
      this.runPageEvent(this.uid)
    },
    clickHandle() {
      if (this.actionType === "dialog") {
        this.dialogShow = true;
      } else if (this.actionType === "ajax") {
        this.$confirm(this.confirmText, "请注意", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          callback: (res) => {
            this.success(res);
          },
        });
      }
    },
  },
};
</script>