<template>
  <v-container fluid class="bg-light">
    <v-row class="offer">
      <v-col cols="4">
        <div>
          <img
            src="../../assets/images/playstations.webp"
            alt=""
            width="100%"
          />
        </div> </v-col
      ><v-col cols="4">
        <div>
          <img src="../../assets/images/headset.webp" alt="" width="100%" />
        </div> </v-col
      ><v-col cols="4">
        <div>
          <img src="../../assets/images/chairs.webp" alt="" width="100%" />
        </div>
      </v-col>
      <v-col cols="6">
        <div>
          <img src="../../assets/images/iphones.webp" alt="" width="100%" />
        </div>
      </v-col>
      <v-col cols="6">
        <div>
          <img src="../../assets/images/laptops.webp" alt="" width="100%" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.offer {
  div {
    overflow: hidden;
    border-radius: 10px;
  }
}
img {
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    scale: 1.05;
  }
}
</style>
