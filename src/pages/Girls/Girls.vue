<template lang="pug">
.coomeet-over
  .app-over
    PayApp
    h1 {{content.title}}
  .article(v-html="content.pageContent")
</template>

<script lang="ts">
  import {defineComponent, onBeforeMount, ref} from 'vue';
  import '@/pages/Girls/Girls.scss';
  import {initDate} from '@/shared/const/initDate';
  import getPostData from '@/composition/compositionGetPostDate';
  import PayApp from '@/components/PayApp/PayApp.vue';

  export default defineComponent({
    name: 'Girls',
    components: {PayApp},
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
