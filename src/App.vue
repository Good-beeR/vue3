<template lang="pug">
.app-over(v-show="!isLoading")
  NavLayout
  router-view
Preloader(v-show="isLoading")
</template>

<script lang="ts">
  import '@/App.scss'
  import {defineComponent, computed} from "vue";
  import NavLayout from "@/containers/NavLayout/NavLayout.vue";
  import Preloader from "@/components/Preloader/Preloader.vue";
  import {useStore} from '@/store';

  export default defineComponent({
    name: "App",
    components: {NavLayout, Preloader},

    setup() {
      const store = useStore();
      const isLoading = computed(() => store.state.isLoading);
      return {
        store,
        isLoading
      }
    },
  });
</script>