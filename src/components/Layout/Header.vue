<template>
  <ElHeader class="header"></ElHeader>
</template>

<script setup>
import { useGlobalStore } from '../../store/global'
</script>

<style lang="less" scoped>
.el-header {
  height: 60px;
  background-color: #fff;
  width: 100%;
  padding: 0 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
}
</style>
