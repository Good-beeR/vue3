<template lang="pug" src="../../shared/pages/BasePage.pug"></template>

<script lang="ts">
  import {defineComponent, onBeforeMount, ref} from 'vue';
  import {initDate} from '@/shared/const/initDate';
  import getPostData from '@/composition/compositionGetPostDate';

  export default defineComponent({
    name: 'Privacy',
    setup() {
      const content = ref(initDate);
      const getPost = async () => {
        content.value = await getPostData();
      }

      onBeforeMount (getPost);

      return {
        content
      }
    },
  });
</script>
