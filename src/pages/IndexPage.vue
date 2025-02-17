<template>
  <q-page class="column q-pb-xl">
    <div>
      <div>
        <q-img src="~assets/mainPage.jpg" style="object-fit: cover; width: 100%; height: 820px;"></q-img>
      </div>
      <div>
        <Vue3Marquee>
          <span class="text-h3" v-for="(word, index) in helloArray" :key="index">
            {{ word }}
          </span>
        </Vue3Marquee>
      </div>
      <div class="column q-my-xl items-center">
        <span class="text-h4 text-bold q-mb-md">TrendPick</span>
        <span>The name "trendPick" reflects our mission to help customers discover and pick the latest trends
          effortlessly.</span>
        <span>We curate a selection of high-quality, fashionable items at reasonable prices,</span>
        <span>carefully chosen to align with the latest styles.</span>
        <span class="q-my-md">Our goal is to help everyone find their unique style with confidence and ease.</span>
      </div>
      <div class="row q-col-gutter-xs q-row-gutter-md justify-center">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 q-mt-xl" v-for="(product, i) in products" :key="product.name">
          <q-card flat @click="toDetail(i)" class="q-pa-sm cursor-pointer">
            <q-img src="~assets/miniskirt.jpg" width="100%" style="height: 600px; object-fit: cover;"></q-img>
            <div class="row q-mt-md justify-between">
              <div>{{ product.name }}</div>
              <div>KRW {{ product.price }}</div>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Vue3Marquee } from 'vue3-marquee';
import { api } from 'src/boot/axios';
import Cookies from "js-cookie";

const $router = useRouter()
const helloArray = ['new PRODUCT OPEN.7% SALES/S PRODUCT ALL VIEW YOUR ITEM!', ' new PRODUCT OPEN.7% SALES/S PRODUCT ALL VIEW YOUR ITEM!']

function toDetail(product) {
  $router.push(`detail?id=${product}`);
}

const products = ref([
  {
    name: "t-shirt",
    price: "30,000",
    description: "땀 흡수 ㅈ됨"
  },
]);

function fetchData() {
  const token = Cookies.get('jwt_token')
  api.get('/item', {
    headers: { Authorization: `Bearer ${token}` }
  }).then((res) => {
    console.log(res);
    products.value = res.data;
  })
    .catch((error) => {
      console.error(error);
    });
}

onMounted(() => {
  fetchData()
})

</script>
