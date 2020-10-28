<template lang="pug">
.not-found
  h1 {{content.title}}
</template>

<script lang="ts">
  import '@/pages/PageNotFound/PageNotFound.scss';
  import {defineComponent} from 'vue';
  import {useStore} from '@/store';

  export default defineComponent({
    name: 'PageNotFound',
    setup() {

      const store = useStore();
      const content = store.getters.currentPageDate.content;

      return {
        store,
        content
      }
    }
  });
</script>
