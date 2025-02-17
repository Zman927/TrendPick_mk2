<template>
  <q-page class="column flex flex-center">
    <q-card flat square class="q-pa-md" style="border: 1px solid lightgrey;">
      <div class="text-bold text-subtitle1" style="min-width: 500px;">로그인</div>
      <q-input square class="q-my-md" filled v-model="idInput" label="이메일" />
      <q-input type="password" square class="q-mb-md" filled v-model="pwInput" label="비밀번호" />
      <q-btn square class="full-width q-mb-md" unelevated color="black" label="로그인" @click="login" />

      <div class="row items-center q-gutter-lg flex flex-center">
        <span class="cursor-pointer">아이디 찾기</span>
        <span class="cursor-pointer" @click="toFindPwd">비밀번호 찾기</span>
        <span class="cursor-pointer" @click="toSignUp">회원가입</span>
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { api } from 'src/boot/axios';
import Cookies from "js-cookie";

const $router = useRouter();
const idInput = ref()
const pwInput = ref()

const toSignUp = () => {
  $router.push('/signup')
};

const toFindPwd = () => {
  $router.push('/findpwd')
}

function login() {
  api.post('/auth/login', {
    email: idInput.value,
    password: pwInput.value
  })
    .then((res) => {
      console.log('로그인 성공:', res);

      const token = res.data.token;

      Cookies.set("jwt_token", token, {
        expires: 7,
      });

      console.log("토큰 저장 완료");

      $router.push('/')
    })
    .catch((error) => {
      console.error('로그인 실패:', error);
    });
}
</script>
