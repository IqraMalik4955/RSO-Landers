<template>
  <CDropdown variant="nav-item">
    <CDropdownToggle placement="bottom-end" class="py-0" :caret="false">
      <CAvatar :src="avatar" size="md" />
    </CDropdownToggle>
    <CDropdownMenu class="pt-0">
      <CDropdownHeader component="h6" class="bg-light fw-semibold py-2">
        User
      </CDropdownHeader>
      <CDropdownItem @click="logout()" class="cursor">
        <CIcon icon="cil-lock-locked" /> Logout
      </CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script>
import avatar from '@/assets/images/avatars/8.jpg'
import { useCookies } from 'vue3-cookies'
export default {
  name: 'AppHeaderDropdownAccnt',
  setup() {
    const { cookies } = useCookies()
    return {
      avatar: avatar,
      itemsCount: 42,
      cookies,
    }
  },
  methods: {
    logout() {
      //alert(localStorage.getItem('token'))
      localStorage.removeItem('token')
      localStorage.removeItem('user_id')
      this.cookies.remove('rso-cookie')
      this.$router.push('/')
    },
  },
}
</script>
