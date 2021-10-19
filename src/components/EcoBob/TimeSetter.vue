+<template>
    <div onload="GetCurrentTime()">
        <small>Selecteer hier nieuwe tijd automatisch bericht.</small>	
        <vue-timepicker v-model="this.TimeValue" format="HH:mm:ss"></vue-timepicker>

        <small> huidige tijd automatische post:    <script type="text/javascript">
        document.write(currentTime)
      </script></small>

        <button (click)="SetTime()">
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { twitterbotService } from "@/services/TwitterbotService"

@Component({})
export default class TimeSetter extends Vue {
    private TimeValue: String = "";
GetCurrentTime(){
   twitterbotService.GetCurrentTime().then((res) => {
        this.TimeValue = res;
      });
}
SetTime(){
    twitterbotService.SetCurrentTime(this.TimeValue);
}
}

</script>