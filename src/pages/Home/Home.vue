<template lang="pug">
.content
  h1.app-title {{content.title}}
  FreeApp

.article(v-html="content.pageContent")
</template>

<script lang="ts">
  import {defineComponent} from 'vue';
  import {useStore} from 'vuex';
  import '@/pages/Home/Home.scss';
  import FreeApp from '@/components/FreeApp/FreeApp.vue';

  export default defineComponent({
    name: 'Home',
    components: {FreeApp},
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
