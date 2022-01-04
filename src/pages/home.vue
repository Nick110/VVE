<template>
  <Layout />
</template>

<script>
import Layout from '@/components/Layout/Layout.vue';

export default {
  components: {
    Layout,
  },
  data() {
    return {};
  },
  mounted() {
    this.$axios('/a');
  },
};
</script>

<style lang="less" scoped></style>
