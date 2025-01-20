<template>
  <a-layout-sider
    breakpoint="lg"
    :collapsedWidth="0"
    :collapsed="globalStore.collapsed"
  >
    <div class="logo">
      <Icon icon="logos:codium" width="160" height="24" />
    </div>
    <a-menu
      :selectedKeys="selectedKeys"
      :openKeys="openKeys"
      class="sider"
      theme="dark"
      mode="inline"
    >
      <!-- 目前支持2级菜单 -->
      <div v-for="item in siderMenuConfig" :key="item.path">
        <a-sub-menu v-if="item.children" :key="item.path">
          <template #title>
            <Icon
              class="mr-2 inline"
              :icon="item.meta.icon"
              v-if="item.meta.icon"
              width="20"
              height="20"
            />
            <span>{{ item.meta.title }}</span>
          </template>
          <a-menu-item
            v-for="subItem in item.children"
            :key="item.path + '/' + subItem.path"
          >
            <div class="flex items-center">
              <Icon
                class="mr-2"
                :icon="subItem.meta.icon"
                v-if="subItem.meta.icon"
                width="20"
                height="20"
              />
              <RouterLink :to="item.path + '/' + subItem.path">
                {{ subItem.meta.title }}
              </RouterLink>
            </div>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item v-else :key="item.path">
          <div class="flex items-center">
            <Icon
              class="mr-2"
              :icon="item.meta.icon"
              v-if="item.meta.icon"
              width="20"
              height="20"
            />
            <RouterLink :to="item.path">{{ item.meta.title }}</RouterLink>
          </div>
        </a-menu-item>
      </div>
    </a-menu>
  </a-layout-sider>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, onMounted, ref, watch } from 'vue'
import { routes } from '@/router'
import { useGlobalStore } from '@/store/global'
import { Icon } from '@iconify/vue'

const globalStore = useGlobalStore()

const siderMenuConfig = ref(routes[0].children)
// console.log('siderMenuConfig', siderMenuConfig.value)

const route = useRoute()
const path = ref(route.path)

const selectedKeys = ref([path.value])

const openKeys = computed(() => {
  return [`/${path.value.split('/')[1]}`]
})

onMounted(() => {
  console.log(path, openKeys.value, selectedKeys.value)
})

watch(
  () => route.path,
  (newValue, oldValue) => {
    selectedKeys.value = [newValue]
    path.value = newValue
  }
)
</script>

<style lang="less" scoped>
.logo {
  height: 60px;
  width: 100%;
  font-size: 20px;
  // background-color: #fff;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout-sub-header-background {
  background: #141414;
}
</style>
