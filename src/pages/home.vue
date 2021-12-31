<template>
  <el-row>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">
      Success
    </el-button>
    <el-button type="info">
      Info
    </el-button>
    <el-button type="warning">
      Warning
    </el-button>
    <el-button type="danger">
      Danger
    </el-button>
    <el-button>中文</el-button>
    <button class="bg-red-500 hover:bg-red-700">
      Hover me
    </button>
  </el-row>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.$axios('/a');
  },
};
</script>

<style lang="less" scoped></style>
