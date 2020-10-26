<template lang="pug">
.free-app
  .free-app__stream
    #cmtBox1
    #cmtBox2
  .free-app__chat
    .free-app-settings
    #cmtControl.free-app-control
      input#cmtStart.app-button.app-button--start(type="submit")
      input#cmtStop.app-button.app-button--stop(type="submit")
      input#cmtNext.app-button.app-button--next(type="submit")
    .free-app-messages
      #cmtMess.free-app-messages__container
      input#cmtMsg.free-app-messages__input(type="text")
</template>

<script lang="ts">
  import '@/components/FreeApp/FreeApp.scss';
  import {defineComponent} from "vue";

  export default defineComponent({
    name: "FreeApp",
  });
</script>
