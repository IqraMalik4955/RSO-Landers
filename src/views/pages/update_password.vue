<template>
  <div class="bg-light d-flex flex-row align-items-center m-0 g-0">
    <CContainer fluid class="m-0 g-0">
      <CRow class="justify-content-center text-center vh-100 g-0">
        <CCol md="4" class="shadow p-5 bg-white">
          <CForm class="forgot-password-request-form">
            <h5 class="mb-5">Update Password</h5>

            <CInputGroup class="mb-4">
              <CInputGroupText>
                <CIcon icon="cil-lock-locked" />
              </CInputGroupText>
              <CFormInput
                type="text"
                placeholder="Enter New Password"
                autocomplete="current-password"
                v-model="this.update_the_password.password"
              />
            </CInputGroup>

            <div class="d-grid gap-2">
              <CButton @click="update_password" class="btn-main">Reset</CButton>
            </div>
          </CForm>
        </CCol>
        <CCol>
          <img class="d-block h-100 img-fluid" :src="VueImg" alt="slide 1" />
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import VueImg from '@/assets/images/img-1.jpg'
//import VueAuthenticate from 'vue-authenticate'

export default {
  name: 'Login',
  setup() {
    return {
      VueImg,
    }
  },
  data() {
    return {
      update_the_password: {
        token: this.$route.query.token,
        user: this.$route.query.uid,
        password: '',
      },
    }
  },

  methods: {
    update_password() {
      console.log('Calling Request Password function')
      let api = 'https://rsoapi.squarera.online/api/resetPassword'
      this.axios.post(api, this.update_the_password).then((response) => {
        let user_response = response.data.message
        console.log('Login user ID' + JSON.stringify(user_response))
        if (response.status == '200') {
          alert(user_response)
          this.$router.push('/')
        } else {
          alert('Record not loaded')
        }
      })
    },
  },
}
</script>
