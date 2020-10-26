<template lang="pug">
Nav(:iconDate="IconDate")
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import Nav from "@/components/Nav/Nav.vue";
  import {useStore} from "vuex";
  import {GET_NAV_DATE} from "@/shared/const/store.types";
  import {navDate} from "@/shared/const/navDate";

  export default defineComponent({
    name: "NavLayout",
    components: {Nav},

    setup() {
      const store = useStore();
      store.dispatch(GET_NAV_DATE, navDate);
      const IconDate = useStore().state.navState;

      return {
        IconDate
      }
    }
  });
</script>