<template>
  <q-page class="q-pa-xl">
    <q-card square bordered flat class="q-px-sm q-py-lg" style="max-width: 600px; margin: auto;">
      <q-card style="border: 1px solid lightgrey;" square flat class="column q-mb-sm q-pa-md"
        v-for="(product, i) in products" :key="i">
        <q-checkbox v-model="product.isChecked" color="red" />
        <div class="row">
          <q-img src="~assets/miniskirt.jpg" width="100px" class="q-mr-md"></q-img>
          <div>
            <div class="text-bold text-subtitle1">{{ product.name }}</div>
            <div class="text-bold text-subtitle1 q-mt-sm">{{ product.price }}</div>
          </div>
        </div>
        <div class="row justify-between q-mt-md">
          <q-btn outline square unelevated>삭제</q-btn>
          <q-btn square unelevated color="black">주문하기</q-btn>
        </div>
      </q-card>


      <div class="row full-width justify-between">
        <q-btn unelevated outline square class="col">전체선택</q-btn>
        <q-btn unelevated outline square class="col q-ml-md">선택삭제</q-btn>
      </div>

      <q-btn class="full-width q-mt-sm" padding="14px" unelevated color="black" square @click="toOrder">전체상품주문</q-btn>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, onMounted, useRouter } from 'vue';
import { api } from 'src/boot/axios';

const $router = useRouter
const toOrder = () => {
  $router.push('/order')
};

const products = ref([
  {
    name: "t-shirt",
    price: "30,000",
    description: "땀 흡수 ㅈ됨",
    isChecked: false
  },
  {
    name: "hoodie",
    price: "50,000",
    description: "두꺼운 원단, 겨울용",
    isChecked: false

  },
  {
    name: "jeans",
    price: "40,000",
    description: "슬림 핏, 편안한 착용감",
    isChecked: false

  }
]);

function cart() {
  api.get('/cart')
    .then((res) => {
      console.log(res);
      products.value = res.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

onMounted(() => {
  cart();
})
</script>
