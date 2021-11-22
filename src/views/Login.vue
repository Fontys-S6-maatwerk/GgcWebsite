<template>
<body class="login">
    <main class="pt-80">
        <div class="back-to-top background-highlight text-white display-none border-radius box-shadow small-text transition position-fixed p-15">
    <i class="fas fa-arrow-up icon"></i>
</div>    <div class="row">
    <div class="col-xl-6 image-wrapper flex align-center justify-center background-highlight display-none-lg">
        <img class="image" src="../assets/images/login/login.png">
    </div>

    <div class="col-xl-6 content-wrapper flex align-center justify-center background-offwhite">
        <div class="login-form p-md-20">
            <h1 class="h2 mb-md-0 mb-10">Hey, goed je te zien!</h1>
            <div class="mb-10 display-none-xs"><p>Om oplossingen te kunnen plaatsen, reageren op praktische oplossingen en om een eigen profiel te creëren moet er ingelogd zijn met een account.</p></div>

            <p class="error-msg mb-10">Er zijn op dit moment geen errors</p>

            <form id="login-form">
                <div class="input-wrapper flex align-center p-md-20 p-30">
                    <div class="input-image mr-40">
                        <img src="../assets/images/login/mail_icon.png">
                    </div>

                    <div class="input-group flex flex-col">
                        <input type="email" id="email" name="email" class="input bold-text" placeholder="E-mail">
                    </div>
                </div>

                <div class="input-wrapper flex align-center mb-30 p-md-20 p-30">
                    <div class="input-image mr-40">
                        <img src="../assets/images/login/key_icon.png">
                    </div>

                    <div class="input-group flex flex-col">
                        <input type="password" id="password" name="password" class="input bold-text" placeholder="Wachtwoord">
                    </div>
                </div>

                <div class="form-options flex space-between align-center mb-30">
                    <label class="checkbox-wrapper">
                        Ingelogd blijven
                        <input type="checkbox" id="remember" name="remember">
                        <span class="checkbox"></span>
                    </label>

                    <a href="/forgot-password/">Wachtwoord vergeten?</a>
                </div>

                <div class="buttons flex align-center">
                    <button class="btn btn-primary mb-xs-20 mb-0 mr-xs-0 mr-30" type="submit">Inloggen</button>
                    <router-link class="bold-text" to="/register/">Account aanmaken</router-link>
                </div>
            </form>
        </div>
    </div>
</div>
</main>
</body>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  components: {},
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      showError: false
    }
  },
  methods: {
    ...mapActions(['LogIn']),
    async submit () {
      const User = new FormData()
      User.append('username', this.form.username)
      User.append('password', this.form.password)
      try {
        await this.LogIn(User)
        this.$router.push('/')
        this.showError = false
      } catch (error) {
        this.showError = true
      }
    }
  }
}
</script>
