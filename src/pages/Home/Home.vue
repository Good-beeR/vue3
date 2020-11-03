<template lang="pug">
.content
  h1.app-title {{content.title}}
  FreeApp

.article(v-html="content.pageContent")
</template>

<script lang="ts">
  import {defineComponent} from 'vue';
  import '@/pages/Home/Home.scss';
  import FreeApp from '@/components/FreeApp/FreeApp.vue';
  import {vuexStore} from '@/repositories';

  export default defineComponent({
    name: 'Home',
    components: {FreeApp},
    setup() {

      return {
        content: vuexStore.getCurrentPageContent()
      }
    }
  });
</script>
