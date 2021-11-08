<template>
    <h1>User:{{ count }}</h1>
    <p>{{ desc }}</p>
    <p>{{ withComputed }}</p>
</template>

<script>
    import { ref, computed, onBeforeUpdate } from 'vue'
    export default {
        props:['name','age','count'],
        setup(props, content){
            const desc = ref(`props：${props.name}今年${props.age}岁了`) // ❌， withComputed 才是正确的
            const withComputed = computed(() => `withComputed：${props.name}今年${props.age}岁了`)
            console.log('content',content);

            onBeforeUpdate(() => {
                console.log('composition onBeforeUpdate')
            },)

            return {
                desc,
                withComputed
            }
        }
    }
</script>