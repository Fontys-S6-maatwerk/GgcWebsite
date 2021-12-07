<template>
  <div onload="GetCurrentTime()">
    <small>Selecteer hier nieuwe tijd automatisch bericht.</small>
    <br />
    <input type="radio" v-model="TimeValue" value="09,00">9 uur
    <input type="radio" v-model="TimeValue" value="12,00">12 uur
    <input type="radio" v-model="TimeValue" value="16,00">4 uur

    <small> huidige tijd automatische post: {{ this.TimeValue }} </small>

    <br />

    <button v-on:click="SetTime()">Bevestigen</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { twitterbotService } from '@/services/TwitterbotService'
import { TweetTimeDTO } from '@/dto/TweetTimeDTO'

@Component({

})
export default class TimeSetter extends Vue {
  TimeValue = '';
  TweetTime = new TweetTimeDTO();

  beforeMount () {
    twitterbotService.GetCurrentTime().then((res) => {
      this.TimeValue = res as string
    })
  }

  SetTime () {
    this.TweetTime.TweetTime = this.TimeValue
    twitterbotService.SetCurrentTime(this.TweetTime)
  }
}
</script>
