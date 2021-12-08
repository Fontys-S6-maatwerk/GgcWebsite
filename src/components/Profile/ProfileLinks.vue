<template>
    <div class="user-content py-md-40 py-100">
            <div class="container">
                <div class="content">
                    <h2 class="mb-40">
                        Contact opnemen met {{ user.firstname }}
                    </h2>

                    <div class="user-socials-container">
                        <div class="row">
                        <template v-if="user_id">
                            <template v-if="user.twitter">
                                <div class="col-md-6 col-xl-3">
                                    <a :href="'https://twitter.com/' + user.twitter" class="user-social" target="_blank">
                                        <div class="row align-items-center mb-lg-20 mb-md-40">
                                            <div class="col-md-4">
                                                <i class="fab fa-twitter fa-5x"></i>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="bold-text">Twitter</div>
                                                <div>{{ user.twitter }}</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </template>

                            <template v-if="user.instagram">
                                <div class="col-md-6 col-xl-3">
                                    <a :href="'https://instagram.com/' + user.instagram" class="user-social" target="_blank">
                                        <div class="row align-items-center mb-lg-20 mb-md-40">
                                            <div class="col-md-4">
                                                <i class="fab fa-instagram fa-5x"></i>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="bold-text">instagram</div>
                                                <div>{{ user.instagram }}</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </template>

                            <template v-if="user.facebook">
                                <div class="col-md-6 col-xl-3">
                                    <a :href="'https://facebook.com/' + user.facebook" class="user-social" target="_blank">
                                        <div class="row align-items-center mb-lg-20 mb-md-40">
                                            <div class="col-md-4">
                                                <i class="fab fa-facebook fa-5x"></i>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="bold-text">facebook</div>
                                                <div>{{ user.facebook }}</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </template>

                            <template v-if="user.email">
                                <div class="col-md-6 col-xl-3">
                                    <a :href="'mailto:' + user.email" class="user-social" target="_blank">
                                        <div class="row align-items-center mb-lg-20 mb-md-40">
                                            <div class="col-md-4">
                                                <i class="fas fa-envelope fa-5x"></i>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="bold-text">E-mailadres</div>
                                                <div>{{ user.email }}</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </template>
                        </template>
                        <template v-else>
                            <div class="col-md-10">
                                    Om met {{ user.firstname }} contact op te nemen dien je ingelogd te zijn met een account. Je kan hier <a href="/login/" class="bold-text">inloggen</a> of <a href="/register/" class="bold-text">registreren.</a>
                            </div>
                        </template>
                    </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    user_id: Number,
    user: Object
  }
})
export default class ProfileLinks extends Vue {}
</script>

<style>
</style>
