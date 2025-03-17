import { createApp } from 'vue'
import App from './App.vue'
import FiltersComponent from './components/FiltersComponent.vue'

// إنشاء تطبيق Vue
const app = createApp(App);

// تسجيل المكون FiltersComponent بشكل عام
app.component('FiltersComponent', FiltersComponent);

// في Vue 3، تم إزالة الفلاتر العامة، لكن يمكننا إضافة دوال عامة للتطبيق
app.config.globalProperties.$filters = {
  /**
   * فلتر uppercase
   * الوصف: يقوم بتحويل النص إلى أحرف كبيرة.
   * المدخل: نص (String)
   * المخرج: نص بالحروف الكبيرة (String)
   */
  uppercase: function(value) {
    if (!value) return ''
    return value.toString().toUpperCase();
  },

  /**
   * فلتر currency
   * الوصف: يقوم بتنسيق القيمة الرقمية وإضافة رمز العملة ($) مع الحفاظ على رقمين عشريين.
   * المدخل: قيمة رقمية (Number)
   * المخرج: نص منسق كعملة (String)
   */
  currency: function(value) {
    if (typeof value !== "number") {
      return value;
    }
    return '$' + value.toFixed(2);
  },

  /**
   * فلتر removeNumbers
   * الوصف: يقوم بحذف جميع الأرقام من النص.
   * المدخل: نص (String)
   * المخرج: نص بدون أرقام (String)
   */
  removeNumbers: function(value) {
    if (!value) return '';
    return value.toString().replace(/\d/g, '');
  },

  /**
   * فلتر formatDate
   * الوصف: يقوم بتنسيق التاريخ إلى صيغة dd/mm/yyyy.
   * المدخل: تاريخ أو سلسلة تاريخية.
   * المخرج: نص يمثل التاريخ بصيغة dd/mm/yyyy.
   */
  formatDate: function(value) {
    if (!value) return '';
    const date = new Date(value);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
};

// تركيب التطبيق
app.mount('#app');
