
<template>
   <h1>child:{{ msg }}</h1>
   <input v-model="username"/>
   <button @click="handleSend">
       传给父父组件
   </button>
</template>
<script>

export default {
    name:"child",
    props:['msg'],
    emits:['onSend'],
    data(){
        return {
            username:""
        }
    },
    methods:{
        handleSend(){
            this.$emit('onSend',this.username)
        }
    },
    watch:{
        msg(p){
            console.log('msg changed',p);
        }
    },
    // 生命周期
    beforeCreate(){
        console.log("beforeCreate：数据初始化之前")
    },
    created(){
        console.log("created：数据初始化之后")
    },
    beforeMount(){
        console.log("beforeMount：组件挂载前")
    },
    mounted(){
        // setTimeout(() => {
        //     this.username = 'mounted change'
        // },2000)
        console.log("mounted：组件挂载渲染后")
    },
    beforeUpdate(){
        console.log("beforeUpdate：更新前")
    },
    updated(){
        console.log("updated：更新后")
    },
    beforeUnmount(){
        console.log("beforeUnmount：销毁前")
    },
    unmounted(){
        console.log("unmounted：销毁后")
    },
}
</script>