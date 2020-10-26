<template lang="pug" src="../../shared/pages/BasePage.pug"></template>

<script lang="ts">
  import {defineComponent} from "vue";
  import {useStore} from "vuex";

  export default defineComponent({
    name: "Privacy",
    setup() {

      const store = useStore();
      const content = store.getters.currentPageContent.content;

      return {
        store,
        content
      }
    },
  });
</script>
