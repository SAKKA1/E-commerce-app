import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    lapTops: [],
    phones: [],
    decoration: [],
    catproducts: [],
    categories: [
      {
        title: "Smartphones",
        route: "smartphones",
      },
      {
        title: "Laptops",
        route: "laptops",
      },
      {
        title: "Fragrances",
        route: "fragrances",
      },
      {
        title: "Skincare",
        route: "skincare",
      },
      {
        title: "Furniture",
        route: "furniture",
      },
      {
        title: "Lighting",
        route: "lighting",
      },
    ],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          this.flashDeals = res.data.products;
          this.lapTops = res.data.products.filter(
            (el) => el.category === "laptops"
          );
          this.phones = res.data.products.filter(
            (el) => el.category === "smartphones"
          );
          this.decoration = res.data.products.filter(
            (el) => el.category === "home-decoration"
          );
        })
        .catch((err) => console.log(err));
    },
    async getProductsByCat(cat) {
      await axios
        .get(`https://dummyjson.com/products/category/${cat}`)
        .then((res) => (this.catproducts = res.data));
    },
  },
});
