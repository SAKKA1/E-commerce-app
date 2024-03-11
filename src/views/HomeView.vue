<template>
  <upper-banner></upper-banner>
  <TheFeatures></TheFeatures>
  <TopOffers></TopOffers>
  <FlashDeals :products="flashDeals" title="Flash Deals"></FlashDeals>
  <top-catogories></top-catogories>
  <new-products :products="lapTops"></new-products>
  <quality-features></quality-features>
  <FlashDeals :products="phones" title="Top Smart Phones"></FlashDeals>
  <div class="phone-banner row">
    <div class="col-6 p-3">
      <img
        src="../assets/images/band-left-cover.webp"
        alt=""
        style="width: 100%"
      />
    </div>
    <div class="col-6 p-3">
      <img
        src="../assets/images/band-right-cover.webp"
        alt=""
        style="width: 100%"
      />
    </div>
  </div>
  <FlashDeals :products="decoration" title="Home Applications"></FlashDeals>
  <div class="row">
    <div class="col-12 p-3">
      <img src="../assets/images/tv-banner.webp" alt="" width="100%" />
    </div>
  </div>
  <WhyShoppingWithUs></WhyShoppingWithUs>
</template>

<script>
import UpperBanner from "@/components/Home-page/UpperBanner.vue";
import TheFeatures from "@/components/Home-page/TheFeatures.vue";
import TopOffers from "@/components/Home-page/TopOffers.vue";
import FlashDeals from "@/components/Home-page/FlashDeals.vue";
import TopCatogories from "@/components/Home-page/TopCatogories.vue";
import NewProducts from "@/components/Home-page/NewProducts.vue";
import QualityFeatures from "@/components/Home-page/QualityFeatures.vue";
import WhyShoppingWithUs from "@/components/Home-page/WhyShoppingWithUs.vue";
import { productsModule } from "@/store/Products";
import { mapActions, mapState } from "pinia";

export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    FlashDeals,
    TopCatogories,
    NewProducts,
    QualityFeatures,
    WhyShoppingWithUs,
  },
  computed: {
    ...mapState(productsModule, [
      "flashDeals",
      "lapTops",
      "phones",
      "decoration",
    ]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  mounted() {
    this.getProducts();
  },
};
</script>
