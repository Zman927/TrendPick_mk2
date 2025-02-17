<template>
  <q-page class="q-pb-xl">
    <q-card square bordered flat class="q-px-sm q-py-lg" style="max-width: 600px; margin: auto;">
      <q-card style="border: 1px solid lightgrey;" square flat class="column q-mb-sm q-pa-md"
        v-for="(product, i) in products" :key="i">
        <div class="row">
          <q-img src="~assets/miniskirt.jpg" width="100px" class="q-mr-md"></q-img>
          <div>
            <div class="text-bold text-subtitle1">{{ product.name }}</div>
            <div class="text-bold text-subtitle1 q-mt-sm">{{ product.price }}</div>
            <div class="text-bold text-subtitle1 q-mt-sm">Size: {{ product.size }}</div>
          </div>
        </div>
        <div class="row justify-between q-mt-md">
          <q-btn outline square unelevated>삭제</q-btn>
          <div class="row items-center q-gutter-sm">
            <q-btn outline square icon="remove" @click="decrementQty(product)" />
            <span>{{ product.quantity }}</span>
            <q-btn outline square icon="add" @click="incrementQty(product)" />
          </div>
        </div>
      </q-card>




      <q-btn class="full-width q-mt-sm" padding="14px" unelevated color="black" square @click="toOrder">주문하기</q-btn>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
//import { api } from 'src/boot/axios';

const products = ref([
  {
    name: "t-shirt",
    price: "30,000",
    size: "M",
    description: "땀 흡수 ㅈ됨",
    quantity: 1
  },
  {
    name: "hoodie",
    price: "50,000",
    size: "L",
    description: "두꺼운 원단, 겨울용",
    quantity: 1

  },
  {
    name: "jeans",
    price: "40,000",
    size: "S",
    description: "슬림 핏, 편안한 착용감",
    quantity: 1

  }
]);

function incrementQty(product) {
  product.quantity++
}

function decrementQty(product) {
  if (product.quantity > 1) {
    product.quantity--
  }
}


</script>
