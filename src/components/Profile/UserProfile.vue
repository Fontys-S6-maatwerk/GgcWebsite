<template>
  <div>
  <div class="user-profile-image-container flex align-center justify-center">
        <div class="user-profile-image-large background-size-cover background-position-center margin-auto flex align-center justify-center background-white" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
            <template v-if="!user.avatar">
                <i class="fas fa-user fa-2x h1 text-gray"></i>
            </template>
        </div>

        <div class="exit-image flex align-center transition py-xs-5 px-xs-10 py-10 px-20">
            <p class="pr-xs-5 pr-20">Sluit foto</p>
            <i class="fas fa-times exit-image-icon"></i>
        </div>
    </div>

    <div class="page-header">
        <div class="container">
            <div class="content">
                <div class="user-header py-md-40 py-100">
                    <div class="row align-items-center flex-column-reverse flex-lg-row">
                        <div class="col-lg-8">
                            <h1 class="m-0 mt-md-40">
                                {{ user.name }}
                            </h1>

                            <template v-if="user_id">
                                <template v-if="user.city || user.country">
                                    <div class="user-location bold-text mb-20">
                                        <i class="fa fa-map-marker-alt"></i>
                                        {{ user.city }},
                                        {{ user.country }}
                                    </div>
                                </template>
                            </template>
                            <template v-else>
                            <div class="mt-20"></div>
                            </template>

                            <template v-if="user.bio">
                                <div class="row">
                                    <div class="col-lg-10">
                                        <div class="user-bio mb-20">
                                            {{ user.bio|slice(0, 300) }}
                                        </div>
                                    </div>
                                </div>
                            </template>

                            <div class="user-follow" :class="(!user.city || !user.country || !user.bio) ? 'mt-20' : ''">
                                <div class="row align-items-center">
                                    <template v-if="user_id && user_id != user.id">
                                        <div class="col-md-4">
                                            <span class="btn follow-user" :class="user.followed ? 'followed btn-orange' : 'btn-primary'"  :data-user-id="user.id" :data-user-name="user.firstname|capitalize">
                                                <i class="fas mr-10" :class="user.followed ? 'fa-user-check' : 'fa-user-plus'"></i> {{user.followed ? 'Ontvolg': 'Volg'}} {{ user.firstname|capitalize }}
                                            </span>
                                        </div>
                                    </template>

                                    <div class="col-md-8">
                                    <template v-if="user_id">
                                        <div class="row mt-md-20">
                                            <template v-if="user.twitter ">
                                                <div class="col-2">
                                                    <a :href="'https://twitter.com/' + user.twitter + '/'" class="user-social-link" target="_blank">
                                                        <i class="fab fa-twitter fa-2x"></i>
                                                    </a>
                                                </div>
                                            </template>

                                            <template v-if="user.instagram ">
                                                <div class="col-2">
                                                    <a :href="'https://instagram.com/' + user.instagram + '/'" class="user-social-link" target="_blank">
                                                        <i class="fab fa-instagram fa-2x"></i>
                                                    </a>
                                                </div>
                                            </template>

                                            <template v-if="user.facebook ">
                                                <div class="col-2">
                                                    <a :href="'https://facebook.com/' + user.facebook + '/'" class="user-social-link" target="_blank">
                                                        <i class="fab fa-facebook-square fa-2x"></i>
                                                    </a>
                                                </div>
                                            </template>

                                            <template v-if="user.email ">
                                                <div class="col-2">
                                                    <a :href="'mailto: ' + user.email" class="user-social-link">
                                                        <i class="fas fa-envelope fa-2x"></i>
                                                    </a>
                                                </div>
                                            </template>
                                        </div>
                                    </template>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="user-profile-image background-size-cover background-position-center margin-auto flex align-center justify-center background-white" v-bind:style="{ backgroundImage: 'url(' + user.avatar + ')' }">
                                <template v-if="!user.avatar ">
                                    <i class="fas fa-user h1 text-gray"></i>
                                </template>
                            </div>

                            <div class="user-statistics text-center mt-40">
                                <div class="user-statistic">
                                    <div class="user-statistic-counter follower-count h2">
                                        {{ user.followers }}
                                    </div>

                                    <div class="user-statistic-subject">
                                        {{user.followers == 1 ? 'volger' : 'volgers' }}
                                    </div>
                                </div>

                                <div class="user-statistic text-center ml-30">
                                    <div class="user-statistic-counter h2">
                                        {{ user.content_count }}
                                    </div>

                                    <div class="user-statistic-subject">
                                        {{user.content_count == 1 ? 'bijdrage' : 'bijdragen' }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
export default class UserProfile extends Vue {}
</script>

<style>
</style>
