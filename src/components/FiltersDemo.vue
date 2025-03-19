<template>
  <div class="filters-demo">
    <h2>{{ title }}</h2>
    
    <!-- القسم الأول: فلاتر النصوص -->
    <div class="filter-section">
      <h3>فلاتر النصوص</h3>
      
      <div class="filter-example">
        <p>النص الأصلي: <strong>{{ originalText }}</strong></p>
        <p>تحويل إلى أحرف كبيرة: <strong>{{ uppercase }}</strong></p>
        <p>تحويل إلى أحرف صغيرة: <strong>{{ lowercase }}</strong></p>
        <p>تحويل أول حرف إلى كبير: <strong>{{ capitalize }}</strong></p>
        <p>اقتطاع النص (10 أحرف): <strong>{{ truncated }}</strong></p>
      </div>
    </div>

    <!-- القسم الثاني: فلاتر الأرقام -->
    <div class="filter-section">
      <h3>فلاتر الأرقام</h3>
      
      <div class="filter-example">
        <p>الرقم الأصلي: <strong>{{ originalPrice }}</strong></p>
        <p>تنسيق العملة: <strong>{{ formattedCurrency }}</strong></p>
        <p>تقريب الرقم: <strong>{{ roundedNumber }}</strong></p>
        <p>إضافة نسبة مئوية: <strong>{{ percentage }}</strong></p>
      </div>
    </div>

    <!-- القسم الثالث: فلاتر التواريخ -->
    <div class="filter-section">
      <h3>فلاتر التواريخ</h3>
      
      <div class="filter-example">
        <p>التاريخ الأصلي: <strong>{{ originalDate }}</strong></p>
        <p>تنسيق التاريخ: <strong>{{ formattedDate }}</strong></p>
        <p>تنسيق الوقت: <strong>{{ formattedTime }}</strong></p>
        <p>تنسيق التاريخ والوقت: <strong>{{ formattedDateTime }}</strong></p>
      </div>
    </div>

    <!-- القسم الرابع: فلاتر مخصصة -->
    <div class="filter-section">
      <h3>فلاتر مخصصة</h3>
      
      <div class="filter-example">
        <p>النص الأصلي: <strong>{{ customText }}</strong></p>
        <p>إضافة نجوم: <strong>{{ withStars }}</strong></p>
        <p>عكس النص: <strong>{{ reversed }}</strong></p>
        <input 
          v-model="customText" 
          placeholder="أدخل نصًا لتطبيق الفلاتر عليه"
          class="custom-input"
        />
      </div>
    </div>

    <!-- القسم الخامس: سلسلة من الفلاتر -->
    <div class="filter-section">
      <h3>سلسلة من الفلاتر</h3>
      
      <div class="filter-example">
        <p>النص الأصلي: <strong>{{ chainText }}</strong></p>
        <p>تطبيق سلسلة فلاتر: <strong>{{ chainedFilters }}</strong></p>
        <p class="note">
          (تحويل إلى أحرف كبيرة ثم اقتطاع 10 أحرف ثم إضافة نجوم)
        </p>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * مكون FiltersDemo
 * 
 * هذا المكون يوضح استخدام الفلاتر في Vue.js مع أمثلة متنوعة
 * يتضمن فلاتر للنصوص، الأرقام، التواريخ، وفلاتر مخصصة
 * 
 * @component
 */
export default {
  name: 'FiltersDemo',
  props: {
    /**
     * عنوان المكون
     * @type {String}
     * @default "عرض توضيحي للفلاتر في Vue.js"
     */
    title: {
      type: String,
      default: "عرض توضيحي للفلاتر في Vue.js"
    }
  },
  data() {
    return {
      // بيانات للفلاتر النصية
      originalText: "مرحبا بالعالم",
      
      // بيانات للفلاتر الرقمية
      originalPrice: 1234.56789,
      
      // بيانات للفلاتر الزمنية
      originalDate: new Date(),
      
      // بيانات للفلاتر المخصصة
      customText: "نص قابل للتعديل",
      
      // بيانات لسلسلة الفلاتر
      chainText: "هذا نص لتطبيق سلسلة من الفلاتر عليه"
    }
  },
  computed: {
    /**
     * فلاتر النصوص
     */
    uppercase() {
      // تحويل النص إلى أحرف كبيرة
      return this.originalText.toUpperCase();
    },
    lowercase() {
      // تحويل النص إلى أحرف صغيرة
      return this.originalText.toLowerCase();
    },
    capitalize() {
      // تحويل الحرف الأول إلى حرف كبير
      if (!this.originalText) return '';
      return this.originalText.charAt(0).toUpperCase() + this.originalText.slice(1);
    },
    truncated() {
      // اقتطاع النص إلى 10 أحرف
      return this.originalText.length > 10 
        ? this.originalText.substring(0, 10) + '...' 
        : this.originalText;
    },
    removeNumbers() {
      // حذف الأرقام من النص
      return this.originalText.replace(/\d/g, '');
    },


    /**
     * فلاتر الأرقام
     */
    formattedCurrency() {
      // تنسيق الرقم كعملة
      return new Intl.NumberFormat('ar-EG', { 
        style: 'currency', 
        currency: 'EGP' 
      }).format(this.originalPrice);
    },
    roundedNumber() {
      // تقريب الرقم إلى رقمين عشريين
      return this.originalPrice.toFixed(2);
    },
    percentage() {
      // تحويل الرقم إلى نسبة مئوية
      return (this.originalPrice * 100).toFixed(2) + '%';
    },

    /**
     * فلاتر التواريخ
     */
    formattedDate() {
      // تنسيق التاريخ
      return new Intl.DateTimeFormat('ar-EG', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }).format(this.originalDate);
    },
    formattedTime() {
      // تنسيق الوقت
      return new Intl.DateTimeFormat('ar-EG', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      }).format(this.originalDate);
    },
    formattedDateTime() {
      // تنسيق التاريخ والوقت
      return new Intl.DateTimeFormat('ar-EG', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit'
      }).format(this.originalDate);
    },

    /**
     * فلاتر مخصصة
     */
    withStars() {
      // إضافة نجوم قبل وبعد النص
      return '★ ' + this.customText + ' ★';
    },
    reversed() {
      // عكس النص
      return this.customText.split('').reverse().join('');
    },

    /**
     * سلسلة من الفلاتر
     */
    chainedFilters() {
      // تطبيق سلسلة من الفلاتر: تحويل إلى أحرف كبيرة، ثم اقتطاع، ثم إضافة نجوم
      const uppercase = this.chainText.toUpperCase();
      const truncated = uppercase.length > 10 ? uppercase.substring(0, 10) + '...' : uppercase;
      return '★ ' + truncated + ' ★';
    }
  },
  methods: {
    /**
     * طريقة لتنسيق النص كعنوان
     * @param {String} text - النص المراد تنسيقه
     * @returns {String} - النص بعد التنسيق
     */
    formatAsTitle(text) {
      return text.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    },
    
    /**
     * طريقة لتنسيق الرقم بإضافة فواصل للآلاف
     * @param {Number} number - الرقم المراد تنسيقه
     * @returns {String} - الرقم بعد التنسيق
     */
    formatNumber(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
}
</script>

<style scoped>
.filters-demo {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  direction: rtl;
  text-align: right;
  max-width: 800px;
  margin: 20px auto;
}

h2 {
  color: #2c3e50;
  border-bottom: 2px solid #42b983;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.filter-section {
  margin-bottom: 30px;
  background-color: white;
  border-radius: 6px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h3 {
  color: #42b983;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.filter-example {
  padding: 10px;
  border-right: 3px solid #42b983;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.filter-example p {
  margin: 8px 0;
}

.custom-input {
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  direction: rtl;
}

.note {
  font-size: 0.9em;
  color: #666;
  font-style: italic;
}
</style> 