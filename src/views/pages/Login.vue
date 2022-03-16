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
              <!-- <a class="forgot-link" to="/password-request">
                Forgot Password ?
              </a> -->
              <router-link class="forgot-link" to="/password-request"
                >Forgot Password ?</router-link
              >
            </div>
            <!-- <router-link to="/dashboard"> -->
            <div class="d-grid gap-2">
              <CButton @click.prevent="login" class="btn-main"
                >CONTINUE</CButton
              >
            </div>
            <!-- </router-link> -->
            <div class="login-or">
              <span class="or-line"></span>
              <span class="span-or">or</span>
            </div>
            <div class="d-grid gap-2 my-3">
              <CButton class="google" @click.prevent="handleClickSignIn">
                <CIcon name="cibGoogle" /> Continue with Google
              </CButton>
            </div>
            <!-- <div class="d-grid gap-2 my-3">
              <CButton class="github" @click.prevent="authenticate('github')">
                <CIcon name="cibGithub" /> Continue with Github
              </CButton>
            </div> -->
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
import { useCookies } from 'vue3-cookies'

export default {
  name: 'Login',
  setup() {
    const { cookies } = useCookies()
    return {
      VueImg,
      isInit: false,
      isSignIn: false,
      cookies,
    }
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    //Github Login
    authenticate: function (provider) {
      console.log('Entering Git .........' + this.$auth)
      this.$auth.authenticate(provider).then(function () {
        // Execute application logic after successful social authentication
        console.log('Git Success')
      })
    },

    //Google Login
    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn()
        console.log('user email:', googleUser.Du.tv)
        console.log('user token:', googleUser.wc.id_token)
        this.isSignIn = this.$gAuth.isAuthorized
        //email: googleUser.Du.tv,
        let api = 'https://rsoapi.squarera.online/api/loginwithgoogle'
        this.axios
          .post(api, { token: googleUser.wc.id_token })
          .then((response) => {
            if (response.status == '200') {
              console.log(
                'token',
                response.data.token,
                'user_id',
                response.data.user.id,
              )
              window.localStorage.setItem('token', response.data.token)
              window.localStorage.setItem('user_id', response.data.user.id)
              this.cookies.set('rso-cookie', 'cookie-running', 300)
              this.$router.push('/dashboard')
            } else {
              alert('Record not loaded')
            }
          })
      } catch (error) {
        // On fail do something
        console.error(error)
        return null
      }
    },
    login() {
      console.log('Calling login function')
      let api = 'https://rsoapi.squarera.online/api/login'
      this.axios
        .post(api, { email: this.email, password: this.password })
        .then((response) => {
          //console.log(response.data)
          //console.log(response.status)
          let user_id = response.data.user.id
          console.log('Login user ID' + JSON.stringify(user_id))
          if (response.status == '200') {
            window.localStorage.setItem('token', response.data.token)
            window.localStorage.setItem('user_id', user_id)
            this.cookies.set('rso-cookie', 'cookie-running', 300)
            this.$router.push('/dashboard')
          } else {
            alert('Record not loaded')
          }
        })
    },
  },
}
</script>
