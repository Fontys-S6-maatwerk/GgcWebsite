<template>
    <div class="page-content">
        <div class="user-content py-md-40 py-100">
            <div class="container">
                <div class="content">
                    <h2 class="mb-40">
                        Content van {{ user.firstname }}
                    </h2>

                    <div class="user-content-results mb-40">
                        <template v-if="!user.avatar">
                        {{ user.content_count == 1 ? 'Er is ' + user.content_count + ' resultaat' : 'Er zijn ' + user.content_count + ' resultaten'}}
                        </template>
                    </div>

                    <div v-if="user.user_content" class="user-content-container">
                        <div class="row">
                            <div v-for="(content, i) in user.user_content" :key="i" class="col-xl-3 col-lg-4 col-md-6">
                            <!-- content changed from twig source code -->
                                <a class="card mb-30">
                                    <div class="card-image position-relative callout lazyloaded" :class="!content.image ? 'background-offwhite' : ''" :style="content.image ? 'background-image: url(' + content.image + ')' : ''">
                                        <div class="card-user-image position-absolute callout lazyloaded" :style="user.avatar ? 'background-image: url(' + user.avatar + ')' : ''">

                                        </div>
                                    </div>

                                    <div class="card-info">
                                        <h4>{{ content.title }}</h4>
                                        <div class="data">{{ content.created|date("l j F Y \\o\\m H:i \\u\\u\\r") }}</div>
                                        <div class="content-short">{{ content.shortDescription }}</div>
                                        <div class="sdgs">
                                            <span v-for="(sdg, index) in content.sdgs" :key="index" class="label mb-10" :class="'sdg-' + sdg.number">
                                                {{ sdg.id }}.
                                            </span>
                                        </div>
                                        <hr>
                                        <div class="stats flex">
                                            <div class="statistic statistic-liked"><i class="fa fa-heart"></i> {{ content.likes }} likes </div>
                                            <div class="statistic statistic-viewed"><i class="fa fa-eye"></i> {{ content.views }} views </div>
                                            <div class="statistic statistic-commented"><i class="fa fa-comment"></i> {{ content.comments }} comments </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <a v-if="user.content > 3" href="#" class="btn btn-primary">
                                Ik wil meer content van John zien
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SdgColors from '@/data/SdgColors'

@Component({
  props: {
    user: Object
  }
})
export default class ProfileContent extends Vue {}
</script>

<style>
.content-overview-container {
    box-shadow: $global-box-shadow;
    border-radius: $global-border-radius;
    background-color: $white;

    .content-overview-image {
        height: 18rem;
        overflow: hidden;
        border-radius: $global-border-radius $global-border-radius 0 0;

        img {
            height: auto;
            object-fit: fill;
        }

        &.content-overview-image-lg {
            height: 28rem;

            @include breakpoint ('bp-md') {
                height: 20rem;
            }
        }
    }

    .content-overview-information {
        h3 {
            height: 12.4rem;
            overflow: hidden;

            @include breakpoint ('bp-md') {
                height: 9rem
            }
        }
        .overview-writer {
            a {
                color: $black;
            }
        }

        .overview-date {
            color: $gray;
        }

        .overview-intro {
            &.height-md {
                position: relative;
                height: 7.1rem;
                overflow: hidden;

                &:after {
                    content: "";
                    text-align: right;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 70%;
                    height: 2.4rem;
                    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
                }
            }

            &.height-lg {
                position: relative;
                height: 13.6rem;
                overflow: hidden;

                &:after {
                    content: "";
                    text-align: right;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 70%;
                    height: 2.4rem;
                    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
                }
            }
        }
    }

    .content-overview-actions {
        .overview-statistics {
            .statistic {
               display: inline-block;
               color: $gray;
            }
        }
    }

    &.content-overview-inverted {
        h3, .overview-writer, .overview-date, .overview-intro {
            color: $white;

            a {
                color: $white;
            }
        }

        .overview-intro {
            &.height-lg {
                &:after {
                    background: linear-gradient(to right, rgba(255, 255, 255, 0), #05A66B 50%);
                }
            }
        }

        .overview-sdg {
            .label {
                background-color: #05A66B;
                border: .2rem solid $white;
            }
        }
    }
}
</style>
