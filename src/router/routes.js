const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'signup', component: () => import('pages/SignUpPage.vue') },
      { path: 'detail', component: () => import('pages/DetailPage.vue') },
      { path: 'shoppingcart', component: () => import('pages/ShoppingCart.vue')},
      { path: 'findpwd', component: () => import('pages/FindPasswordPage.vue')},
      { path: 'order', component: () => import('pages/OrderPage.vue')},
      { path: 'products', name: 'ProductList', component: () => import('pages/ProductListPage.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
