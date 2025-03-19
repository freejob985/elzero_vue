<template>
    <div class="container">
      <!-- v-if و v-show للتحكم في العرض -->
      <p v-if="isVisible">هذا النص يظهر فقط عندما isVisible = true</p>
      <p v-show="isVisible">هذا النص مخفي باستخدام CSS عند isVisible = false</p>
      
      <button @click="toggleVisibility">تبديل الرؤية</button>
      
      <!-- v-for لإنشاء قائمة ديناميكية -->
      <ul>
        <li v-for="(item, index) in items" :key="index">
          {{ index + 1 }} - {{ item }}
        </li>
      </ul>
      
      <!-- v-model لربط البيانات مع نموذج الإدخال -->
      <input v-model="message" placeholder="اكتب شيئًا هنا">
      <p>رسالتك: {{ message }}</p>
      
      <!-- v-bind لربط الكلاسات والأنماط ديناميكيًا -->
      <div :class="{ 'highlight': isActive }" @click="toggleActive">
        اضغط لتغيير اللون
      </div>
      
      <!-- v-on للتعامل مع الأحداث -->
      <button v-on:click="sayHello">اضغطني</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: true, // للتحكم في إظهار النصوص
        items: ['تفاحة', 'موزة', 'برتقالة'], // قائمة العناصر لعرضها باستخدام v-for
        message: '', // لربط الإدخال مع البيانات
        isActive: false // لتغيير الفئة (class) ديناميكيًا
      };
    },
    methods: {
      toggleVisibility() {
        this.isVisible = !this.isVisible;
      },
      toggleActive() {
        this.isActive = !this.isActive;
      },
      sayHello() {
        alert('مرحبًا بك في Vue.js!');
      }
    }
  };
  </script>
  
  <style>
  .container {
    text-align: center;
    margin-top: 20px;
  }
  .highlight {
    background-color: yellow;
    padding: 10px;
    cursor: pointer;
  }
  </style>
  