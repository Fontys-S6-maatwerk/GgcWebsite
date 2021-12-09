<template>
    <div v-if="isLoggedIn == true">
        <button v-on:click="handleLogout" class="btn btn-secondary ml-30 ml-xs-0">
          <span>{{ $t('Sign out') }}</span>
        </button>
    </div>
    <div v-else>
      <router-link to="/register/" class="btn-register bold-text ml-50 ml-xs-0 mb-xs-20">{{ $t('Register') }}</router-link>
      <router-link to="/login/" class="btn btn-secondary ml-30 ml-xs-0">{{ $t('Sign in') }}</router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const Auth = namespace('Auth')

@Component
export default class AuthButtons extends Vue {
    @Auth.Getter
    private isLoggedIn!: boolean

    @Auth.Action
    private signOut!: () => Promise<any>

    handleLogout () {
      this.signOut()
      this.$router.push('/login')
    }
}
</script>
