<template>
    <div class="filters-component">
      <h1>مثال على استخدام الفلاتر في Vue.js</h1>
      <!-- عرض النص الأصلي والنص بعد تطبيق فلتر تحويل الأحرف إلى كبيرة -->
      <p>
        <strong>النص الأصلي:</strong> {{ message }}
      </p>
      <p>
        <strong>النص بعد التحويل إلى أحرف كبيرة:</strong> {{ uppercaseMessage }}
      </p>
      <!-- عرض القيمة الرقمية قبل وبعد تطبيق فلتر تنسيق العملة -->
      <p>
        <strong>السعر الأصلي:</strong> {{ price }}
      </p>
      <p>
        <strong>السعر بعد تنسيق العملة:</strong> {{ formattedCurrency }}
      </p>
      <!-- عرض التاريخ قبل وبعد تطبيق فلتر تنسيق التاريخ -->
      <p>
        <strong>التاريخ الأصلي:</strong> {{ currentDate }}
      </p>
      <p>
        <strong>التاريخ بعد التنسيق (dd/mm/yyyy):</strong> {{ formattedDate }}
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FiltersComponent',
    data() {
      return {
        /**
         * @property {String} message - نص تجريبي للعرض.
         */
        message: 'مرحبا بكم في عالم Vue.js',
        /**
         * @property {Number} price - قيمة سعر تجريبي.
         */
        price: 1234.56,
        /**
         * @property {Date} currentDate - التاريخ الحالي.
         */
        currentDate: new Date()
      }
    },
    computed: {
      /**
       * تحويل النص إلى أحرف كبيرة
       * @returns {String} النص بعد التحويل
       */
      uppercaseMessage() {
        if (!this.message) return '';
        return this.message.toString().toUpperCase();
      },
      
      /**
       * تنسيق السعر كعملة
       * @returns {String} السعر بعد التنسيق
       */
      formattedCurrency() {
        if (typeof this.price !== "number") {
          return this.price;
        }
        return '$' + this.price.toFixed(2);
      },
      
      /**
       * تنسيق التاريخ بصيغة dd/mm/yyyy
       * @returns {String} التاريخ بعد التنسيق
       */
      formattedDate() {
        if (!this.currentDate) return '';
        const date = new Date(this.currentDate);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      }
    }
  }
  </script>
  
  <style scoped>
  /* تنسيق بسيط للمكون */
  .filters-component {
    padding: 20px;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
  }
  </style>
  