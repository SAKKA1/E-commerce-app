<template>
  <div class="new-products">
    <h3 class="text-red font-weight-bold ms-5 mt-10">New Products</h3>
    <v-container fluid>
      <v-row>
        <v-col class="d-flex align-center justify-center" cols="7">
          <Swiper
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :modules="modules"
            :autoplay="{ delay: 3000 }"
            :slides-per-view="3"
            :space-between="10"
            class="pb-10"
          >
            <Swiper-slide v-for="product in products" :key="product.id">
              <v-card
                elevation="0"
                class="d-flex flex-column justify-content-between"
              >
                <img
                  :src="
                    showenItem[product.title]
                      ? showenItem[product.title]
                      : product.thumbnail
                  "
                  alt=""
                  width="350"
                  height="200"
                />
                <v-card-text class="ps-0">
                  ({{ product.title }})
                  {{
                    product.description.split(" ").length <= 10
                      ? product.description
                      : product.description.split(" ").slice(0, 9).join(" ") +
                        "..."
                  }}
                </v-card-text>
                <v-rating
                  class="mb-2 ms-0"
                  v-model="product.rating"
                  half-increments
                  color="yellow-darken-3"
                  size="small"
                  readonly
                ></v-rating>
                <v-card-text class="ps-0 pt-1 price">
                  <span>
                    ${{
                      Math.trunc(
                        product.price -
                          product.price * (product.discountPercentage / 100)
                      )
                    }}
                  </span>
                  <del class="text-danger">${{ product.price }}</del>
                </v-card-text>
                <v-btn-toggle
                  v-model="showenItem[product.title]"
                  class="mb-2 ps-0"
                >
                  <v-btn
                    v-for="(pic, i) in product.images"
                    :value="pic"
                    :key="i"
                    size="small"
                    ><img
                      :src="pic"
                      alt=""
                      width="30"
                      height="30"
                      style="border-radius: 50%"
                      density="combact"
                  /></v-btn>
                </v-btn-toggle>
                <div class="button">
                  <v-btn class="border mb-5 px-10 py-1">Chose Option</v-btn>
                </div>
              </v-card>
            </Swiper-slide>
            <div class="swiper-pagination"></div>
          </Swiper>
        </v-col>
        <v-col cols="5">
          <img src="../../assets/images/vr-banner.webp" class="w-100" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Autoplay } from "swiper";
export default {
  data: () => ({
    showenItem: {},
    src: null,
  }),
  props: {
    products: {
      type: Array,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {},
  methods: {},
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
};
</script>
<style scoped>
.price span {
  font-size: 20px;
  font-weight: bold;
}
.button button {
  border-radius: 20px;
}
</style>
