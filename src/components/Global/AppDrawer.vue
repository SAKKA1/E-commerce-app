<template>
  <div class="drawer">
    <v-navigation-drawer v-model="drawer" location="right"
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
      voluptatem expedita pariatur cupiditate voluptates, autem error accusamus,
      optio illum, ex et enim aspernatur molestiae amet quaerat minima quod!
      Aliquam, aperiam.
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  inject: ["Emitter"],
  data: () => ({
    drawer: false,
  }),
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = !this.drawer;
    });
  },
};
</script>
