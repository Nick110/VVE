<template>
  <el-menu
    active-text-color="#00FF7F"
    background-color="#666"
    class="sider"
    :default-active="defaultActive"
    text-color="#fff"
    router
  >
    <!-- 目前支持2级菜单 -->
    <div
      v-for="item in siderMenuConfig"
      :key="item.path"
    >
      <el-sub-menu v-if="item.children">
        <template #title>
          <span>{{ item.title }}</span>
        </template>
        <template
          v-for="subItem in item.children"
          :key="subItem.path"
        >
          <el-menu-item :index="subItem.path">
            <span>{{ subItem.title }}</span>
          </el-menu-item>
        </template>
      </el-sub-menu>
      <el-menu-item
        v-else
        :index="item.path"
      >
        <span>{{ item.title }}</span>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script>
import siderMenuConfig from '../../router/menuConfig';

export default {

  components: {
  },
  data() {
    return {
      siderMenuConfig,
      defaultActive: '/',
    };
  },
  mounted() {
    console.log(this.$route.path);
    this.defaultActive = this.$route.path;
  },
};

</script>

<style lang='less' scoped>
  .sider {
    width: 208px;
    height: calc(100vh - 60px);
    overflow-y: auto;
  }
</style>
