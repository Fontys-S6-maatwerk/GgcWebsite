
// Additional flags can be downloaded from https://www.flaticon.com/packs/international-flags-6?word=country%20flags

<template lang="">
    <div class="language-picker mb-xs-20">
        <span class="flex align-center" @click="toggleDropdown()">
            <img :src="flags[lang]">
            <i class="fas fa-angle-down ml-15"></i>
        </span>

        <div v-if="isDropdownOpen" class="lang-options" aria-labelledby="dropdownMenuButton">
            <div v-for="language in languages" :key="language.code" class="option" @click="setLanguage(language.code)">
                <img :src="flags[language.code]">
                {{ language.name }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import { bus } from '@/main'
import flags from '../../assets/images/lang'

export default Vue.extend({
  name: 'LanguagePicker',
  data () {
    const lang = localStorage.getItem('lang') || 'en'
    console.log(localStorage.getItem('lang'))
    console.log(lang)
    return {
      isDropdownOpen: false as boolean,
      lang: lang,
      flags,
      languages: [
        {
          name: 'Nederlands',
          code: 'nl'
        },
        {
          name: 'English',
          code: 'en'
        },
        {
          name: 'Deutsch',
          code: 'de'
        }
      ]
    }
  },
  methods: {
    toggleDropdown (): void {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    setLanguage (lang: string): void {
      this.isDropdownOpen = false
      this.lang = lang
      localStorage.setItem('lang', lang)
      bus.$emit('set-language', lang)
    }
  }
})
</script>

<style lang="css" scoped>
.language-picker {
    position: relative;
}

.lang-options {
  position: absolute;
  top: 4rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  padding: 0.5rem 0;
  background-color: #fff;
  transform: translateX(-50%);
  left: 50%;
}

.lang-options > .option {
  padding: 1rem 1.5rem;
  display: flex;
  cursor: pointer;
}

.lang-options > .option:hover {
  background-color: rgba(0, 0, 0, 0.15);
}

.lang-options > .option > img {
  margin-right: 1rem;
  width: 32px;
  height: 22px;
  object-fit: contain;
}
</style>
