<template>
  <div>
    <h1>EcoBob Beheer</h1>
    <TimeSetter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TimeSetter from '../components/EcoBob/TimeSetter.vue'
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'
@Component({
  components: {
    TimeSetter
  }
})
export default class BotAdminPage extends Vue {}
</script>
