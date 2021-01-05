<template>
  <div>
    <el-button :type="level" @click="clickHandle">
      {{ label }}
    </el-button>
    <amis-dialog
      v-model="dialogShow"
      :config="dialog"
      v-if="actionType === 'dialog'"
    />
  </div>
</template>

<script>
export default {
  props: {
    level: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    actionType: {
      type: String,
      default: ""
    },
    dialog: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      dialogShow: false,
    };
  },
  methods: {
    clickHandle() {
      if (this.actionType === "dialog") {
        this.dialogShow = true
      }
    }
  }
};
</script>