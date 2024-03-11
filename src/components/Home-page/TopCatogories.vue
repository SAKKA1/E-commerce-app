<template>
  <div class="top-cart">
    <div class="bannar">
      <img src="../../assets/images/cyber-banner.webp" alt="" />
    </div>
    <div class="catogories">
      <h2 class="text-red font-weight-bold my-10 ms-5">Top Catogories</h2>
      <v-container fluid>
        <v-row>
          <v-col cols="2" v-for="cat in catogories" :key="cat.title">
            <v-card
              style="cursor: pointer"
              class="border-0 text-center cat-card"
              elevation="0"
            >
              <img :src="cat.img" alt="" class="w-100 p-3" />
              <v-card-text>
                {{ cat.title }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      catogories: [
        {
          title: "Mobile Phones",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
        },
        {
          title: "Labtops",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
        },
        {
          title: "PCs",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
        },
        {
          title: "TVS",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
        },
        {
          title: "Audio & Video ",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
        },
        {
          title: "Gaming",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
        },
        {
          title: "Home Appliances",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
        },
        {
          title: "Kitchen",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
        },
        {
          title: "Cameras",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
        },
        {
          title: "Consumables",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
        },
        {
          title: "Smart Homes",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
        },
        {
          title: "Accessories",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.catogories {
  overflow: hidden;
}
.cat-card img {
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }
}
</style>
