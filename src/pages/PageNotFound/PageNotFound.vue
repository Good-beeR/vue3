<template lang="pug">
.not-found
  h1 {{content.title}}
</template>

<script lang="ts">
  import '@/pages/PageNotFound/PageNotFound.scss';
  import {defineComponent} from 'vue';
  import {vuexStore} from '@/repositories';

  export default defineComponent({
    name: 'PageNotFound',
    setup() {

      return {
        content: vuexStore.getCurrentPageContent()
      }
    }
  });
</script>
