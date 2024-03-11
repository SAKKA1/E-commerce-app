<template>
  <v-container fluid class="parent text-center text-white">
    <h3 class="pt-5"><span>Why Shop </span>With us?</h3>
    <v-row>
      <v-col cols="3">
        <v-card class="bg-transparent text-white" elevation="0">
          <div class="d-flex justify-center align-center flex-column p-5">
            <img
              src="../../assets/images/free-shipping.png"
              alt=""
              class="mb-5"
            />
            <v-card-title> Free Shipping On First Order</v-card-title>
            <v-card-text>Preasent suscipit mattis facilisis</v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="bg-transparent text-white" elevation="0">
          <div class="d-flex justify-center align-center flex-column p-5">
            <img
              src="../../assets/images/weekly-flash-sales.png"
              alt=""
              class="mb-5"
            />
            <v-card-title> Weekly Flash Sale</v-card-title>
            <v-card-text>Preasent suscipit mattis facilisis</v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="bg-transparent text-white" elevation="0">
          <div class="d-flex justify-center align-center flex-column p-5">
            <img src="../../assets/images/discount.png" alt="" class="mb-5" />
            <v-card-title> Anual payment Discount</v-card-title>
            <v-card-text>Preasent suscipit mattis facilisis</v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="bg-transparent text-white" elevation="0">
          <div class="d-flex justify-center align-center flex-column p-5">
            <img src="../../assets/images/cash-back.png" alt="" class="mb-5" />
            <v-card-title>Cashback Reward Program</v-card-title>
            <v-card-text>Preasent suscipit mattis facilisis</v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {};
</script>
<style scoped>
span {
  color: rgb(131, 240, 242);
}
h3 {
  font-weight: 900;
}
.parent {
  background-image: url("../../assets/images/why-shop-with-us-banner.webp");
  background-size: cover;
}
</style>
