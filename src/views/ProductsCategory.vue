<template>
  <div class="cat text-center" style="padding-top: 170px">
    <h1>{{ $route.params.title }}</h1>
    <v-container fluid>
      <v-row>
        <v-col
          cols="3"
          v-for="product in catproducts.products"
          :key="product.title"
        >
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
                  : product.description.split(" ").slice(0, 9).join(" ") + "..."
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
            <v-btn-toggle v-model="showenItem[product.title]" class="mb-2 ps-0">
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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { productsModule } from "../store/Products";

export default {
  data() {
    return {
      showenItem: {},
    };
  },
  methods: {
    ...mapActions(productsModule, ["getProductsByCat"]),
  },
  computed: {
    ...mapState(productsModule, ["catproducts"]),
  },
  async mounted() {
    await this.getProductsByCat(this.$route.params.category);
  },
  watch: {
    $route() {
      document.documentElement.scrollTo(0, 0);
      this.getProductsByCat(this.$route.params.category);
    },
  },
};
</script>
<style scoped>
.button button {
  border-radius: 20px;
}
</style>
