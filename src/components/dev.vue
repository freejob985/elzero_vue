<template>
    <div>
        <h1>Hello Dev</h1>
        
        <p v-text="variable1"></p>
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
    }
}   
</script>

<style scoped>

</style>
