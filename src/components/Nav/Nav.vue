<template lang="pug">
nav.nav
  .nav__item(v-for="icon in iconDate")
    router-link(:to="icon.path")
      Icon.--common(:key="icon.name" :icon="icon.icon")
      Icon.--active(:key="icon.name" :icon="icon.iconActive")
</template>

<script lang="ts">
  import './Nav.scss'
  import {defineComponent, PropType} from "vue";
  import Icon from "../Icon/Icon.vue";
  import {IIconDate} from "../../types/types";

  export default defineComponent({
    name: "Nav",
    components: {Icon},
    props: {
      iconDate: Object as PropType<IIconDate>
    }
  });
</script>
