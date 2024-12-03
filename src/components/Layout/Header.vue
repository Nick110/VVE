<template>
  <a-layout-header class="header">
    <a-button type="primary" @click="toggleCollapsed">
      <MenuUnfoldOutlined v-if="globalStore.collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
  </a-layout-header>
</template>

<script setup>
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import { useGlobalStore } from '../../store/global'

const globalStore = useGlobalStore()

const toggleCollapsed = () => {
  return globalStore.toggleCollapsed()
}
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  background: #fff;
  width: 100%;
  padding: 0 24px;
  display: flex;
  align-items: center;
  .anticon {
    // line-height: 0;
    vertical-align: 0;
  }
}
</style>
