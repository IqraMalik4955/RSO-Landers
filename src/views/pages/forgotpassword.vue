<template>
  <div class="bg-light d-flex flex-row align-items-center m-0 g-0">
    <CContainer fluid class="m-0 g-0">
      <CRow class="justify-content-center text-center vh-100 g-0">
        <CCol md="4" class="shadow p-5 bg-white">
          <CForm class="forgot-password-request-form">
            <h5 class="mb-5">Did you forgot your password?</h5>
            <CInputGroup class="mb-3">
              <CInputGroupText>
                <CIcon icon="cil-user" />
              </CInputGroupText>
              <CFormInput
                placeholder="Enter Valid Email"
                autocomplete="username"
                v-model="this.email"
              />
            </CInputGroup>
            <!-- <router-link to="/dashboard"> -->
            <div class="d-grid gap-2">
              <CButton @click="request_password" class="btn-main"
                >Request Reset Link</CButton
              >
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
      email: '',
    }
  },
  methods: {
    request_password() {
      console.log('Calling Request Password function')
      let api = 'https://rsoapi.squarera.online/api/passwordResetRequest'
      this.axios.post(api, { email: this.email }).then((response) => {
        //console.log(response.data)
        //console.log(response.status)
        let user_response = response.data
        console.log('Login user ID' + JSON.stringify(user_response))
        if (response.status == '200') {
          this.$router.push('/')
        } else {
          alert('Record not loaded')
        }
      })
    },
  },
}
</script>
