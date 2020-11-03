<template lang="pug" src="../../shared/pages/BasePage.pug"></template>

<script lang="ts">
  import {defineComponent} from 'vue';
  import {vuexStore} from '@/repositories';

  export default defineComponent({
    name: 'Rules',
    setup() {

      return {
        content: vuexStore.getCurrentPageContent()
      }
    },
  });
</script>
