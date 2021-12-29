<template>
  <el-row>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </el-row>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.$axios('/a')
  },
  components: {}
}
</script>

<style lang="scss" scoped></style>
