<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <!-- قسم توضيحي للتوجيهات (Directives) في Vue.js -->
    <div class="directives-section">
      <h2>أمثلة على التوجيهات (Directives) في Vue.js</h2>
      
      <!-- مثال على v-text و v-html -->
      <div class="directive-example">
        <h3>v-text و v-html</h3>
        <p v-text="textContent"></p>
        <p v-html="htmlContent"></p>
        <div class="explanation">
          <p>v-text: يعرض النص كما هو بدون تفسير علامات HTML</p>
          <p>v-html: يعرض النص مع تفسير علامات HTML (استخدم بحذر مع المحتوى الموثوق فقط)</p>
        </div>
      </div>
      
      <!-- مثال على v-for -->
      <div class="directive-example">
        <h3>v-for</h3>
        <ul>
          <li v-for="(item, index) in items" :key="index">{{ item }}</li>
        </ul>
        <div class="explanation">
          <p>v-for: يستخدم لتكرار عناصر بناءً على مصفوفة أو كائن</p>
        </div>
      </div>
      
      <!-- مثال على v-if و v-else-if و v-else -->
      <div class="directive-example">
        <h3>v-if, v-else-if, v-else</h3>
        <button @click="toggleCondition">تبديل الحالة ({{ condition }})</button>
        <p v-if="condition === 1">الحالة هي 1</p>
        <p v-else-if="condition === 2">الحالة هي 2</p>
        <p v-else>الحالة ليست 1 أو 2</p>
        <div class="explanation">
          <p>v-if, v-else-if, v-else: تستخدم للعرض الشرطي للعناصر</p>
        </div>
      </div>
      
      <!-- مثال على v-show و v-once -->
      <div class="directive-example">
        <h3>v-show و v-once</h3>
        <button @click="toggleShow">{{ showElement ? 'إخفاء' : 'إظهار' }}</button>
        <p v-show="showElement">هذا العنصر يظهر ويختفي باستخدام v-show</p>
        <p v-once>القيمة الأولية للعداد: {{ counter }}</p>
        <p>القيمة الحالية للعداد: {{ counter }}</p>
        <button @click="incrementCounter">زيادة العداد</button>
        <div class="explanation">
          <p>v-show: يتحكم في ظهور العنصر عبر خاصية CSS display</p>
          <p>v-once: يعرض العنصر مرة واحدة فقط ولا يتأثر بتغييرات البيانات لاحقًا</p>
        </div>
      </div>
      
      <!-- مثال على v-bind و v-on -->
      <div class="directive-example">
        <h3>v-bind و v-on</h3>
        <img :src="imageUrl" :alt="imageAlt" :style="{ width: imageWidth + 'px' }">
        <button v-on:click="changeImage">تغيير الصورة</button>
        <button @click="resetImage">إعادة تعيين</button>
        <div class="explanation">
          <p>v-bind (:): يربط سمات HTML بقيم ديناميكية</p>
          <p>v-on (@): يستخدم للاستماع للأحداث وتنفيذ دوال</p>
        </div>
      </div>
      
      <!-- مثال على v-model -->
      <div class="directive-example">
        <h3>v-model</h3>
        <input v-model="userInput" placeholder="أدخل نصًا هنا">
        <p>النص المدخل: {{ userInput }}</p>
        <div class="explanation">
          <p>v-model: يربط قيمة عنصر الإدخال مع متغير في البيانات (ربط ثنائي الاتجاه)</p>
        </div>
      </div>
      
      <!-- أمثلة إضافية للتوجيهات -->
      <h2>أمثلة متقدمة للتوجيهات</h2>
      
      <!-- مثال على v-model مع معدلات -->
      <div class="directive-example">
        <h3>v-model مع معدلات (Modifiers)</h3>
        <div>
          <label>v-model.trim:</label>
          <input v-model.trim="trimmedInput" placeholder="سيتم حذف المسافات الزائدة">
          <p>النص بعد الحذف: "{{ trimmedInput }}"</p>
        </div>
        <div>
          <label>v-model.number:</label>
          <input v-model.number="numericInput" type="text" placeholder="سيتم تحويله إلى رقم">
          <p>القيمة: {{ numericInput }} (النوع: {{ typeof numericInput }})</p>
        </div>
        <div>
          <label>v-model.lazy:</label>
          <input v-model.lazy="lazyInput" placeholder="يتم التحديث عند مغادرة الحقل">
          <p>القيمة: {{ lazyInput }}</p>
        </div>
        <div class="explanation">
          <p>معدلات v-model:</p>
          <p>.trim: يحذف المسافات الزائدة من بداية ونهاية النص</p>
          <p>.number: يحول القيمة المدخلة إلى رقم</p>
          <p>.lazy: يحدث التغيير عند حدث change بدلاً من input (عند مغادرة الحقل)</p>
        </div>
      </div>
      
      <!-- مثال على v-pre و v-cloak -->
      <div class="directive-example">
        <h3>v-pre و v-cloak</h3>
        <p v-pre>{{ هذا النص لن يتم معالجته بواسطة Vue }}</p>
        <p v-cloak>هذا العنصر سيكون مخفيًا حتى يتم تحميل Vue بالكامل</p>
        <div class="explanation">
          <p>v-pre: يتجاهل معالجة Vue للمحتوى ويعرضه كما هو</p>
          <p>v-cloak: يخفي العنصر حتى يتم تحميل Vue بالكامل (يحتاج إلى CSS)</p>
        </div>
      </div>
      
      <!-- مثال على v-for مع v-if -->
      <div class="directive-example">
        <h3>v-for مع v-if</h3>
        <ul>
          <li v-for="(item, index) in evenItems" :key="index">
            {{ item }} (فهرس زوجي: {{ index * 2 }})
          </li>
        </ul>
        <div class="explanation">
          <p>يُفضل استخدام computed property بدلاً من v-if مع v-for للأداء الأفضل</p>
          <p>في هذا المثال، نستخدم خاصية محسوبة (evenItems) لتصفية العناصر بدلاً من استخدام v-if مع v-for</p>
        </div>
      </div>
      
      <!-- مثال على v-bind مع الفئات والأنماط -->
      <div class="directive-example">
        <h3>v-bind مع الفئات والأنماط</h3>
        <div>
          <button @click="toggleActive">تبديل الحالة النشطة</button>
          <p :class="{ active: isActive, 'text-danger': hasError }">
            نص مع فئات ديناميكية
          </p>
          <p :style="{ color: textColor, fontSize: fontSize + 'px', fontWeight: isBold ? 'bold' : 'normal' }">
            نص مع أنماط ديناميكية
          </p>
        </div>
        <div class="explanation">
          <p>v-bind:class يمكن استخدامه مع كائن أو مصفوفة لتطبيق فئات CSS بشكل ديناميكي</p>
          <p>v-bind:style يمكن استخدامه لتطبيق أنماط CSS مباشرة بشكل ديناميكي</p>
        </div>
      </div>
      
      <!-- مثال على التوجيهات المخصصة -->
      <div class="directive-example">
        <h3>التوجيهات المخصصة (Custom Directives)</h3>
        <p v-highlight>هذا النص سيتم تمييزه باللون الأصفر</p>
        <p v-highlight:red>هذا النص سيتم تمييزه باللون الأحمر</p>
        <input v-focus placeholder="هذا الحقل سيكون مركزًا تلقائيًا">
        <div class="explanation">
          <p>يمكن إنشاء توجيهات مخصصة في Vue.js لإضافة سلوكيات خاصة للعناصر</p>
          <p>v-highlight: توجيه مخصص لتغيير لون خلفية العنصر</p>
          <p>v-focus: توجيه مخصص لتركيز عنصر الإدخال تلقائيًا</p>
        </div>
      </div>
      
      <!-- مثال على v-slot -->
      <div class="directive-example">
        <h3>v-slot (Slots)</h3>
        <slot-example>
          <template v-slot:header>
            <h4>هذا هو عنوان المحتوى</h4>
          </template>
          <template v-slot:default>
            <p>هذا هو المحتوى الافتراضي</p>
          </template>
          <template #footer>
            <p>هذا هو تذييل المحتوى (باستخدام الاختصار #)</p>
          </template>
        </slot-example>
        <div class="explanation">
          <p>v-slot (#): يستخدم لتحديد محتوى مخصص للـ slots في المكونات</p>
          <p>يمكن استخدام الاختصار # بدلاً من v-slot:</p>
        </div>
      </div>
    </div>
    
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
// مكون SlotExample للاستخدام مع مثال v-slot
const SlotExample = {
  template: `
    <div class="slot-container">
      <div class="slot-header">
        <slot name="header">عنوان افتراضي</slot>
      </div>
      <div class="slot-content">
        <slot>محتوى افتراضي</slot>
      </div>
      <div class="slot-footer">
        <slot name="footer">تذييل افتراضي</slot>
      </div>
    </div>
  `
};

export default {
  name: 'HelloWorld',
  components: {
    SlotExample
  },
  directives: {
    // توجيه مخصص لتمييز النص
    highlight: {
      mounted(el, binding) {
        // استخدام القيمة المحددة أو اللون الأصفر كافتراضي
        const color = binding.arg || 'yellow';
        el.style.backgroundColor = color;
      }
    },
    // توجيه مخصص لتركيز عنصر الإدخال
    focus: {
      mounted(el) {
        el.focus();
      }
    }
  },
  props: {
    msg: String
  },
  data() {
    return {
      // بيانات لمثال v-text و v-html
      textContent: 'هذا نص عادي يعرض باستخدام v-text',
      htmlContent: '<strong>هذا نص</strong> يحتوي على <span style="color: red;">HTML</span> ويعرض باستخدام v-html',
      
      // بيانات لمثال v-for
      items: ['عنصر 1', 'عنصر 2', 'عنصر 3', 'عنصر 4', 'عنصر 5'],
      
      // بيانات لمثال v-if
      condition: 1,
      
      // بيانات لمثال v-show و v-once
      showElement: true,
      counter: 0,
      
      // بيانات لمثال v-bind و v-on
      imageUrl: 'https://vuejs.org/images/logo.png',
      imageAlt: 'شعار Vue.js',
      imageWidth: 150,
      originalImageUrl: 'https://vuejs.org/images/logo.png',
      alternateImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
      
      // بيانات لمثال v-model
      userInput: '',
      
      // بيانات للأمثلة الإضافية
      trimmedInput: '',
      numericInput: 0,
      lazyInput: '',
      
      // بيانات لمثال v-bind مع الفئات والأنماط
      isActive: true,
      hasError: false,
      textColor: '#333',
      fontSize: 16,
      isBold: false
    }
  },
  computed: {
    /**
     * تصفية العناصر للحصول على العناصر ذات الفهارس الزوجية فقط
     * @returns {Array} مصفوفة تحتوي على العناصر ذات الفهارس الزوجية
     */
    evenItems() {
      return this.items.filter((_, index) => index % 2 === 0);
    }
  },
  methods: {
    /**
     * تبديل قيمة الشرط للمثال v-if
     * @returns {void}
     */
    toggleCondition() {
      this.condition = (this.condition % 3) + 1;
    },
    
    /**
     * تبديل حالة العرض للمثال v-show
     * @returns {void}
     */
    toggleShow() {
      this.showElement = !this.showElement;
    },
    
    /**
     * زيادة قيمة العداد للمثال v-once
     * @returns {void}
     */
    incrementCounter() {
      this.counter++;
    },
    
    /**
     * تغيير الصورة للمثال v-bind
     * @returns {void}
     */
    changeImage() {
      if (this.imageUrl === this.originalImageUrl) {
        this.imageUrl = this.alternateImageUrl;
        this.imageAlt = 'شعار Vue.js البديل';
        this.imageWidth = 200;
      } else {
        this.imageUrl = this.originalImageUrl;
        this.imageAlt = 'شعار Vue.js';
        this.imageWidth = 150;
      }
    },
    
    /**
     * إعادة تعيين الصورة للمثال v-bind
     * @returns {void}
     */
    resetImage() {
      this.imageUrl = this.originalImageUrl;
      this.imageAlt = 'شعار Vue.js';
      this.imageWidth = 150;
    },
    
    /**
     * تبديل الحالة النشطة للمثال v-bind مع الفئات
     * @returns {void}
     */
    toggleActive() {
      this.isActive = !this.isActive;
      this.hasError = !this.hasError;
      this.textColor = this.isActive ? '#333' : '#ff0000';
      this.fontSize = this.isActive ? 16 : 20;
      this.isBold = !this.isBold;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* تنسيقات إضافية لقسم التوجيهات */
.directives-section {
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  direction: rtl;
  text-align: right;
}

.directive-example {
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background-color: white;
}

.explanation {
  margin-top: 10px;
  padding: 10px;
  background-color: #f0f7ff;
  border-radius: 5px;
  font-size: 0.9em;
}

button {
  margin: 5px;
  padding: 8px 15px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3aa876;
}

input {
  padding: 8px;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
}

/* تنسيقات إضافية للأمثلة الجديدة */
.active {
  background-color: #42b983;
  color: white;
  padding: 5px;
  border-radius: 3px;
}

.text-danger {
  color: red;
  font-weight: bold;
}

.slot-container {
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 15px;
}

.slot-header {
  background-color: #f0f0f0;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.slot-content {
  padding: 15px;
}

.slot-footer {
  background-color: #f0f0f0;
  padding: 10px;
  border-top: 1px solid #ddd;
}

/* تنسيق لـ v-cloak */
[v-cloak] {
  display: none;
}
</style>
