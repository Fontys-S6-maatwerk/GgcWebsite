+<template>
    <div onload="GetCurrentTime()">
        <small>Selecteer hier nieuwe tijd automatisch bericht.</small>	
        <vue-timepicker v-model="TimeValue" format="HH:mm:ss"></vue-timepicker>

        <small> huidige tijd automatische post:    <script type="text/javascript">
        document.write(currentTime)
      </script></small>

        <button (click)="SetTime()">
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class TimeSetter extends Vue {
    private currentTime: String = "";
GetCurrentTime(){
    //get data from service
    //currentime = data
}
SetTime(){
    //datastuff met TimeValue
}
}

</script>