<template>
  <CSidebar
    position="fixed"
    :unfoldable="sidebarUnfoldable"
    :visible="sidebarVisible"
    @visible-change="
      (event) =>
        $store.commit({
          type: 'updateSidebarVisible',
          value: event,
        })
    "
  >
    <CSidebarBrand>
      <img
        class="d-block w-100 p-lg-1 img-fluid logo-brand"
        :src="VueImg"
        alt="slide 1"
      />
    </CSidebarBrand>
    <router-link to="/dashboard">
      <div class="text-center nav-menu py-2">
        <CIcon name="cilSpeedometer" class="" size="xl" />
        <p class="d-none d-lg-block">Dashboard</p>
      </div>
    </router-link>
    <!-- <AppSidebarNav /> -->
    <CRow class="bg-logout mx-0 mt-auto">
      <CCol :md="12" class="my-4 text-center">
        <CIcon name="cilAccountLogout" class="mx-2" size="xl" />
        <p class="d-none d-lg-block">Logout</p>
      </CCol>
    </CRow>
  </CSidebar>
</template>

<style scoped>
.CSidbar {
  background-color: white;
}
</style>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
// import { AppSidebarNav } from './AppSidebarNav'
import { logoNegative } from '@/assets/brand/logo-negative'
import { sygnet } from '@/assets/brand/sygnet'
import VueImg from '@/assets/images/logo.jpg'
export default {
  name: 'AppSidebar',
  components: {
    // AppSidebarNav,
  },
  setup() {
    const store = useStore()
    return {
      VueImg,
      logoNegative,
      sygnet,
      sidebarUnfoldable: computed(() => store.state.sidebarUnfoldable),
      sidebarVisible: computed(() => store.state.sidebarVisible),
    }
  },
}
</script>
