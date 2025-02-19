<template>
  <q-page class="flex flex-center column q-pa-md q-pb-xl">
    <q-img src="~assets/miniskirt.jpg" width="500px"></q-img>
    <q-card flat class="q-mt-md">
      <div class="text-bold text-subtitle1">
        <div>{{ productId }}</div>
        <div>[당일배송] 3기장 H라인 베이직 스커트</div>
        <!-- <div>{{ productData.name }}</div>
        <div>{{ productData.description }}</div> -->

        <div class="row justify-between q-mt-md">
          <span>PRICE</span>
          <span>KRW 30,000</span>
          <!-- <div>{{ product.name }}</div>
          <div>{{ product.price }}</div> -->
        </div>
        <q-select class="q-my-md" square filled v-model="selectedSize" :options="options" :label="currentLabel"
          emit-value map-options="" />
      </div>
      <div class="row full-width">
        <q-btn class="col" square unelevated color="dark" label="Buy Now" @click="toOrder" />
        <q-btn class="col q-ml-sm" square unelevated color="dark" label="Add to cart" @click="addCart" />
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { api } from 'src/boot/axios';
import { onMounted, ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const $router = useRouter();
const productId = ref()
const selectedSize = ref(null);
const productData = ref();
const route = useRoute();

const toOrder = () => {
  $router.push('/order')
};

const options = ref([
  { label: 'Small', value: 'S' },
  { label: 'Medium', value: 'M' },
  { label: 'Large', value: 'L' }
]);

const currentLabel = computed(() =>
  selectedSize.value ? `선택된 사이즈: ${selectedSize.value} ` : "사이즈를 선택하세요"
);

function fetchData() {
  api.get(`item/${productId.value}`).then((res) => {
    productData.value = res.data
  })
}

function addCart() {
  api.post('/cart/add',
    { itemId: productId.value }
  )
}

onMounted(() => {
  productId.value = route.query.id
  fetchData();
})
</script>
