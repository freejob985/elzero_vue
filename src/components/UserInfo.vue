<template>
  <div class="user-info">
    <h2>{{ title }}</h2>
    <p>اسم المستخدم: {{ name }}</p>
    <p>البريد الإلكتروني: {{ email }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    title: {
      type: String,
      default: 'معلومات المستخدم'
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.user-info {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin: 20px 0;
  background-color: #f9f9f9;
}
h2 {
  color: #42b983;
}
</style> 