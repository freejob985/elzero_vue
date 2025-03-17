<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="مرحباً بك في تطبيق Vue.js الخاص بك"/>
    <UserInfo 
      name="أحمد محمد" 
      email="ahmed@example.com" 
      title="بيانات المستخدم"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import UserInfo from './components/UserInfo.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    UserInfo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
