<template>
  <div class="layout">
    <v-layout>
      <app-drawer></app-drawer>
      <app-nav></app-nav>
      <fixed-nav></fixed-nav>
      <app-main></app-main>
      <app-footer style="position: abslute"></app-footer>
    </v-layout>
  </div>
</template>
<script>
import AppDrawer from "./AppDrawer.vue";
import AppFooter from "./AppFooter.vue";
import AppMain from "./AppMain.vue";
import AppNav from "./AppNav.vue";
import FixedNav from "./FixedNav.vue";
export default {
  data: () => {},
  components: {
    AppDrawer,
    AppFooter,
    AppMain,
    AppNav,
    FixedNav,
  },
};
</script>
