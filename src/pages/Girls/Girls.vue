<template lang="pug">
.coomeet-over
  .app-over
    #coomeet_container.pay-app
    h1 {{content.title}}
  .article(v-html="content.pageContent")
</template>

<script lang="ts">
  import {defineComponent, onMounted} from 'vue';
  import '@/pages/Girls/Girls.scss';
  import {vuexStore} from '@/repositories';

  export default defineComponent({
    name: 'Girls',
    setup() {
      onMounted(() => {
        const script = document.createElement('script');
        script.src = 'https://iframe.coomeet.com/js/code.js';
        document.getElementsByTagName('head')[0].appendChild(script);
      });

      return {
        content: vuexStore.getCurrentPageContent()
      }
    },
  });
</script>
