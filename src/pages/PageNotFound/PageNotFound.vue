<template lang="pug">
.not-found
  h1 {{content.title}}
</template>

<script lang="ts">
  import '@/pages/PageNotFound/PageNotFound.scss';
  import {defineComponent, onBeforeMount, ref} from 'vue';
  import {initDate} from '@/shared/const/initDate';
  import getPostData from '@/composition/compositionGetPostDate';

  export default defineComponent({
    name: 'PageNotFound',
    setup() {

      const content = ref(initDate);
      const getPost = async () => {
        content.value = await getPostData();
      }

      onBeforeMount (getPost);

      return {
        content
      }
    }
  });
</script>
