<template>
  <q-layout view="hHh 1pr fff">
    <q-header flat pinned>
      <q-toolbar class="bg-white text-dark row items-center justify-between">
        <div class="row items-center cursor-pointer" @click="goToMainPage">
          <span class="text-h5 q-font-bold">TrendPick</span>
        </div>

        <div class="row items-center justify-center q-gutter-md">
          <span>
            <q-icon name="person" size="md" class="cursor-pointer" @click="goToLogin" />
          </span>
          <span>
            <q-icon name="shopping_bag" size="md" class="cursor-pointer" @click="goToCart" />
          </span>
          <span>
            <q-btn flat dense icon="menu" @click="onClickMenu"></q-btn>
            <q-drawer v-model="drawerOpen" side="right" overlay>
              <div class="column q-pa-lg text-bold cursor-pointer">
                <span v-for="cat in cats" :key="cat" class="text-uppercase cursor-pointer q-ml-md"
                  @click="handleCat(cat)">{{
                    cat
                  }}</span>
              </div>
              <div>

              </div>
            </q-drawer>
          </span>
        </div>
      </q-toolbar>
    </q-header>

    <q-footer flat class="bg-grey-2 row justify-between text-black text-weight-light q-pa-md">
      <div class="q-pa-md column">
        <span>INSTAGRAM</span>
        <span>SMART STORE</span>
        <span>KAKAOTALK</span>
      </div>
      <div class="q-pa-md column text-right">
        <span>상호명: TrendPick</span>
        <span>사업자등록번호: XXX-XX-XXXXX</span>
        <span>주소: ooo시 ooo동 123-45</span>
        <span>© 2025 TrendPick. All rights reserved.</span>
      </div>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const $router = useRouter();
const drawerOpen = ref(false)

const cats = ref([
  'all', 'outwear', 'top', 'bottom'
])

const handleCat = (cat) => {
  $router.push({ name: 'ProductList', query: { cat: cat } })
}

const goToMainPage = () => {
  $router.push('/')
};
const goToLogin = () => {
  $router.push('/login')
};
const goToCart = () => {
  $router.push('/shoppingcart')
};


function onClickMenu() {
  drawerOpen.value = !drawerOpen.value
}
</script>
