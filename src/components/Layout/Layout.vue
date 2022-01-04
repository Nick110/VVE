<template>
  <Header />
  <div class="flex">
    <Sider />
    <el-main>
      <router-view />
    </el-main>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Sider from './Sider.vue';
import Header from './Header.vue';

export default defineComponent({
  components: {
    Header,
    Sider,
  },

  setup() {
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
