<template>
  <div class="bg-light d-flex flex-row align-items-center m-0 g-0">
    <CContainer fluid class="m-0 g-0">
      <CRow class="justify-content-center text-center vh-100 g-0">
        <CCol md="4" class="shadow p-5 bg-white">
          <CForm>
            <h1 class="mb-5">Welcome</h1>
            <CInputGroup class="mb-3">
              <CInputGroupText>
                <CIcon icon="cil-user" />
              </CInputGroupText>
              <CFormInput
                placeholder="Email or username"
                autocomplete="username"
                v-model="this.email"
              />
            </CInputGroup>
            <CInputGroup class="mb-4">
              <CInputGroupText>
                <CIcon icon="cil-lock-locked" />
              </CInputGroupText>
              <CFormInput
                type="password"
                placeholder="Password"
                autocomplete="current-password"
                v-model="this.password"
              />
            </CInputGroup>
            <div class="text-end">
              <a class="forgot-link"> Forgot Password ? </a>
            </div>
            <!-- <router-link to="/dashboard"> -->
            <div class="d-grid gap-2">
              <CButton @click="login" class="btn-main">CONTINUE</CButton>
            </div>
            <!-- </router-link> -->
            <div class="login-or">
              <span class="or-line"></span>
              <span class="span-or">or</span>
            </div>
            <div class="d-grid gap-2 my-3">
              <CButton class="google" @click="handleClickSignIn">
                <CIcon name="cibGoogle" /> Continue with Google
              </CButton>
            </div>
            <div class="d-grid gap-2 my-3">
              <CButton class="github">
                <CIcon name="cibGithub" /> Continue with Github
              </CButton>
            </div>
            <!-- <div class="text-center dont-have">
              Don’t have an account?
              <a>Register</a>
            </div> -->
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

export default {
  name: 'Login',
  setup() {
    return {
      VueImg,
      isInit: false,
      isSignIn: false,
    }
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn()
        console.log('user', googleUser)
        this.isSignIn = this.$gAuth.isAuthorized
      } catch (error) {
        // On fail do something
        console.error(error)
        return null
      }
    },
    login() {
      let api = 'https://rsoapi.squarera.online/api/login'
      this.axios
        .post(api, { email: this.email, password: this.password })
        .then((response) => {
          console.log(response.data)
          if (response.status == '200') {
            window.localStorage.setItem('token', response.data.token)
            this.$router.push('/dashboard')
          } else {
            alert('Record not loaded')
          }
        })
    },
  },
}
</script>
