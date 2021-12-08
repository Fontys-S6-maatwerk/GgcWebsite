<template>
    <div class="profile">
        <ProfileUser :user_id="user_id" :user="user"/>
        <ProfileContent :user="user"/>
        <ProfileLinks :user_id="user_id" :user="user"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ProfileUser from '../components/Profile/ProfileUser.vue'
import ProfileContent from '../components/Profile/ProfileContent.vue'
import ProfileLinks from '../components/Profile/ProfileLinks.vue'

@Component({
  components: {
    ProfileUser,
    ProfileContent,
    ProfileLinks
  },
  // example data needed for profile page
  data: () => ({
    user_id: 2,
    user: {
      avatar: 'https://media.istockphoto.com/photos/cute-panda-bear-climbing-in-tree-picture-id523761634?k=20&m=523761634&s=612x612&w=0&h=fycQb31QlRoNLdJWWddooJ94a-54YLYQ3ggTLPkhvmk=',
      name: 'robin bauwvers',
      city: 'eindhoven',
      country: 'the netherlands',
      firstname: 'Robin',
      id: 1,
      twitter: 'robin',
      facebook: 'robin',
      instagram: 'robin',
      email: 'robin@mail.com',
      followers: 12,
      content_count: 1,
      bio: 'ICT & Media Design student, developer van Global Goals Community. Freelance web designer & developer @ https://weave-development.com/',
      user_content: [{
        title: 'Waarom het kopen van een regenton een goede investering is',
        shortDescription: 'Veel mensen vinden een regenton vaak een groot en lomp ding die alleen maar in de weg staat. Echter, is dit totaal niet zo! Met een regenton in je tuin doe je niet alleen jezelf, maar ook de natuur een plezier. Regentonnen hebben namelijk veel voordelen.',
        slug: 'something text or so',
        created: 'Tue 1 December 2020 10:51 uur',
        views: 10,
        likes: 12,
        comments: 2,
        image: 'https://globalgoalscommunity.eu/public/assets/content/header/13-header.jpg',

        sdgs: [{
          id: 1,
          number: 'two',
          title: 'schoon'
        }]
      }]
    }
  })
})
export default class Profile extends Vue {}
</script>

<style>
.profile {
    .user-profile-image-container {
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 5000;
        top: 0;
        background-color: rgba(0,0,0,0.5);
        display: none;

        .user-profile-image-large {
            width: 70rem;
            height: 70rem;
            border-radius: $global-border-radius;
            box-shadow: $global-box-shadow;

            @include breakpoint ('bp-lg') {
                width: 60rem;
                height: 60rem;
            }

            @include breakpoint ('bp-md') {
                width: 50rem;
                height: 50rem;
            }

            @include breakpoint ('bp-sm') {
                width: 40rem;
                height: 40rem;
            }

            @include breakpoint ('bp-xs') {
                width: 30rem;
                height: 30rem;
            }
        }

        .exit-image {
            position: absolute;
            right: 2rem;
            top: 2rem;
            background-color: $offwhite;
            border-radius: $global-border-radius;
            box-shadow: $global-box-shadow;

            &:hover {
                cursor: grab;
                background-color: #05A66B;
                color: $offwhite;
            }

            .exit-image-icon {
                width: 4rem;
                height: 4rem;
                font-weight: bold;

                @include breakpoint ('bp-xs') {
                    width: 2rem;
                    height: 2rem;
                    font-weight: regular;
                }
            }
        }
    }

    .user-header {
        .user-follow {
            .user-social-link {
                transition: $global-transition;

                &:hover {
                    color: #05A66B;
                }
            }
        }

        .user-profile-image {
            @include circle(20rem);
            box-shadow: $global-box-shadow;

            &:hover {
                cursor: grab;
            }
        }

        .user-statistics {
            .user-statistic {
                display: inline-block;
            }
        }
    }

    .user-socials-container {
        .user-social {
            transition: $global-transition;

            &:hover {
                color: #05A66B;
            }
        }
    }
}
</style>
