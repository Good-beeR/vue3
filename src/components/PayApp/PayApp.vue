<template lang="pug">
#coomeet_container.pay-app
</template>

<script lang="ts">
  import '@/components/PayApp/PayApp.scss';
  import {defineComponent, onMounted} from 'vue';

  export default defineComponent({
    name: 'PayApp',

    setup() {
      onMounted(async () => {
        const script = document.createElement('script');
        script.src = 'https://iframe.coomeet.com/js/code.js';
        document.getElementsByTagName('head')[0].appendChild(script);
      });
    }
  });
</script>
