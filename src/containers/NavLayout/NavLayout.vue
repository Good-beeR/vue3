<template lang="pug">
Nav(:iconDate="IconDate")
</template>

<script lang="ts">
  import {defineComponent} from 'vue';
  import Nav from '@/components/Nav/Nav.vue';
  import {navDate} from '@/shared/const/navDate';
  import {vuexStore} from '@/repositories';

  export default defineComponent({
    name: 'NavLayout',
    components: {Nav},

    setup() {
      vuexStore.setNavList(navDate);
      const IconDate = vuexStore.getNavList();

      return {
        IconDate
      }
    }
  });
</script>