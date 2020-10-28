<template lang="pug" src="../../shared/pages/BasePage.pug"></template>

<script lang="ts">
  import {defineComponent} from 'vue';
  import {useStore} from '@/store';

  export default defineComponent({
    name: 'Privacy',
    setup() {

      const store = useStore();
      const content = store.getters.currentPageDate.content;

      return {
        store,
        content
      }
    },
  });
</script>
