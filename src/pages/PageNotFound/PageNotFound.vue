<template lang="pug">
.not-found
  h1 {{content.title}}
</template>

<script lang="ts">
  import '@/pages/PageNotFound/PageNotFound.scss';
  import {defineComponent} from 'vue';
  import {useStore} from 'vuex';

  export default defineComponent({
    name: 'PageNotFound',
    setup() {

      const store = useStore();
      const content = store.getters.currentPageContent.content;

      return {
        store,
        content
      }
    }
  });
</script>
