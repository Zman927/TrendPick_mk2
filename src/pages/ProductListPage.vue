<template>
  <q-page class="column q-pb-xl">
    <div class="q-mt-xl q-ml-md">TrendPick Made</div>
    <div class="row q-mt-xs">
      <span v-for="cat in cats" :key="cat" class="text-uppercase cursor-pointer q-ml-md" @click="handleCat(cat)">{{ cat
        }}</span>

    </div>
    <div class="row q-col-gutter-xs q-row-gutter-md justify-center">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 q-mt-lg" v-for="(product, i) in products" :key="product.name">
        <q-card flat @click="toDetail(i)" class="q-pa-sm cursor-pointer">
          <q-img src="~assets/miniskirt.jpg" width="100%" style="height: 600px; object-fit: cover;"></q-img>
          <div class="row q-mt-md justify-between">
            <div>{{ product.name }}</div>
            <div>KRW {{ product.price }}</div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { api } from 'src/boot/axios';


const $router = useRouter()
const $route = useRoute()
const cats = ref([
  'all', 'outwear', 'top', 'bottom'
])

const products = ref([
  {
    name: "t-shirt",
    price: "30,000",
    description: "땀 흡수 ㅈ됨"
  },
  {
    name: "hoodie",
    price: "50,000",
    description: "두꺼운 원단, 겨울용"
  },
  {
    name: "jeans",
    price: "40,000",
    description: "슬림 핏, 편안한 착용감"
  },
  {
    name: "sneakers",
    price: "70,000",
    description: "내구성 좋은 고무 밑창"
  },
  {
    name: "cap",
    price: "20,000",
    description: "가볍고 통풍 잘됨"
  },
  {
    name: "jacket",
    price: "80,000",
    description: "방수 기능, 야외 활동에 적합"
  },
  {
    name: "socks",
    price: "5,000",
    description: "땀 흡수 잘되고 부드러운 착용감"
  },
  {
    name: "scarf",
    price: "25,000",
    description: "울 혼합, 따뜻하고 부드러움"
  },
  {
    name: "belt",
    price: "15,000",
    description: "고급 가죽, 내구성 뛰어남"
  },
  {
    name: "gloves",
    price: "30,000",
    description: "방한용, 터치 스크린 지원"
  }
]);

const handleCat = (cat) => {
  $router.push({ name: 'ProductList', query: { cat: cat } })
}

function toDetail(product) {
  $router.push(`detail?id=${product}`);
}

const category = ref('')

function fetchData() {
  api.get(`/item/category/${category.value}`).then((res) => {
    console.log(res);
    products.value = res.data;
  })
    .catch((error) => {
      console.error(error);
    });
}

onMounted(() => {
  category.value = $route.query.cat
  console.log(category.value)
  fetchData();
})

watch(() => $route.query.cat,
  (newCat) => {
    category.value = newCat;
    fetchData();
  }
);


</script>
