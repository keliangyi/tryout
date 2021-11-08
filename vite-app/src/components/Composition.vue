<template>
    <h1>
        this is a Composition Component
    </h1>

    <p>
        {{ number }}
        <button @click="changeNumber()">
            change number 
        </button>
    </p>
    <p>
        {{ obj.name }}
        <span>
            {{ nameUp }}
        </span>
        <button @click="changeName()">
            change name 
        </button>
    </p>
    <hr>
    <User :name="obj.name" :age="obj.age" :count="number" data-extra="将会在setup 的第二个参数中出现"/>
</template>

<script>
    import { ref, reactive, watch, watchEffect, computed, toRefs, onMounted } from 'vue'
    import User from './User.vue';

    export default {
    /**
     * 在所有生命周期函数之前执行
     *
     */
    setup() {
        console.log("setup");
        const number = ref(1);
        const obj = reactive({
            name: "cj",
            age: 15,
            nameUp: computed(() => obj.name.toLocaleUpperCase())
        });
        const changeNumber = () => {
            number.value += number.value;
        };
        const changeName = () => {
            obj.name = "tom";
        };
        watch([obj, number], (newVal, oldVal) => {
            console.log(newVal, oldVal);
        });
        watchEffect(() => {
            console.log(obj.name, "当 obj.name 变化时触发的watchEffect，会自动监听");
        });
        onMounted(() => {
            setTimeout(() => {
                changeName()
            },3500)
        })
        return {
            number,
            changeNumber,
            obj,
            changeName,
            ...toRefs(obj)
        };
    },
    components: { User }
}

</script>