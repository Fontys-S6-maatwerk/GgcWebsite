<template>
    <body class="register">
        <main class="pt-80">
            <div class="back-to-top background-highlight text-white display-none border-radius box-shadow small-text transition position-fixed p-15">
                <i class="fas fa-arrow-up icon"></i>
            </div>
            <div class="row">
                <div class="col-xl-6 content-wrapper flex align-center justify-center background-offwhite">
                    <div class="register-form p-md-20">
                        <h1 class="h2 mb-10">Welkom bij Global Goals Community</h1>
                        <p class="mb-50 display-none-xs">Om oplossingen te kunnen plaatsen, reageren op oplossingen om een eigen profiel te creëren moet er ingelogd zijn met een account.</p>
                        <p class="mb-30">Heb je al een account? <router-link to="/login/" class="bold-text text-highlight">Login</router-link></p>
                        <form name="form" @submit.prevent="handleRegister">
                            <div class="row mb-30">
                                <div class="col-6">
                                    <div class="input-wrapper">
                                        <label class="mb-10 bold-text" for="firstname">Voornaam</label>
                                        <input v-model="user.firstname" v-validate="'required'" type="text" class="form-control input py-10 px-20" name="firstname" />
                                    </div>
                                    <div
                                      v-if="submitted && errors.has('firstname')"
                                      class="alert-danger"
                                    >
                                      {{ errors.first("firstname") }}
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-wrapper">
                                        <label class="mb-10 bold-text" for="lastName">Achternaam</label>
                                        <input v-model="user.lastname" v-validate="'required'" type="text" class="form-control input py-10 px-20" name="lastname" />
                                    </div>
                                    <div
                                      v-if="submitted && errors.has('lastname')"
                                      class="alert-danger"
                                    >
                                      {{ errors.first("lastname") }}
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-30">
                                <div class="col-12">
                                    <div class="input-wrapper">
                                        <label class="mb-10 bold-text" for="email">Emailadres</label>
                                        <input v-model="user.email" v-validate="'required'" type="email" class="form-control input py-10 px-20" name="email" />
                                    </div>
                                    <div
                                      v-if="submitted && errors.has('email')"
                                      class="alert-danger"
                                    >
                                      {{ errors.first("email") }}
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-40">
                                <div class="col-6">
                                    <div class="input-wrapper">
                                        <label class="mb-10 bold-text" for="password">Wachtwoord</label>
                                        <input v-model="user.password" v-validate="'required'" type="password" class="form-control input py-10 px-20" name="password" />
                                    </div>
                                    <div
                                      v-if="submitted && errors.has('password')"
                                      class="alert-danger"
                                    >
                                      {{ errors.first("password") }}
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-wrapper">
                                        <label class="mb-10 bold-text" for="passwordRepeat">Herhaal wachtwoord</label>
                                        <input type="password" id="passwordRepeat" name="passwordRepeat" class="input py-10 px-20">
                                    </div>
                                </div>
                            </div>
                            <div class="form-options mb-30">
                                <label class="checkbox-wrapper mb-20">
                                    Ik accepteer de algemene voorwaarden en de privacy policy
                                    <input type="checkbox" id="acceptTerms" name="acceptTerms">
                                    <span class="checkbox"></span>
                                </label>
                            </div>
                            <div class="buttons">
                                <button class="btn btn-primary" type="submit">{{ $t('Register') }}</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-xl-6 image-wrapper flex align-center justify-center background-highlight display-none-lg">
                    <img class="image" src="../assets/images/login/register.png">
                </div>
            </div>
        </main>
    </body>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const Auth = namespace('Auth')

@Component
export default class Register extends Vue {
  private user: any = { firstname: '', lastname: '', email: '', password: '' }
  private submitted = false
  private successful = false
  private message = ''

  @Auth.Getter
  private isLoggedIn!: boolean

  @Auth.Action
  private register!: (data: any) => Promise<any>

  mounted () {
    if (this.isLoggedIn) {
      this.$router.push('/profile')
    }
  }

  handleRegister () {
    console.log('Handle')
    this.message = ''
    this.submitted = true
    this.$validator.validate().then((isValid) => {
      if (isValid) {
        this.register(this.user).then(
          (data) => {
            this.message = data.message
            this.successful = true
          },
          (error) => {
            this.message = error
            this.successful = false
          }
        )
      }
    })
  }
}
</script>
