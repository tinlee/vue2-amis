<template>
  <div>
    <el-form size="small" :inline="true" :model="query" v-if="filter && filter.controls">
      <el-form-item
        :label="item.label"
        v-for="item in filter.controls"
        :key="item.name"
      >
        <el-input
          v-model="query[item.name]"
          v-if="item.type === 'text'"
          :placeholder="item.placeholder"
        ></el-input>
      </el-form-item>
      <el-form-item>

        <el-button size="small" >搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="data">
      <el-table-column
        :prop="item.name"
        :label="item.label"
        v-for="item in columns"
        :key="item.name"
      ></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="query.page_number"
      :page-size="query.page_size"
      background
      v-if="total !== 0"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    api: {
      type: String,
      default: "",
    },
    columns: {
      type: Array,
      default: () => [],
    },
    filter: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      data: [],
      total: 0,
      query: {
        page_size: 10,
        page_number: 1,
      },
    };
  },
  async created() {
    this.getList();
  },
  methods: {
    async getList() {
      if (this.api) {
        const { data } = await this.$axios.get(this.api);
        this.data = data.list || [];
        if (data.total) {
          this.total = data.total || 0;
        }
      }
    },
    handleSizeChange(val) {
      this.query.page_size = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.query.page_number = val;
      this.getList();
    },
  },
};
</script>

<style>
</style>