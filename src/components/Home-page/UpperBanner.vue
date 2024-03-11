<template>
  <div class="parent">
    <v-container>
      <v-row>
        <v-col cols="6">
          <div class="discreption">
            <h1>
              <span>Huge Saving</span> on<br />
              UHD Televisions
            </h1>
            <p>Sale up to 70% off on selected items*</p>
            <v-btn class="shop-btn">Shop Now</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.parent {
  background-image: url("../../assets/images/banner-bg.jpg");
  background-size: cover;
  width: 100%;
  height: 500px;
  margin-top: 160px;
  .discreption {
    padding: {
      left: 100px;
      top: 100px;
    }
    h1 {
      margin-bottom: 30px;
      font: {
        size: 60px;
        weight: bold;
      }
      color: white;
      span {
        color: #10ffda;
      }
    }
    p {
      color: white;
      font-size: 20px;
      margin-bottom: 30px;
    }
  }
  .shop-btn {
    color: white;
    height: 50px;
    width: 150px;
    border: {
      size: 1px;
      radius: 30px;
    }
    border: 1px solid;
    background-color: transparent;
  }
}
</style>
