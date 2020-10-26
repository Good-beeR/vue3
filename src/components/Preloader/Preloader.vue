<template lang="pug">
.preload
  .preload__nav
    .preload-line
    .preload-line
    .preload-line
    .preload-line
  .preload__content
</template>

<script lang="ts">
  import './Preloader.scss';
  import {defineComponent} from "vue";

  export default defineComponent({
    name: "Preloader",
  });
</script>
