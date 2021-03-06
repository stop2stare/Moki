export default [{
  path: '/login',
  name: 'login-page',
  component: (resolve) => require(['./components/login/index'], resolve)
}, {
  path: '/',
  name: 'index-page',
  component: (resolve) => require(['./components/index/index'], resolve)
}, {
  path: '/setting',
  name: 'setting-page',
  component: (resolve) => require(['./components/setting/index'], resolve)
}, {
  path: '/city',
  name: 'city-page',
  component: (resolve) => require(['./components/city/index'], resolve)
}, {
  path: '*',
  redirect: '/'
}]
