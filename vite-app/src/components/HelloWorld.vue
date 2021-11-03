<script setup>
    import { ref } from 'vue'

    defineProps({
        msg: String
    })

    const count = ref(0)
</script>

<template>
    <div>
        <h1>{{ msg }}</h1>  
        <button type="button" @click="count++">count is: {{ count }}</button> 
    </div>
</template>

<style scoped>
    a {
    color: #42b983;
    }
</style>
