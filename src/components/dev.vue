<template>
    <div>
        <h1>Hello Dev</h1>
        
        <p v-text="removeNumbers"></p>
        <p v-html="variable2"></p>
    </div>
</template>

<script>
export default {
    name: 'DevComponent',
    data() {
        return {
            variable1: 'value1',
            variable2: '<h1>value2</h1>'
        }
    },
    methods: {
     
    },
    computed: {
        removeNumbers() {
            return this.variable1.replace(/\d/g, '');
        }
    }
}   
</script>

<style scoped>

</style>
