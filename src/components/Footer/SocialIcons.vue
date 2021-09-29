<template>
    <div class="socials mb-40">
        <a v-for="icon in icons" :key="icon.name" class="mr-20" :href="icon.href" :title="icon.name" target="_blank">
            <i :class="icon.class"></i>
        </a>
    </div>
</template>

<script lang="ts">
export default {
  data (): Record<string, unknown> {
    return {
      icons: [
        {
          name: 'LinkedIn',
          class: 'fab fa-linkedin',
          href: 'https://www.linkedin.com/company/globalgoalscommunity/'
        },
        {
          name: 'Instagram',
          class: 'fab fa-instagram',
          href: 'https://www.instagram.com/globalgoalseu/'
        },
        {
          name: 'Facebook',
          class: 'fab fa-facebook-square',
          href: 'https://www.facebook.com/Global-Goals-Community-103046594774238'
        },
        {
          name: 'Email',
          class: 'far fa-envelope',
          href: 'mailto:info@globalgoalscommunity.eu'
        }
      ]
    }
  }
}
</script>
