<template lang="pug">
i.icon(:style="{background: 'url(' + icon + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}")
</template>

<script lang="ts">
  import '@/components/Icon/Icon.scss';
  import {defineComponent} from "vue";

  export default defineComponent({
    name: "Icon",
    props: {
      icon: String,
    }
  });
</script>
