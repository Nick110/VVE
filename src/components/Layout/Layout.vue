<template>
  <a-layout class="out-layout">
    <Sider />
    <a-layout>
      <Header />
      <a-layout-content
        :style="{
          margin: '24px 16px',
          background: '#fff',
          padding: '16px 12px'
        }"
      >
        <RouterView />
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center', background: '#fff' }">
        Created by Younger ©2024
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Header from './Header.vue'
</script>

<style lang="less">
.out-layout {
  min-height: 100vh;
}
</style>
