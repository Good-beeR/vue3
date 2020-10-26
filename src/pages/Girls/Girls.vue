<template lang="pug">
.coomeet-over
  .app-over
    #coomeet_container.pay-app
    h1 {{content.title}}
  .article(v-html="content.pageContent")
</template>

<script lang="ts">
  import {defineComponent, onMounted, ref} from "vue";
  import {useStore} from "vuex";
  import './Girls.scss';
  import {loadAsync} from "../../shared/utils/loadAsync";

  export default defineComponent({
    name: "Girls",
    setup() {
      const store = useStore();
      const content = store.getters.currentPageContent.content;

      onMounted(() => {
          loadAsync('https://iframe.coomeet.com/js/code.js', () => {

          });
      });

      return {
        store,
        content,
      }
    },
  });
</script>
