<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <router-view></router-view>
        <button class="bg-red-500 hover:bg-red-700">
          Hover me
        </button>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({

  setup() {
    console.log('fdsas');
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    };

    const tableData = ref(Array(20).fill(item));

    return {
      tableData,
    };
  },
});
</script>

<style lang="less">
.el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  line-height: 60px;
}

.el-aside {
  color: var(--el-text-color-primary);
}
</style>
