<template lang="pug">
.content
  h1.app-title {{content.title}}
  FreeApp

.article(v-html="content.pageContent")
</template>

<script lang="ts">
  import {defineComponent, onBeforeMount, ref} from 'vue';
  import '@/pages/Home/Home.scss';
  import FreeApp from '@/components/FreeApp/FreeApp.vue';
  import getPostData from '@/composition/compositionGetPostDate';
  import {initDate} from '@/shared/const/initDate';

  export default defineComponent({
    name: 'Home',
    components: {FreeApp},

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
