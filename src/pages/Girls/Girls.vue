<template lang="pug">
.coomeet-over
  .app-over
    #coomeet_container.pay-app
    h1 {{content.title}}
  .article(v-html="content.pageContent")
</template>

<script lang="ts">
  import {defineComponent, onMounted} from "vue";
  import {useStore} from "vuex";
  import '@/pages/Girls/Girls.scss';

  export default defineComponent({
    name: "Girls",
    setup() {
      const store = useStore();
      const content = store.getters.currentPageContent.content;

      onMounted(() => {
        const script = document.createElement('script');
        script.onload = function() {
          console.log('coomeet app init')
        };
        script.src = "https://iframe.coomeet.com/js/code.js";
        document.getElementsByTagName('head')[0].appendChild(script);
      });

      return {
        store,
        content,
      }
    },
  });
</script>
